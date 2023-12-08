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
//

package api

import (
	"context"
	"encoding/base64"
	"errors"
	"fmt"
	"net/url"
	"strconv"

	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	"go.uber.org/zap"
	"google.golang.org/genproto/googleapis/rpc/errdetails"

	"github.com/bucketeer-io/bucketeer/pkg/feature/command"
	"github.com/bucketeer-io/bucketeer/pkg/feature/domain"
	v2fs "github.com/bucketeer-io/bucketeer/pkg/feature/storage/v2"
	"github.com/bucketeer-io/bucketeer/pkg/locale"
	"github.com/bucketeer-io/bucketeer/pkg/log"
	"github.com/bucketeer-io/bucketeer/pkg/storage/v2/mysql"
	"github.com/bucketeer-io/bucketeer/pkg/uuid"
	accountproto "github.com/bucketeer-io/bucketeer/proto/account"
	featureproto "github.com/bucketeer-io/bucketeer/proto/feature"
)

const maskURI = "********"

func (s *FeatureService) CreateFlagTrigger(
	ctx context.Context,
	request *featureproto.CreateFlagTriggerRequest,
) (*featureproto.CreateFlagTriggerResponse, error) {
	localizer := locale.NewLocalizer(ctx)
	editor, err := s.checkRole(ctx, accountproto.Account_EDITOR, request.EnvironmentNamespace, localizer)
	if err != nil {
		return nil, err
	}
	if err = validateCreateFlagTriggerCommand(request.CreateFlagTriggerCommand, localizer); err != nil {
		s.logger.Info(
			"Invalid argument",
			log.FieldsFromImcomingContext(ctx).AddFields(
				zap.Error(err),
				zap.String("environmentNamespace", request.EnvironmentNamespace),
			)...,
		)
		return nil, err
	}
	flagTrigger, err := domain.NewFlagTrigger(
		request.EnvironmentNamespace,
		request.CreateFlagTriggerCommand,
	)
	if err != nil {
		s.logger.Error(
			"Failed to create flag trigger",
			log.FieldsFromImcomingContext(ctx).AddFields(zap.Error(err))...,
		)
		return nil, err
	}
	tx, err := s.mysqlClient.BeginTx(ctx)
	if err != nil {
		s.logger.Error(
			"Failed to begin transaction",
			log.FieldsFromImcomingContext(ctx).AddFields(
				zap.Error(err),
				zap.String("environmentNamespace", request.EnvironmentNamespace),
			)...,
		)
	}
	err = s.mysqlClient.RunInTransaction(ctx, tx, func() error {
		storage := v2fs.NewFlagTriggerStorage(tx)
		handler := command.NewFlagTriggerCommandHandler(
			editor,
			flagTrigger,
			s.domainPublisher,
			request.EnvironmentNamespace,
		)
		if err := handler.Handle(ctx, request.CreateFlagTriggerCommand); err != nil {
			s.logger.Error(
				"Failed to create flag trigger",
				log.FieldsFromImcomingContext(ctx).AddFields(zap.Error(err))...,
			)
			return err
		}
		if err := storage.CreateFlagTrigger(ctx, flagTrigger); err != nil {
			s.logger.Error(
				"Failed to create flag trigger",
				log.FieldsFromImcomingContext(ctx).AddFields(
					zap.Error(err),
					zap.String("environmentNamespace", request.EnvironmentNamespace),
				)...,
			)
			return err
		}
		return nil
	})
	if err != nil {
		if errors.Is(err, v2fs.ErrFlagTriggerAlreadyExists) {
			dt, err := statusAlreadyExists.WithDetails(&errdetails.LocalizedMessage{
				Locale:  localizer.GetLocale(),
				Message: localizer.MustLocalize(locale.AlreadyExistsError),
			})
			if err != nil {
				return nil, statusInternal.Err()
			}
			return nil, dt.Err()
		}
		dt, err := statusInternal.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalize(locale.InternalServerError),
		})
		if err != nil {
			return nil, statusInternal.Err()
		}
		return nil, dt.Err()
	}
	flagTriggerSecret := domain.NewFlagTriggerSecret(
		flagTrigger.GetId(),
		request.CreateFlagTriggerCommand.FeatureId,
		request.EnvironmentNamespace,
		flagTrigger.GetUuid(),
		int(request.CreateFlagTriggerCommand.Action),
	)
	triggerURL, err := s.generateTriggerURL(ctx, flagTriggerSecret, false)
	if err != nil {
		s.logger.Error(
			"Failed to generate trigger url",
			log.FieldsFromImcomingContext(ctx).AddFields(zap.Error(err))...,
		)
		return nil, err
	}
	return &featureproto.CreateFlagTriggerResponse{
		FlagTrigger: flagTrigger.FlagTrigger,
		Url:         triggerURL,
	}, nil
}

