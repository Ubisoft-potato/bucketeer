// Copyright 2022 The Bucketeer Authors.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//

package experimentcalc

import (
	"context"
	_ "embed"
	"errors"
	"sort"
	"sync"
	"time"

	"github.com/go-gota/gota/dataframe"
	"go.uber.org/zap"

	"github.com/bucketeer-io/bucketeer/pkg/calculator/domain"
	"github.com/bucketeer-io/bucketeer/pkg/calculator/stan"
	v2es "github.com/bucketeer-io/bucketeer/pkg/calculator/storage/v2"
	envclient "github.com/bucketeer-io/bucketeer/pkg/environment/client"
	ecclient "github.com/bucketeer-io/bucketeer/pkg/eventcounter/client"
	experimentclient "github.com/bucketeer-io/bucketeer/pkg/experiment/client"
	"github.com/bucketeer-io/bucketeer/pkg/log"
	"github.com/bucketeer-io/bucketeer/pkg/metrics"
	"github.com/bucketeer-io/bucketeer/pkg/storage/v2/mysql"
	"github.com/bucketeer-io/bucketeer/proto/calculator"
	"github.com/bucketeer-io/bucketeer/proto/environment"
	"github.com/bucketeer-io/bucketeer/proto/eventcounter"
	"github.com/bucketeer-io/bucketeer/proto/experiment"
)

var (
	failedToSampleErr = errors.New("failed to get all samples")
)

const (
	day         = 24 * 60 * 60
	numOfChains = 5
)

type ExperimentCalculator struct {
	httpStan *stan.Stan
	modelID  string

	environmentClient  envclient.Client
	eventCounterClient ecclient.Client
	experimentClient   experimentclient.Client
	mysqlClient        mysql.Client
	metrics            metrics.Registerer

	logger *zap.Logger
}

func NewExperimentCalculator(
	httpStan *stan.Stan,
	environmentClient envclient.Client,
	eventCounterClient ecclient.Client,
	experimentClient experimentclient.Client,
	mysqlClient mysql.Client,
	metrics metrics.Registerer,
	logger *zap.Logger,
) *ExperimentCalculator {
	registerMetrics(metrics)
	compiledModel, err := httpStan.CompileModel(context.TODO(), stan.ModelCode())
	if err != nil {
		logger.Error("Failed to compile model",
			zap.Error(err),
		)
		return nil
	}
	modelID := compiledModel.Name[len("models/"):]
	return &ExperimentCalculator{
		httpStan: httpStan,
		modelID:  modelID,

		environmentClient:  environmentClient,
		eventCounterClient: eventCounterClient,
		experimentClient:   experimentClient,
		mysqlClient:        mysqlClient,
		metrics:            metrics,

		logger: logger.Named("experiment-calculator"),
	}
}

func (e ExperimentCalculator) Run(ctx context.Context, request *calculator.BatchCalcRequest) {
	now := time.Now()
	// Step 1: Get all the environments
	environments, environmentErr := e.listEnvironments(ctx)
	if environmentErr != nil {
		e.logger.Error("ExperimentCalculator failed to list environments",
			log.FieldsFromImcomingContext(ctx).AddFields(
				zap.Error(environmentErr),
			)...,
		)
		return
	}
	// Step 2: Get all the events for the experiment
	for _, env := range environments {
		experiments, experimentErr := e.listExperiments(ctx, env.Namespace)
		if experimentErr != nil {
			e.logger.Error("ExperimentCalculator failed to list experiments",
				log.FieldsFromImcomingContext(ctx).AddFields(
					zap.String("namespace", env.Namespace),
					zap.Error(experimentErr),
				)...,
			)
			return
		}
		for _, ex := range experiments {
			if ex.StartAt > now.Unix() {
				// already calculated
				continue
			}
			experimentResult := e.createExperimentResult(ctx, env.Namespace, ex)
			err := v2es.NewExperimentResultStorage(e.mysqlClient).
				UpdateExperimentResult(ctx, env.Namespace, &domain.ExperimentResult{
					ExperimentResult: experimentResult,
				})
			if err != nil {
				e.logger.Error("ExperimentCalculator failed to update experiment result",
					log.FieldsFromImcomingContext(ctx).AddFields(
						zap.String("namespace", env.Namespace),
						zap.String("experiment_id", ex.Id),
						zap.Error(err),
					)...,
				)
				continue
			}
			e.updateExperimentStatus(ctx, env.Namespace, ex, now)
		}
	}
}

