// Copyright 2023 The Bucketeer Authors.
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

package writer

import (
	"context"
	"fmt"
	"os"

	"cloud.google.com/go/bigquery/storage/apiv1/storagepb"
	"cloud.google.com/go/bigquery/storage/managedwriter"
	"go.uber.org/zap"
	"google.golang.org/api/option"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
	"google.golang.org/protobuf/reflect/protodesc"
	"google.golang.org/protobuf/reflect/protoreflect"

	"github.com/bucketeer-io/bucketeer/pkg/metrics"
)

const (
	bigqueryEmulatorHostEnv = "BIGQUERY_EMULATOR_HOST"
)

type options struct {
	logger  *zap.Logger
	metrics metrics.Registerer
}

type QueryOption func(*options)

func WithLogger(l *zap.Logger) QueryOption {
	return func(opts *options) {
		opts.logger = l
	}
}

func WithMetrics(r metrics.Registerer) QueryOption {
	return func(opts *options) {
		opts.metrics = r
	}
}

type Writer interface {
	AppendRows(ctx context.Context, batches [][][]byte) ([]int, error)
	Close() error
}

type writer struct {
	client *managedwriter.ManagedStream
	opts   *options
	logger *zap.Logger
}

func NewWriter(
	ctx context.Context,
	project, dataset, table string,
	desc protoreflect.MessageDescriptor,
	opts ...QueryOption,
) (Writer, error) {
	dopts := &options{
		logger: zap.NewNop(),
	}
	for _, opt := range opts {
		opt(dopts)
	}
	if dopts.metrics != nil {
		registerMetrics(dopts.metrics)
	}
	var gcpOpts []option.ClientOption
	if bigqueryEmulatorEndpoint := os.Getenv(bigqueryEmulatorHostEnv); bigqueryEmulatorEndpoint != "" {
		conn, err := grpc.Dial(bigqueryEmulatorEndpoint,
			grpc.WithTransportCredentials(insecure.NewCredentials()),
		)
		if err != nil {
			return nil, err
		}
		gcpOpts = append(gcpOpts, option.WithGRPCConn(conn))
	}
	logger := dopts.logger.Named("bigquery")
	c, err := managedwriter.NewClient(ctx, project, gcpOpts...)
	if err != nil {
		logger.Error("Failed to create client", zap.Error(err))
		return nil, err
	}
	var managedStream *managedwriter.ManagedStream
	if os.Getenv(bigqueryEmulatorHostEnv) != "" {
		pendingStream, err := c.CreateWriteStream(ctx, &storagepb.CreateWriteStreamRequest{
			Parent: fmt.Sprintf("projects/%s/datasets/%s/tables/%s", project, dataset, table),
			WriteStream: &storagepb.WriteStream{
				Type: storagepb.WriteStream_PENDING,
			},
		})
		if err != nil {
			return nil, err
		}
		managedStream, err = c.NewManagedStream(
			ctx,
			managedwriter.WithStreamName(pendingStream.GetName()),
			managedwriter.WithSchemaDescriptor(protodesc.ToDescriptorProto(desc)),
		)
		if err != nil {
			return nil, err
		}
	} else {
		managedStream, err = c.NewManagedStream(
			ctx,
			managedwriter.WithSchemaDescriptor(protodesc.ToDescriptorProto(desc)),
			managedwriter.WithDestinationTable(
				managedwriter.TableParentFromParts(project, dataset, table),
			),
			managedwriter.WithType(managedwriter.DefaultStream),
			managedwriter.EnableWriteRetries(true),
		)
		if err != nil {
			return nil, err
		}
	}
	return &writer{
		client: managedStream,
		opts:   dopts,
		logger: logger,
	}, nil
}

func (w *writer) AppendRows(
	ctx context.Context,
	batches [][][]byte,
) ([]int, error) {
	fails := make([]int, 0, len(batches))
	var err error
	defer record()(operationQuery, &err)
	results := []*managedwriter.AppendResult{}
	for idx, b := range batches {
		r, err := w.client.AppendRows(ctx, b)
		if err != nil {
			w.logger.Error("failed to append rows",
				zap.Error(err),
				zap.Int("index", idx),
			)
			// We can't use `continue` because the index will be shifted in next for loop
			fails = append(fails, idx)
		}
		results = append(results, r)
	}
	for idx, r := range results {
		_, err := r.GetResult(ctx)
		if err != nil {
			w.logger.Error("failed to get result of appending",
				zap.Error(err),
				zap.Int("index", idx),
			)
			fails = append(fails, idx)
		}
	}
	return getUniqueFails(fails), err
}

func (w *writer) Close() error {
	return w.client.Close()
}

func getUniqueFails(fs []int) []int {
	failMap := make(map[int]struct{})
	for _, f := range fs {
		failMap[f] = struct{}{}
	}
	fails := []int{}
	for key := range failMap {
		fails = append(fails, key)
	}
	return fails
}