func (s *FeatureService) UpdateFlagTrigger(
	ctx context.Context,
	request *featureproto.UpdateFlagTriggerRequest,
) (*featureproto.UpdateFlagTriggerResponse, error) {
	localizer := locale.NewLocalizer(ctx)
	editor, err := s.checkRole(ctx, accountproto.Account_EDITOR, request.EnvironmentNamespace, localizer)
	if err != nil {
		return nil, err
	}
	if err := validateUpdateFlagTriggerCommand(request.ChangeFlagTriggerDescriptionCommand, localizer); err != nil {
		s.logger.Info(
			"Invalid argument",
			log.FieldsFromImcomingContext(ctx).AddFields(
				zap.Error(err),
				zap.String("environmentNamespace", request.EnvironmentNamespace),
			)...,
		)
		return nil, err
	}
	tx, err := s.mysqlClient.BeginTx(ctx)
	if err != nil {
		s.logger.Error(
			"Failed to begin transaction",
			log.FieldsFromImcomingContext(ctx).AddFields(
				zap.Error(err),
				zap.String("environmentNamespace", request.EnvironmentNamespace),
			)...,
		)
	}
	err = s.mysqlClient.RunInTransaction(ctx, tx, func() error {
		storage := v2fs.NewFlagTriggerStorage(tx)
		flagTrigger, err := storage.GetFlagTrigger(
			ctx,
			request.ChangeFlagTriggerDescriptionCommand.Id,
			request.EnvironmentNamespace,
		)
		if err != nil {
			s.logger.Error(
				"Failed to get flag trigger",
				log.FieldsFromImcomingContext(ctx).AddFields(
					zap.Error(err),
					zap.String("environmentNamespace", request.EnvironmentNamespace),
				)...,
			)
			return err
		}
		handler := command.NewFlagTriggerCommandHandler(
			editor,
			flagTrigger,
			s.domainPublisher,
			request.EnvironmentNamespace,
		)
		if err := handler.Handle(ctx, request.ChangeFlagTriggerDescriptionCommand); err != nil {
			s.logger.Error(
				"Failed to update flag trigger",
				log.FieldsFromImcomingContext(ctx).AddFields(zap.Error(err))...,
			)
			return err
		}
		if err := storage.UpdateFlagTrigger(
			ctx,
			request.ChangeFlagTriggerDescriptionCommand.Id,
			request.EnvironmentNamespace,
			request.ChangeFlagTriggerDescriptionCommand.Description,
		); err != nil {
			s.logger.Error(
				"Failed to update flag trigger",
				log.FieldsFromImcomingContext(ctx).AddFields(
					zap.Error(err),
					zap.String("environmentNamespace", request.EnvironmentNamespace),
				)...,
			)
			return err
		}
		return nil
	})
	if err != nil {
		if errors.Is(err, v2fs.ErrFlagTriggerUnexpectedAffectedRows) {
			dt, err := statusNotFound.WithDetails(&errdetails.LocalizedMessage{
				Locale:  localizer.GetLocale(),
				Message: localizer.MustLocalize(locale.NotFoundError),
			})
			if err != nil {
				return nil, statusInternal.Err()
			}
			return nil, dt.Err()
		}
		dt, err := statusInternal.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalize(locale.InternalServerError),
		})
		if err != nil {
			return nil, statusInternal.Err()
		}
		return nil, dt.Err()
	}
	return &featureproto.UpdateFlagTriggerResponse{}, nil
}