func (e ExperimentCalculator) createExperimentResult(
	ctx context.Context,
	envNamespace string,
	experiment *experiment.Experiment,
) *eventcounter.ExperimentResult {
	experimentResult := &eventcounter.ExperimentResult{
		Id:           experiment.Id,
		ExperimentId: experiment.Id,
		UpdatedAt:    time.Now().Unix(),
	}
	var variationIDs []string
	for _, variation := range experiment.Variations {
		variationIDs = append(variationIDs, variation.Id)
	}
	endAts := listEndAt(experiment.StartAt, experiment.StopAt, time.Now().Unix())
	for _, goalID := range experiment.GoalIds {
		goalResult := &eventcounter.GoalResult{
			GoalId: goalID,
		}
		for _, v := range experiment.Variations {
			goalResult.VariationResults = append(goalResult.VariationResults, &eventcounter.VariationResult{
				VariationId: v.Id,
			})
		}
		for _, timestamp := range endAts {
			evalVc, evalErr := e.getEvaluationCount(ctx, &eventcounter.GetExperimentEvaluationCountRequest{
				EnvironmentNamespace: envNamespace,
				StartAt:              experiment.StartAt,
				EndAt:                timestamp,
				FeatureId:            experiment.FeatureId,
				FeatureVersion:       experiment.FeatureVersion,
				VariationIds:         variationIDs,
			})
			if evalErr != nil {
				return nil
			}
			goalVc, goalErr := e.getGoalCount(ctx, &eventcounter.GetExperimentGoalCountRequest{
				EnvironmentNamespace: envNamespace,
				StartAt:              experiment.StartAt,
				EndAt:                timestamp,
				GoalId:               goalID,
				FeatureId:            experiment.FeatureId,
				FeatureVersion:       experiment.FeatureVersion,
				VariationIds:         variationIDs,
			})
			if goalErr != nil {
				return nil
			}
			gr := e.calcGoalResult(ctx, evalVc, goalVc, experiment.BaseVariationId)
			gr.GoalId = experiment.GoalId
			e.appendVariationResult(ctx, timestamp, goalResult, gr.VariationResults)
		}
		experimentResult.GoalResults = append(experimentResult.GoalResults, goalResult)
	}

	return experimentResult
}

func (e ExperimentCalculator) listEnvironments(
	ctx context.Context,
) ([]*environment.Environment, error) {
	listEnvironmentsRequest := environment.ListEnvironmentsRequest{
		PageSize: 0,
		Cursor:   "",
	}
	resp, err := e.environmentClient.ListEnvironments(ctx, &listEnvironmentsRequest)
	if err != nil {
		return nil, err
	}
	return resp.Environments, err
}

func (e ExperimentCalculator) listExperiments(
	ctx context.Context,
	namespace string,
) ([]*experiment.Experiment, error) {
	req := &experiment.ListExperimentsRequest{
		From:                 time.Now().Add(-2 * 24 * time.Hour).Unix(),
		PageSize:             0,
		Cursor:               "",
		EnvironmentNamespace: namespace,
		Statuses: []experiment.Experiment_Status{
			experiment.Experiment_WAITING,
			experiment.Experiment_RUNNING,
		},
	}
	resp, err := e.experimentClient.ListExperiments(ctx, req)
	if err != nil {
		return nil, err
	}
	return resp.Experiments, nil
}

func (e ExperimentCalculator) getEvaluationCount(
	ctx context.Context,
	req *eventcounter.GetExperimentEvaluationCountRequest,
) (map[string]*eventcounter.VariationCount, error) {
	variationCounts := make(map[string]*eventcounter.VariationCount)
	evaluationCount, err := e.eventCounterClient.GetExperimentEvaluationCount(ctx, req)
	if err != nil {
		return variationCounts, err
	}
	for _, variationCount := range evaluationCount.VariationCounts {
		variationCounts[variationCount.VariationId] = variationCount
	}
	return variationCounts, nil
}