func (s *FeatureService) EnableFlagTrigger(
	ctx context.Context,
	request *featureproto.EnableFlagTriggerRequest,
) (*featureproto.EnableFlagTriggerResponse, error) {
	localizer := locale.NewLocalizer(ctx)
	editor, err := s.checkRole(ctx, accountproto.Account_EDITOR, request.EnvironmentNamespace, localizer)
	if err != nil {
		return nil, err
	}
	if err := validateEnableFlagTriggerCommand(request.EnableFlagTriggerCommand, localizer); err != nil {
		s.logger.Info(
			"Invalid argument",
			log.FieldsFromImcomingContext(ctx).AddFields(
				zap.Error(err),
				zap.String("environmentNamespace", request.EnvironmentNamespace),
			)...,
		)
		return nil, err
	}
	tx, err := s.mysqlClient.BeginTx(ctx)
	if err != nil {
		s.logger.Error(
			"Failed to begin transaction",
			log.FieldsFromImcomingContext(ctx).AddFields(
				zap.Error(err),
				zap.String("environmentNamespace", request.EnvironmentNamespace),
			)...,
		)
	}
	err = s.mysqlClient.RunInTransaction(ctx, tx, func() error {
		storage := v2fs.NewFlagTriggerStorage(tx)
		flagTrigger, err := storage.GetFlagTrigger(
			ctx,
			request.EnableFlagTriggerCommand.Id,
			request.EnvironmentNamespace,
		)
		if err != nil {
			s.logger.Error(
				"Failed to get flag trigger",
				log.FieldsFromImcomingContext(ctx).AddFields(
					zap.Error(err),
					zap.String("environmentNamespace", request.EnvironmentNamespace),
				)...,
			)
			return err
		}
		handler := command.NewFlagTriggerCommandHandler(
			editor,
			flagTrigger,
			s.domainPublisher,
			request.EnvironmentNamespace,
		)
		if err := handler.Handle(ctx, request.EnableFlagTriggerCommand); err != nil {
			s.logger.Error(
				"Failed to enable flag trigger",
				log.FieldsFromImcomingContext(ctx).AddFields(zap.Error(err))...,
			)
			return err
		}
		if err := storage.EnableFlagTrigger(
			ctx,
			request.EnableFlagTriggerCommand.Id,
			request.EnvironmentNamespace,
		); err != nil {
			s.logger.Error(
				"Failed to enable flag trigger",
				log.FieldsFromImcomingContext(ctx).AddFields(
					zap.Error(err),
					zap.String("environmentNamespace", request.EnvironmentNamespace),
				)...,
			)
			return err
		}
		return nil
	})
	if err != nil {
		if errors.Is(err, v2fs.ErrFlagTriggerUnexpectedAffectedRows) {
			dt, err := statusNotFound.WithDetails(&errdetails.LocalizedMessage{
				Locale:  localizer.GetLocale(),
				Message: localizer.MustLocalize(locale.NotFoundError),
			})
			if err != nil {
				return nil, statusInternal.Err()
			}
			return nil, dt.Err()
		}
		dt, err := statusInternal.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalize(locale.InternalServerError),
		})
		if err != nil {
			return nil, statusInternal.Err()
		}
		return nil, dt.Err()
	}
	return &featureproto.EnableFlagTriggerResponse{}, nil
}

func (s *FeatureService) DisableFlagTrigger(
	ctx context.Context,
	request *featureproto.DisableFlagTriggerRequest,
) (*featureproto.DisableFlagTriggerResponse, error) {
	localizer := locale.NewLocalizer(ctx)
	editor, err := s.checkRole(ctx, accountproto.Account_EDITOR, request.EnvironmentNamespace, localizer)
	if err != nil {
		return nil, err
	}
	if err := validateDisableFlagTriggerCommand(request.DisableFlagTriggerCommand, localizer); err != nil {
		s.logger.Info(
			"Invalid argument",
			log.FieldsFromImcomingContext(ctx).AddFields(
				zap.Error(err),
				zap.String("environmentNamespace", request.EnvironmentNamespace),
			)...,
		)
		return nil, err
	}
	tx, err := s.mysqlClient.BeginTx(ctx)
	if err != nil {
		s.logger.Error(
			"Failed to begin transaction",
			log.FieldsFromImcomingContext(ctx).AddFields(
				zap.Error(err),
				zap.String("environmentNamespace", request.EnvironmentNamespace),
			)...,
		)
	}
	err = s.mysqlClient.RunInTransaction(ctx, tx, func() error {
		storage := v2fs.NewFlagTriggerStorage(tx)
		flagTrigger, err := storage.GetFlagTrigger(
			ctx,
			request.DisableFlagTriggerCommand.Id,
			request.EnvironmentNamespace,
		)
		if err != nil {
			s.logger.Error(
				"Failed to get flag trigger",
				log.FieldsFromImcomingContext(ctx).AddFields(
					zap.Error(err),
					zap.String("environmentNamespace", request.EnvironmentNamespace),
				)...,
			)
			return err
		}
		handler := command.NewFlagTriggerCommandHandler(
			editor,
			flagTrigger,
			s.domainPublisher,
			request.EnvironmentNamespace,
		)
		if err := handler.Handle(ctx, request.DisableFlagTriggerCommand); err != nil {
			s.logger.Error(
				"Failed to enable flag trigger",
				log.FieldsFromImcomingContext(ctx).AddFields(zap.Error(err))...,
			)
			return err
		}
		if err := storage.DisableFlagTrigger(
			ctx,
			request.DisableFlagTriggerCommand.Id,
			request.EnvironmentNamespace,
		); err != nil {
			s.logger.Error(
				"Failed to disable flag trigger",
				log.FieldsFromImcomingContext(ctx).AddFields(
					zap.Error(err),
					zap.String("environmentNamespace", request.EnvironmentNamespace),
				)...,
			)
			return err
		}
		return nil
	})
	if err != nil {
		if errors.Is(err, v2fs.ErrFlagTriggerUnexpectedAffectedRows) {
			dt, err := statusNotFound.WithDetails(&errdetails.LocalizedMessage{
				Locale:  localizer.GetLocale(),
				Message: localizer.MustLocalize(locale.NotFoundError),
			})
			if err != nil {
				return nil, statusInternal.Err()
			}
			return nil, dt.Err()
		}
		dt, err := statusInternal.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalize(locale.InternalServerError),
		})
		if err != nil {
			return nil, statusInternal.Err()
		}
		return nil, dt.Err()
	}
	return &featureproto.DisableFlagTriggerResponse{}, nil
}

func (s *FeatureService) ResetFlagTrigger(
	ctx context.Context,
	request *featureproto.ResetFlagTriggerRequest,
) (*featureproto.ResetFlagTriggerResponse, error) {
	localizer := locale.NewLocalizer(ctx)
	editor, err := s.checkRole(ctx, accountproto.Account_EDITOR, request.EnvironmentNamespace, localizer)
	if err != nil {
		return nil, err
	}
	if err := validateResetFlagTriggerCommand(request.ResetFlagTriggerCommand, localizer); err != nil {
		s.logger.Info(
			"Invalid argument",
			log.FieldsFromImcomingContext(ctx).AddFields(
				zap.Error(err),
				zap.String("environmentNamespace", request.EnvironmentNamespace),
			)...,
		)
		return nil, err
	}
	trigger, err := v2fs.NewFlagTriggerStorage(s.mysqlClient).
		GetFlagTrigger(ctx, request.ResetFlagTriggerCommand.Id, request.EnvironmentNamespace)
	if err != nil {
		if errors.Is(err, v2fs.ErrFlagTriggerNotFound) {
			dt, err := statusNotFound.WithDetails(&errdetails.LocalizedMessage{
				Locale:  localizer.GetLocale(),
				Message: localizer.MustLocalize(locale.NotFoundError),
			})
			if err != nil {
				return nil, statusInternal.Err()
			}
			return nil, dt.Err()
		}
		return nil, err
	}
	newTriggerUuid, err := uuid.NewUUID()
	if err != nil {
		s.logger.Error(
			"Failed to generate new trigger uuid",
			log.FieldsFromImcomingContext(ctx).AddFields(zap.Error(err))...,
		)
		return nil, err
	}
	newFlagTriggerId := newTriggerUuid.String()
	tx, err := s.mysqlClient.BeginTx(ctx)
	if err != nil {
		s.logger.Error(
			"Failed to begin transaction",
			log.FieldsFromImcomingContext(ctx).AddFields(zap.Error(err))...,
		)
		return nil, err
	}
	err = s.mysqlClient.RunInTransaction(ctx, tx, func() error {
		handler := command.NewFlagTriggerCommandHandler(
			editor,
			trigger,
			s.domainPublisher,
			request.EnvironmentNamespace,
		)
		if err := handler.Handle(ctx, request.ResetFlagTriggerCommand); err != nil {
			s.logger.Error(
				"Failed to reset flag trigger",
				log.FieldsFromImcomingContext(ctx).AddFields(zap.Error(err))...,
			)
			return err
		}
		err := v2fs.NewFlagTriggerStorage(tx).
			ResetFlagTrigger(ctx, trigger.Id, request.EnvironmentNamespace, newFlagTriggerId)
		if err != nil {
			s.logger.Error(
				"Failed to reset flag trigger",
				log.FieldsFromImcomingContext(ctx).AddFields(zap.Error(err))...,
			)
			return err
		}
		return nil
	})
	if err != nil {
		if errors.Is(err, v2fs.ErrFlagTriggerUnexpectedAffectedRows) {
			dt, err := statusNotFound.WithDetails(&errdetails.LocalizedMessage{
				Locale:  localizer.GetLocale(),
				Message: localizer.MustLocalize(locale.NotFoundError),
			})
			if err != nil {
				return nil, statusInternal.Err()
			}
			return nil, dt.Err()
		}
		return nil, err
	}
	flagTriggerSecret := domain.NewFlagTriggerSecret(
		trigger.Id,
		trigger.FeatureId,
		trigger.EnvironmentNamespace,
		newFlagTriggerId,
		int(trigger.Action),
	)
	triggerURL, err := s.generateTriggerURL(ctx, flagTriggerSecret, false)
	if err != nil {
		s.logger.Error(
			"Failed to begin transaction",
			log.FieldsFromImcomingContext(ctx).AddFields(zap.Error(err))...,
		)
		return nil, err
	}
	return &featureproto.ResetFlagTriggerResponse{
		FlagTrigger: trigger.FlagTrigger,
		Url:         triggerURL,
	}, nil
}