func (e ExperimentCalculator) getGoalCount(
	ctx context.Context,
	req *eventcounter.GetExperimentGoalCountRequest,
) (map[string]*eventcounter.VariationCount, error) {
	variationCounts := make(map[string]*eventcounter.VariationCount)
	goalCount, err := e.eventCounterClient.GetExperimentGoalCount(ctx, req)
	if err != nil {
		return variationCounts, err
	}
	for _, variationCount := range goalCount.VariationCounts {
		variationCounts[variationCount.VariationId] = variationCount
	}
	return variationCounts, nil
}

func (e ExperimentCalculator) calcGoalResult(
	ctx context.Context,
	evalVariationCounts,
	goalVariationCounts map[string]*eventcounter.VariationCount,
	baseVid string,
) *eventcounter.GoalResult {
	goalResult := &eventcounter.GoalResult{}
	length := len(goalVariationCounts)
	vids := make([]string, 0, length)
	goalUc, evalUc := make([]int64, 0, length), make([]int64, 0, length)
	vrs := make(map[string]*eventcounter.VariationResult, length)
	valueMeans, valueVars := make([]float64, 0, length), make([]float64, 0, length)
	baselineIdx, loopIdx := 0, 0

	for vid, goalVariationCount := range goalVariationCounts {
		if _, ok := evalVariationCounts[vid]; !ok {
			return nil
		}
		vids = append(vids, vid)
		evalVariationCount := evalVariationCounts[vid]
		vr := &eventcounter.VariationResult{
			VariationId:     vid,
			ExperimentCount: copyVariationCount(goalVariationCount),
			EvaluationCount: copyVariationCount(evalVariationCount),
		}
		evalUc = append(evalUc, evalVariationCount.UserCount)
		goalUc = append(goalUc, goalVariationCount.UserCount)
		valueMeans = append(valueMeans, goalVariationCount.ValueSumPerUserMean)
		valueVars = append(valueVars, goalVariationCount.ValueSumPerUserVariance)

		goalResult.VariationResults = append(goalResult.VariationResults, vr)
		vrs[vid] = vr
		if vid == baseVid {
			baselineIdx = loopIdx
		}
		loopIdx++
	}
	// Skip the calculation if evaluation count is less than goal count.
	for i := 0; i < len(evalUc); i++ {
		if evalUc[i] < goalUc[i] {
			return goalResult
		}
	}

	cvrResult, sampleErr := e.binomialModelSample(ctx, vids, goalUc, evalUc, baselineIdx)
	if sampleErr != nil {
		calculationCounter.WithLabelValues(calculateFail).Inc()
		e.logger.Error("BinomialModelSample error",
			log.FieldsFromImcomingContext(ctx).AddFields(
				zap.Error(sampleErr),
				zap.String("baseVariationID", baseVid),
			)...,
		)
		return goalResult
	}
	for vid, vr := range cvrResult {
		vrs[vid].CvrProb = copyDistributionSummary(vr.CvrProb)
		vrs[vid].CvrProbBest = copyDistributionSummary(vr.CvrProbBest)
		vrs[vid].CvrProbBeatBaseline = copyDistributionSummary(vr.CvrProbBeatBaseline)
	}
	// Skip the calculation if values are zero.
	for i := 0; i < len(vids); i++ {
		if goalUc[i] == 0 || valueMeans[i] == 0 || valueVars[i] == 0 {
			return goalResult
		}
	}
	valueResult := normalInverseGamma(ctx, vids, valueMeans, valueVars, goalUc, baselineIdx, 25000)
	for vid, vr := range valueResult {
		vrs[vid].GoalValueSumPerUserProb = copyDistributionSummary(vr.GoalValueSumPerUserProb)
		vrs[vid].GoalValueSumPerUserProbBest = copyDistributionSummary(vr.GoalValueSumPerUserProbBest)
		vrs[vid].GoalValueSumPerUserProbBeatBaseline = copyDistributionSummary(vr.GoalValueSumPerUserProbBeatBaseline)
	}
	calculationCounter.WithLabelValues(calculateSuccess).Inc()
	return goalResult
}