func (s *FeatureService) DeleteFlagTrigger(
	ctx context.Context,
	request *featureproto.DeleteFlagTriggerRequest,
) (*featureproto.DeleteFlagTriggerResponse, error) {
	localizer := locale.NewLocalizer(ctx)
	editor, err := s.checkRole(ctx, accountproto.Account_EDITOR, request.EnvironmentNamespace, localizer)
	if err != nil {
		return nil, err
	}
	if err := validateDeleteFlagTriggerCommand(request.DeleteFlagTriggerCommand, localizer); err != nil {
		s.logger.Info(
			"Invalid argument",
			log.FieldsFromImcomingContext(ctx).AddFields(
				zap.Error(err),
				zap.String("environmentNamespace", request.EnvironmentNamespace),
			)...,
		)
		return nil, err
	}
	tx, err := s.mysqlClient.BeginTx(ctx)
	if err != nil {
		s.logger.Error(
			"Failed to begin transaction",
			log.FieldsFromImcomingContext(ctx).AddFields(zap.Error(err))...,
		)
		return nil, err
	}
	err = s.mysqlClient.RunInTransaction(ctx, tx, func() error {
		storage := v2fs.NewFlagTriggerStorage(tx)
		flagTrigger, err := storage.GetFlagTrigger(
			ctx,
			request.DeleteFlagTriggerCommand.Id,
			request.EnvironmentNamespace,
		)
		if err != nil {
			s.logger.Error(
				"Failed to get flag trigger",
				log.FieldsFromImcomingContext(ctx).AddFields(
					zap.Error(err),
					zap.String("environmentNamespace", request.EnvironmentNamespace),
				)...,
			)
			return err
		}
		handler := command.NewFlagTriggerCommandHandler(
			editor,
			flagTrigger,
			s.domainPublisher,
			request.EnvironmentNamespace,
		)
		if err := handler.Handle(ctx, request.DeleteFlagTriggerCommand); err != nil {
			s.logger.Error(
				"Failed to delete flag trigger",
				log.FieldsFromImcomingContext(ctx).AddFields(zap.Error(err))...,
			)
			return err
		}
		if err := storage.DeleteFlagTrigger(
			ctx,
			request.DeleteFlagTriggerCommand.Id,
			request.EnvironmentNamespace,
		); err != nil {
			s.logger.Error(
				"Failed to delete flag trigger",
				log.FieldsFromImcomingContext(ctx).AddFields(zap.Error(err))...,
			)
			return err
		}
		return nil
	})
	if err != nil {
		if errors.Is(err, v2fs.ErrFlagTriggerUnexpectedAffectedRows) {
			dt, err := statusNotFound.WithDetails(&errdetails.LocalizedMessage{
				Locale:  localizer.GetLocale(),
				Message: localizer.MustLocalize(locale.NotFoundError),
			})
			if err != nil {
				return nil, statusInternal.Err()
			}
			return nil, dt.Err()
		}
		return nil, err
	}
	return &featureproto.DeleteFlagTriggerResponse{}, nil
}

func (s *FeatureService) GetFlagTrigger(
	ctx context.Context,
	request *featureproto.GetFlagTriggerRequest,
) (*featureproto.GetFlagTriggerResponse, error) {
	localizer := locale.NewLocalizer(ctx)
	_, err := s.checkRole(ctx, accountproto.Account_VIEWER, request.EnvironmentNamespace, localizer)
	if err != nil {
		return nil, err
	}
	if err := validateGetFlagTriggerRequest(request, localizer); err != nil {
		s.logger.Info(
			"Invalid argument",
			log.FieldsFromImcomingContext(ctx).AddFields(
				zap.Error(err),
				zap.String("environmentNamespace", request.EnvironmentNamespace),
			)...,
		)
		return nil, err
	}
	trigger, err := v2fs.NewFlagTriggerStorage(s.mysqlClient).GetFlagTrigger(
		ctx,
		request.Id,
		request.EnvironmentNamespace,
	)
	if err != nil {
		if errors.Is(err, v2fs.ErrFlagTriggerNotFound) {
			dt, err := statusNotFound.WithDetails(&errdetails.LocalizedMessage{
				Locale:  localizer.GetLocale(),
				Message: localizer.MustLocalize(locale.NotFoundError),
			})
			if err != nil {
				return nil, statusInternal.Err()
			}
			return nil, dt.Err()
		}
		return nil, err
	}
	flagTriggerSecret := domain.NewFlagTriggerSecret(
		trigger.Id,
		trigger.FeatureId,
		trigger.EnvironmentNamespace,
		trigger.Uuid,
		int(trigger.Action),
	)
	triggerURL, err := s.generateTriggerURL(ctx, flagTriggerSecret, true)
	if err != nil {
		s.logger.Error(
			"Failed to generate trigger url",
			log.FieldsFromImcomingContext(ctx).AddFields(zap.Error(err))...,
		)
		return nil, err
	}
	return &featureproto.GetFlagTriggerResponse{
		FlagTrigger: trigger.FlagTrigger,
		Url:         triggerURL,
	}, nil
}

func (s *FeatureService) ListFlagTriggers(
	ctx context.Context,
	request *featureproto.ListFlagTriggersRequest,
) (*featureproto.ListFlagTriggersResponse, error) {
	localizer := locale.NewLocalizer(ctx)
	_, err := s.checkRole(ctx, accountproto.Account_VIEWER, request.EnvironmentNamespace, localizer)
	if err != nil {
		return nil, err
	}
	if err := validateListFlagTriggersRequest(request, localizer); err != nil {
		s.logger.Info(
			"Invalid argument",
			log.FieldsFromImcomingContext(ctx).AddFields(zap.Error(err))...,
		)
		return nil, err
	}
	whereParts := []mysql.WherePart{
		mysql.NewFilter("feature_id", "=", request.FeatureId),
		mysql.NewFilter("environment_namespace", "=", request.EnvironmentNamespace),
		mysql.NewFilter("deleted", "=", false),
	}
	orders, err := s.newListFlagTriggerOrders(request.OrderBy, request.OrderDirection, localizer)
	if err != nil {
		s.logger.Error(
			"Failed to create order",
			log.FieldsFromImcomingContext(ctx).AddFields(zap.Error(err))...,
		)
		return nil, err
	}
	limit := int(request.PageSize)
	cursor := request.Cursor
	if cursor == "" {
		cursor = "0"
	}
	offset, err := strconv.Atoi(cursor)
	if err != nil {
		dt, err := statusInvalidCursor.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.InvalidArgumentError, "cursor"),
		})
		if err != nil {
			return nil, statusInternal.Err()
		}
		return nil, dt.Err()
	}
	flagTriggers, nextOffset, totalCount, _ := v2fs.NewFlagTriggerStorage(s.mysqlClient).ListFlagTriggers(
		ctx,
		whereParts,
		orders,
		limit,
		offset,
	)
	triggerWithUrls := make([]*featureproto.ListFlagTriggersResponse_FlagTriggerWithUrl, 0, len(flagTriggers))
	for _, trigger := range flagTriggers {
		flagTriggerSecret := domain.NewFlagTriggerSecret(
			trigger.Id,
			trigger.FeatureId,
			trigger.EnvironmentNamespace,
			trigger.Uuid,
			int(trigger.Action),
		)
		triggerURL, err := s.generateTriggerURL(ctx, flagTriggerSecret, true)
		if err != nil {
			s.logger.Error(
				"Failed to generate trigger url",
				log.FieldsFromImcomingContext(ctx).AddFields(zap.Error(err))...,
			)
			return nil, err
		}
		triggerWithUrls = append(triggerWithUrls, &featureproto.ListFlagTriggersResponse_FlagTriggerWithUrl{
			FlagTrigger: trigger,
			Url:         triggerURL,
		})
	}
	return &featureproto.ListFlagTriggersResponse{
		FlagTriggers: triggerWithUrls,
		Cursor:       strconv.Itoa(nextOffset),
		TotalCount:   totalCount,
	}, nil
}