func (e ExperimentCalculator) appendVariationResult(
	ctx context.Context,
	timestamp int64,
	goalResult *eventcounter.GoalResult,
	srcVrs []*eventcounter.VariationResult,
) {
	sort.SliceStable(goalResult.VariationResults, func(i, j int) bool {
		return goalResult.VariationResults[i].VariationId < goalResult.VariationResults[j].VariationId
	})
	sort.SliceStable(srcVrs, func(i, j int) bool {
		return srcVrs[i].VariationId < srcVrs[j].VariationId
	})
	for i := 0; i < len(goalResult.VariationResults); i++ {
		goalResult.VariationResults[i].ExperimentCount = copyVariationCount(srcVrs[i].ExperimentCount)
		goalResult.VariationResults[i].EvaluationCount = copyVariationCount(srcVrs[i].EvaluationCount)

		goalResult.VariationResults[i].CvrProb = copyDistributionSummary(srcVrs[i].CvrProb)
		goalResult.VariationResults[i].CvrProbBest = copyDistributionSummary(srcVrs[i].CvrProbBest)
		goalResult.VariationResults[i].CvrProbBeatBaseline = copyDistributionSummary(srcVrs[i].CvrProbBeatBaseline)

		goalResult.VariationResults[i].GoalValueSumPerUserProb =
			copyDistributionSummary(srcVrs[i].GoalValueSumPerUserProb)
		goalResult.VariationResults[i].GoalValueSumPerUserProbBest =
			copyDistributionSummary(srcVrs[i].GoalValueSumPerUserProbBest)
		goalResult.VariationResults[i].GoalValueSumPerUserProbBeatBaseline =
			copyDistributionSummary(srcVrs[i].GoalValueSumPerUserProbBeatBaseline)

		goalResult.VariationResults[i].EvaluationUserCountTimeseries = &eventcounter.Timeseries{
			Timestamps: []int64{timestamp},
			Values:     []float64{float64(srcVrs[i].EvaluationCount.UserCount)},
		}
		goalResult.VariationResults[i].EvaluationEventCountTimeseries = &eventcounter.Timeseries{
			Timestamps: []int64{timestamp},
			Values:     []float64{float64(srcVrs[i].EvaluationCount.EventCount)},
		}
		goalResult.VariationResults[i].GoalUserCountTimeseries = &eventcounter.Timeseries{
			Timestamps: []int64{timestamp},
			Values:     []float64{float64(srcVrs[i].ExperimentCount.UserCount)},
		}
		goalResult.VariationResults[i].GoalEventCountTimeseries = &eventcounter.Timeseries{
			Timestamps: []int64{timestamp},
			Values:     []float64{float64(srcVrs[i].ExperimentCount.EventCount)},
		}
		goalResult.VariationResults[i].GoalValueSumTimeseries = &eventcounter.Timeseries{
			Timestamps: []int64{timestamp},
			Values:     []float64{srcVrs[i].ExperimentCount.ValueSum},
		}
		goalResult.VariationResults[i].CvrMedianTimeseries = &eventcounter.Timeseries{
			Timestamps: []int64{timestamp},
			Values:     []float64{srcVrs[i].CvrProb.Median},
		}
		goalResult.VariationResults[i].CvrPercentile025Timeseries = &eventcounter.Timeseries{
			Timestamps: []int64{timestamp},
			Values:     []float64{srcVrs[i].CvrProb.Percentile025},
		}
		goalResult.VariationResults[i].CvrPercentile975Timeseries = &eventcounter.Timeseries{
			Timestamps: []int64{timestamp},
			Values:     []float64{srcVrs[i].CvrProb.Percentile975},
		}
		cvr := 0.0
		if srcVrs[i].EvaluationCount.UserCount != 0 {
			cvr = float64(srcVrs[i].ExperimentCount.UserCount) / float64(srcVrs[i].EvaluationCount.UserCount)
		}
		goalResult.VariationResults[i].CvrTimeseries = &eventcounter.Timeseries{
			Timestamps: []int64{timestamp},
			Values:     []float64{cvr},
		}
		valuePerUser := 0.0
		if srcVrs[i].ExperimentCount.UserCount != 0 {
			valuePerUser = srcVrs[i].ExperimentCount.ValueSum / float64(srcVrs[i].ExperimentCount.UserCount)
		}
		goalResult.VariationResults[i].GoalValueSumPerUserTimeseries = &eventcounter.Timeseries{
			Timestamps: []int64{timestamp},
			Values:     []float64{valuePerUser},
		}
		goalResult.VariationResults[i].GoalValueSumPerUserMedianTimeseries = &eventcounter.Timeseries{
			Timestamps: []int64{timestamp},
			Values:     []float64{srcVrs[i].GoalValueSumPerUserProb.Median},
		}
		goalResult.VariationResults[i].GoalValueSumPerUserPercentile025Timeseries = &eventcounter.Timeseries{
			Timestamps: []int64{timestamp},
			Values:     []float64{srcVrs[i].GoalValueSumPerUserProb.Percentile025},
		}
		goalResult.VariationResults[i].GoalValueSumPerUserPercentile975Timeseries = &eventcounter.Timeseries{
			Timestamps: []int64{timestamp},
			Values:     []float64{srcVrs[i].GoalValueSumPerUserProb.Percentile975},
		}
	}
}