func (s *FeatureService) newListFlagTriggerOrders(
	orderBy featureproto.ListFlagTriggersRequest_OrderBy,
	orderDirection featureproto.ListFlagTriggersRequest_OrderDirection,
	localizer locale.Localizer,
) ([]*mysql.Order, error) {
	var column string
	switch orderBy {
	case featureproto.ListFlagTriggersRequest_DEFAULT, featureproto.ListFlagTriggersRequest_CREATED_AT:
		column = "created_at"
	case featureproto.ListFlagTriggersRequest_UPDATED_AT:
		column = "updated_at"
	default:
		dt, err := statusInvalidOrderBy.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.InvalidArgumentError, "order_by"),
		})
		if err != nil {
			return nil, statusInternal.Err()
		}
		return nil, dt.Err()
	}
	direction := mysql.OrderDirectionAsc
	if orderDirection == featureproto.ListFlagTriggersRequest_DESC {
		direction = mysql.OrderDirectionDesc
	}
	return []*mysql.Order{
		mysql.NewOrder(column, direction),
	}, nil
}

func (s *FeatureService) FlagTriggerWebhook(
	ctx context.Context,
	request *featureproto.FlagTriggerWebhookRequest,
) (*featureproto.FlagTriggerWebhookResponse, error) {
	localizer := locale.NewLocalizer(ctx)
	secret := request.GetSecret()
	resp := &featureproto.FlagTriggerWebhookResponse{}
	if secret == "" {
		s.logger.Error(
			"Failed to get secret from query",
			log.FieldsFromImcomingContext(ctx)...,
		)
		return resp, nil
	}
	triggerSecret, err := s.authSecret(ctx, secret)
	if err != nil {
		s.logger.Error(
			"Failed to auth trigger secret",
			log.FieldsFromImcomingContext(ctx).AddFields(zap.Error(err))...,
		)
		return resp, nil
	}
	storage := v2fs.NewFlagTriggerStorage(s.mysqlClient)
	trigger, err := storage.GetFlagTrigger(ctx, triggerSecret.GetID(), triggerSecret.GetEnvironmentNamespace())
	if err != nil {
		s.logger.Error(
			"Failed to get flag trigger",
			log.FieldsFromImcomingContext(ctx).AddFields(zap.Error(err))...,
		)
		return resp, nil
	}
	if trigger.GetDisabled() || trigger.GetDeleted() {
		s.logger.Error(
			"Flag trigger is disabled or deleted",
			log.FieldsFromImcomingContext(ctx).AddFields(zap.Error(err))...,
		)
		return resp, nil
	}
	// check trigger secret
	if trigger.GetFeatureId() != triggerSecret.GetFeatureID() ||
		int(trigger.GetAction()) != triggerSecret.GetAction() ||
		trigger.GetUuid() != triggerSecret.GetUUID() {
		s.logger.Error(
			"Failed to auth trigger secret",
			log.FieldsFromImcomingContext(ctx).AddFields(zap.Error(err))...,
		)
		return resp, nil
	}
	if trigger.GetAction() == featureproto.FlagTrigger_Action_ON {
		err := s.enableFeature(ctx, trigger.GetFeatureId(), trigger.GetEnvironmentNamespace(), localizer)
		if err != nil {
			return resp, nil
		}
	} else if trigger.GetAction() == featureproto.FlagTrigger_Action_OFF {
		err := s.disableFeature(ctx, trigger.GetFeatureId(), trigger.GetEnvironmentNamespace(), localizer)
		if err != nil {
			return resp, nil
		}
	} else {
		s.logger.Error(
			"Invalid action",
			log.FieldsFromImcomingContext(ctx).AddFields(zap.Error(err))...,
		)
		return resp, nil
	}
	err = s.updateTriggerUsageInfo(ctx, trigger)
	if err != nil {
		return resp, nil
	}
	return resp, nil
}