func (e ExperimentCalculator) binomialModelSample(
	ctx context.Context,
	vids []string,
	goalUc, evalUc []int64,
	baseLineIdx int,
) (map[string]*eventcounter.VariationResult, error) {
	// The index starts from 1 in PyStan.
	startTime := time.Now()
	baseLineIdx++
	samplesChan := make(chan dataframe.DataFrame)
	wg := sync.WaitGroup{}
	wg.Add(numOfChains)
	for i := 1; i <= numOfChains; i++ {
		go func(chain int) {
			defer wg.Done()
			req := stan.CreateFitReq{
				Chain: chain,
				Data: map[string]interface{}{
					"g": len(goalUc),
					"x": goalUc,
					"n": evalUc,
				},
				Function:   stan.HmcNUTSFunction,
				NumSamples: 21000,
				NumWarmup:  1000,
				RandomSeed: 1234,
			}
			fitResp, err := e.httpStan.CreateFit(ctx, e.modelID, req)
			if err != nil {
				e.logger.Error("Failed to create fit",
					log.FieldsFromImcomingContext(ctx).AddFields(
						zap.String("modelId", e.modelID),
						zap.Error(err),
					)...,
				)
				return
			}
			fitId := fitResp[len("operations/"):]
			for {
				details, err := e.httpStan.GetOperationDetails(ctx, fitId)
				if err != nil {
					e.logger.Error("Failed to get operation details",
						log.FieldsFromImcomingContext(ctx).AddFields(
							zap.String("fitId", fitId),
							zap.Error(err),
						)...,
					)
					return
				}
				if details.Done {
					break
				}
				time.Sleep(50 * time.Millisecond)
			}
			result, err := e.httpStan.GetFitResult(ctx, e.modelID, fitId)
			if err != nil {
				e.logger.Error("Failed to get fit result",
					log.FieldsFromImcomingContext(ctx).AddFields(
						zap.String("fitId", fitId),
						zap.Error(err),
					)...,
				)
				return
			}
			fit := e.httpStan.ExtractFromFitResult(ctx, result)
			constrainedNames, _ := e.httpStan.StanParams(ctx, e.modelID, req.Data)
			samplesChan <- fit.Select(constrainedNames)
		}(i)
	}
	go func() {
		wg.Wait()
		close(samplesChan)
	}()

	samples := make([]dataframe.DataFrame, 0, numOfChains)
	for sample := range samplesChan {
		samples = append(samples, sample)
	}

	if len(samples) != numOfChains {
		e.logger.Error("Failed to get all samples",
			log.FieldsFromImcomingContext(ctx).AddFields(
				zap.Int("numOfChains", numOfChains),
				zap.Int("numOfSamples", len(samples)),
			)...,
		)
		return nil, failedToSampleErr
	}

	variationResults := convertFitSamples(samples, vids, baseLineIdx)

	calculationHistogram.WithLabelValues(binomialModelSampleMethod).Observe(time.Since(startTime).Seconds())
	return variationResults, nil
}