func (s *FeatureService) authSecret(
	ctx context.Context,
	secret string,
) (*domain.FlagTriggerSecret, error) {
	decoded, err := base64.RawURLEncoding.DecodeString(secret)
	if err != nil {
		s.logger.Error(
			"Failed to decode encrypted secret",
			log.FieldsFromImcomingContext(ctx).AddFields(zap.Error(err))...,
		)
		return nil, err
	}
	decrypted, err := s.triggerCryptoUtil.Decrypt(ctx, decoded)
	if err != nil {
		s.logger.Error(
			"Failed to decrypt encrypted secret",
			log.FieldsFromImcomingContext(ctx).AddFields(zap.Error(err))...,
		)
		return nil, err
	}
	triggerSecret, err := domain.UnmarshalFlagTriggerSecret(decrypted)
	if err != nil {
		s.logger.Error(
			"Failed to unmarshal trigger url secret",
			log.FieldsFromImcomingContext(ctx).AddFields(zap.Error(err))...,
		)
		return nil, err
	}
	return triggerSecret, nil
}

func (s *FeatureService) updateTriggerUsageInfo(ctx context.Context, flagTrigger *domain.FlagTrigger) error {
	tx, err := s.mysqlClient.BeginTx(ctx)
	if err != nil {
		s.logger.Error(
			"Failed to begin transaction",
			log.FieldsFromImcomingContext(ctx).
				AddFields(zap.Error(err))...,
		)
		return nil
	}
	err = s.mysqlClient.RunInTransaction(ctx, tx, func() error {
		storage := v2fs.NewFlagTriggerStorage(tx)
		err := storage.UpdateFlagTriggerUsage(
			ctx,
			flagTrigger.GetId(),
			flagTrigger.GetEnvironmentNamespace(),
			int64(flagTrigger.GetTriggerTimes()+1),
		)
		if err != nil {
			s.logger.Error(
				"Failed to update flag trigger usage",
				log.FieldsFromImcomingContext(ctx).
					AddFields(zap.Error(err))...,
			)
			return err
		}
		return nil
	})
	if err != nil {
		s.logger.Error(
			"Failed to update flag trigger usage",
			log.FieldsFromImcomingContext(ctx).
				AddFields(zap.Error(err))...,
		)
		return err
	}
	return nil
}

func (s *FeatureService) enableFeature(
	ctx context.Context,
	featureId, environmentNamespace string,
	localizer locale.Localizer,
) error {
	if err := s.updateFeature(
		ctx,
		&featureproto.EnableFeatureCommand{},
		featureId,
		environmentNamespace,
		"",
		localizer,
	); err != nil {
		if status.Code(err) == codes.Internal {
			s.logger.Error(
				"Failed to enable feature",
				log.FieldsFromImcomingContext(ctx).AddFields(
					zap.Error(err),
					zap.String("environmentNamespace", environmentNamespace),
				)...,
			)
		}
		return err
	}
	return nil
}

func (s *FeatureService) disableFeature(
	ctx context.Context,
	featureId, environmentNamespace string,
	localizer locale.Localizer,
) error {
	if err := s.updateFeature(
		ctx,
		&featureproto.DisableFeatureCommand{},
		featureId,
		environmentNamespace,
		"",
		localizer,
	); err != nil {
		if status.Code(err) == codes.Internal {
			s.logger.Error(
				"Failed to disable feature",
				log.FieldsFromImcomingContext(ctx).AddFields(
					zap.Error(err),
					zap.String("environmentNamespace", environmentNamespace),
				)...,
			)
		}
		return err
	}
	return nil
}

func (s *FeatureService) generateTriggerURL(
	ctx context.Context,
	flagTriggerSecret *domain.FlagTriggerSecret,
	masked bool,
) (string, error) {
	encoded, err := flagTriggerSecret.Marshal()
	if err != nil {
		return "", err
	}
	triggerURL, _ := url.Parse(s.triggerURL)
	if masked {
		triggerURL.RawQuery = fmt.Sprintf("secret=%s", maskURI)
		return triggerURL.String(), nil
	} else {
		query := triggerURL.Query()
		encrypted, err := s.triggerCryptoUtil.Encrypt(ctx, encoded)
		if err != nil {
			return "", err
		}
		secret := base64.RawURLEncoding.EncodeToString(encrypted)
		query.Set("secret", secret)
		triggerURL.RawQuery = query.Encode()
		return triggerURL.String(), nil
	}
}