func (e ExperimentCalculator) updateExperimentStatus(
	ctx context.Context,
	namespace string,
	ex *experiment.Experiment,
	now time.Time,
) {
	if ex.Status == experiment.Experiment_RUNNING ||
		ex.Status == experiment.Experiment_WAITING {
		twoDaysAgo := now.Add(-2 * 24 * time.Hour).Unix()
		if ex.StopAt < twoDaysAgo {
			req := &experiment.FinishExperimentRequest{
				EnvironmentNamespace: namespace,
				Id:                   ex.Id,
				Command:              &experiment.FinishExperimentCommand{},
			}
			_, err := e.experimentClient.FinishExperiment(ctx, req)
			if err != nil {
				e.logger.Error("Failed to finish experiment",
					log.FieldsFromImcomingContext(ctx).AddFields(
						zap.String("experimentId", ex.Id),
						zap.Error(err),
					)...,
				)
			}
			return
		}
	}
	if ex.Status == experiment.Experiment_WAITING {
		if ex.StartAt <= now.Unix() {
			req := &experiment.StartExperimentRequest{
				EnvironmentNamespace: namespace,
				Id:                   ex.Id,
				Command:              &experiment.StartExperimentCommand{},
			}
			_, err := e.experimentClient.StartExperiment(ctx, req)
			if err != nil {
				e.logger.Error("Failed to start experiment",
					log.FieldsFromImcomingContext(ctx).AddFields(
						zap.String("experimentId", ex.Id),
						zap.Error(err),
					)...,
				)
			}
			return
		}
	}
}

//-------------------------------------utility functions----------------------------------------------

func listEndAt(startAt, endAt, now int64) []int64 {
	var timestamps []int64
	if endAt >= now {
		endAt = now
	}
	for ts := startAt + day; ts < endAt; ts += day {
		timestamps = append(timestamps, ts)
	}
	timestamps = append(timestamps, endAt)
	return timestamps
}

func copyVariationCount(from *eventcounter.VariationCount) *eventcounter.VariationCount {
	return &eventcounter.VariationCount{
		VariationId:             from.VariationId,
		UserCount:               from.UserCount,
		EventCount:              from.EventCount,
		ValueSum:                from.ValueSum,
		CreatedAt:               from.CreatedAt,
		VariationValue:          from.VariationValue,
		ValueSumPerUserMean:     from.ValueSumPerUserMean,
		ValueSumPerUserVariance: from.ValueSumPerUserVariance,
	}

}

func copyDistributionSummary(from *eventcounter.DistributionSummary) *eventcounter.DistributionSummary {
	hist := make([]int64, 0, len(from.Histogram.Hist))
	bins := make([]float64, 0, len(from.Histogram.Bins))
	copy(hist, from.Histogram.Hist)
	copy(bins, from.Histogram.Bins)
	return &eventcounter.DistributionSummary{
		Mean: from.Mean,
		Sd:   from.Sd,
		Rhat: from.Rhat,
		Histogram: &eventcounter.Histogram{
			Hist: hist,
			Bins: bins,
		},
		Median:        from.Median,
		Percentile025: from.Percentile025,
		Percentile975: from.Percentile975,
	}
}

func convertFitSamples(
	samples []dataframe.DataFrame,
	vids []string,
	baselineIdx int,
) map[string]*eventcounter.VariationResult {
	variationResults := make(map[string]*eventcounter.VariationResult)
	allSample := contactSamples(samples)
	for i := 1; i < len(vids)+1; i++ {
		vr := &eventcounter.VariationResult{
			CvrProb:             createCvrProb(allSample, samples, i),
			CvrProbBest:         createCvrProbBest(allSample, samples, i),
			CvrProbBeatBaseline: createCvrProbBeatBaseline(allSample, samples, baselineIdx, i),
		}
		variationResults[vids[i-1]] = vr
	}
	return variationResults
}

func contactSamples(samples []dataframe.DataFrame) dataframe.DataFrame {
	var df dataframe.DataFrame
	for _, sample := range samples {
		df = df.Concat(sample)
	}
	return df
}
