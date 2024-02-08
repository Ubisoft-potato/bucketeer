// Copyright 2024 The Bucketeer Authors.
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

// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.26.0
// 	protoc        v4.23.4
// source: proto/batch/service.proto

package batch

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type BatchJob int32

const (
	BatchJob_ExperimentStatusUpdater   BatchJob = 0
	BatchJob_ExperimentRunningWatcher  BatchJob = 1
	BatchJob_FeatureStaleWatcher       BatchJob = 2
	BatchJob_MauCountWatcher           BatchJob = 3
	BatchJob_DatetimeWatcher           BatchJob = 4
	BatchJob_EventCountWatcher         BatchJob = 5
	BatchJob_DomainEventInformer       BatchJob = 6
	BatchJob_RedisCounterDeleter       BatchJob = 7
	BatchJob_ProgressiveRolloutWatcher BatchJob = 8
	BatchJob_ExperimentCalculator      BatchJob = 9
	BatchJob_MauSummarizer             BatchJob = 10
	BatchJob_MauPartitionDeleter       BatchJob = 11
	BatchJob_MauPartitionCreator       BatchJob = 12
)

// Enum value maps for BatchJob.
var (
	BatchJob_name = map[int32]string{
		0:  "ExperimentStatusUpdater",
		1:  "ExperimentRunningWatcher",
		2:  "FeatureStaleWatcher",
		3:  "MauCountWatcher",
		4:  "DatetimeWatcher",
		5:  "EventCountWatcher",
		6:  "DomainEventInformer",
		7:  "RedisCounterDeleter",
		8:  "ProgressiveRolloutWatcher",
		9:  "ExperimentCalculator",
		10: "MauSummarizer",
		11: "MauPartitionDeleter",
		12: "MauPartitionCreator",
	}
	BatchJob_value = map[string]int32{
		"ExperimentStatusUpdater":   0,
		"ExperimentRunningWatcher":  1,
		"FeatureStaleWatcher":       2,
		"MauCountWatcher":           3,
		"DatetimeWatcher":           4,
		"EventCountWatcher":         5,
		"DomainEventInformer":       6,
		"RedisCounterDeleter":       7,
		"ProgressiveRolloutWatcher": 8,
		"ExperimentCalculator":      9,
		"MauSummarizer":             10,
		"MauPartitionDeleter":       11,
		"MauPartitionCreator":       12,
	}
)

func (x BatchJob) Enum() *BatchJob {
	p := new(BatchJob)
	*p = x
	return p
}

func (x BatchJob) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (BatchJob) Descriptor() protoreflect.EnumDescriptor {
	return file_proto_batch_service_proto_enumTypes[0].Descriptor()
}

func (BatchJob) Type() protoreflect.EnumType {
	return &file_proto_batch_service_proto_enumTypes[0]
}

func (x BatchJob) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use BatchJob.Descriptor instead.
func (BatchJob) EnumDescriptor() ([]byte, []int) {
	return file_proto_batch_service_proto_rawDescGZIP(), []int{0}
}

type MigrationRequest_Direction int32

const (
	MigrationRequest_UP   MigrationRequest_Direction = 0
	MigrationRequest_DOWN MigrationRequest_Direction = 1
)

// Enum value maps for MigrationRequest_Direction.
var (
	MigrationRequest_Direction_name = map[int32]string{
		0: "UP",
		1: "DOWN",
	}
	MigrationRequest_Direction_value = map[string]int32{
		"UP":   0,
		"DOWN": 1,
	}
)

func (x MigrationRequest_Direction) Enum() *MigrationRequest_Direction {
	p := new(MigrationRequest_Direction)
	*p = x
	return p
}

func (x MigrationRequest_Direction) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (MigrationRequest_Direction) Descriptor() protoreflect.EnumDescriptor {
	return file_proto_batch_service_proto_enumTypes[1].Descriptor()
}

func (MigrationRequest_Direction) Type() protoreflect.EnumType {
	return &file_proto_batch_service_proto_enumTypes[1]
}

func (x MigrationRequest_Direction) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use MigrationRequest_Direction.Descriptor instead.
func (MigrationRequest_Direction) EnumDescriptor() ([]byte, []int) {
	return file_proto_batch_service_proto_rawDescGZIP(), []int{4, 0}
}

type BatchJobRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Job BatchJob `protobuf:"varint,1,opt,name=job,proto3,enum=bucketeer.batch.BatchJob" json:"job"`
}

func (x *BatchJobRequest) Reset() {
	*x = BatchJobRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_batch_service_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *BatchJobRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*BatchJobRequest) ProtoMessage() {}

func (x *BatchJobRequest) ProtoReflect() protoreflect.Message {
	mi := &file_proto_batch_service_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use BatchJobRequest.ProtoReflect.Descriptor instead.
func (*BatchJobRequest) Descriptor() ([]byte, []int) {
	return file_proto_batch_service_proto_rawDescGZIP(), []int{0}
}

func (x *BatchJobRequest) GetJob() BatchJob {
	if x != nil {
		return x.Job
	}
	return BatchJob_ExperimentStatusUpdater
}

type BatchJobResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *BatchJobResponse) Reset() {
	*x = BatchJobResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_batch_service_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *BatchJobResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*BatchJobResponse) ProtoMessage() {}

func (x *BatchJobResponse) ProtoReflect() protoreflect.Message {
	mi := &file_proto_batch_service_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use BatchJobResponse.ProtoReflect.Descriptor instead.
func (*BatchJobResponse) Descriptor() ([]byte, []int) {
	return file_proto_batch_service_proto_rawDescGZIP(), []int{1}
}

type MigrationVersionRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *MigrationVersionRequest) Reset() {
	*x = MigrationVersionRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_batch_service_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *MigrationVersionRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*MigrationVersionRequest) ProtoMessage() {}

func (x *MigrationVersionRequest) ProtoReflect() protoreflect.Message {
	mi := &file_proto_batch_service_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use MigrationVersionRequest.ProtoReflect.Descriptor instead.
func (*MigrationVersionRequest) Descriptor() ([]byte, []int) {
	return file_proto_batch_service_proto_rawDescGZIP(), []int{2}
}

type MigrationVersionResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Version int32 `protobuf:"varint,1,opt,name=version,proto3" json:"version"`
	Dirty   bool  `protobuf:"varint,2,opt,name=dirty,proto3" json:"dirty"`
}

func (x *MigrationVersionResponse) Reset() {
	*x = MigrationVersionResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_batch_service_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *MigrationVersionResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*MigrationVersionResponse) ProtoMessage() {}

func (x *MigrationVersionResponse) ProtoReflect() protoreflect.Message {
	mi := &file_proto_batch_service_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use MigrationVersionResponse.ProtoReflect.Descriptor instead.
func (*MigrationVersionResponse) Descriptor() ([]byte, []int) {
	return file_proto_batch_service_proto_rawDescGZIP(), []int{3}
}

func (x *MigrationVersionResponse) GetVersion() int32 {
	if x != nil {
		return x.Version
	}
	return 0
}

func (x *MigrationVersionResponse) GetDirty() bool {
	if x != nil {
		return x.Dirty
	}
	return false
}

type MigrationRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Direction MigrationRequest_Direction `protobuf:"varint,1,opt,name=direction,proto3,enum=bucketeer.batch.MigrationRequest_Direction" json:"direction"`
	Steps     int32                      `protobuf:"varint,2,opt,name=steps,proto3" json:"steps"`
}

func (x *MigrationRequest) Reset() {
	*x = MigrationRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_batch_service_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *MigrationRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*MigrationRequest) ProtoMessage() {}

func (x *MigrationRequest) ProtoReflect() protoreflect.Message {
	mi := &file_proto_batch_service_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use MigrationRequest.ProtoReflect.Descriptor instead.
func (*MigrationRequest) Descriptor() ([]byte, []int) {
	return file_proto_batch_service_proto_rawDescGZIP(), []int{4}
}

func (x *MigrationRequest) GetDirection() MigrationRequest_Direction {
	if x != nil {
		return x.Direction
	}
	return MigrationRequest_UP
}

func (x *MigrationRequest) GetSteps() int32 {
	if x != nil {
		return x.Steps
	}
	return 0
}

type MigrationResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *MigrationResponse) Reset() {
	*x = MigrationResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_batch_service_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *MigrationResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*MigrationResponse) ProtoMessage() {}

func (x *MigrationResponse) ProtoReflect() protoreflect.Message {
	mi := &file_proto_batch_service_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use MigrationResponse.ProtoReflect.Descriptor instead.
func (*MigrationResponse) Descriptor() ([]byte, []int) {
	return file_proto_batch_service_proto_rawDescGZIP(), []int{5}
}

var File_proto_batch_service_proto protoreflect.FileDescriptor

var file_proto_batch_service_proto_rawDesc = []byte{
	0x0a, 0x19, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x62, 0x61, 0x74, 0x63, 0x68, 0x2f, 0x73, 0x65,
	0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0f, 0x62, 0x75, 0x63,
	0x6b, 0x65, 0x74, 0x65, 0x65, 0x72, 0x2e, 0x62, 0x61, 0x74, 0x63, 0x68, 0x22, 0x3e, 0x0a, 0x0f,
	0x42, 0x61, 0x74, 0x63, 0x68, 0x4a, 0x6f, 0x62, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12,
	0x2b, 0x0a, 0x03, 0x6a, 0x6f, 0x62, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x19, 0x2e, 0x62,
	0x75, 0x63, 0x6b, 0x65, 0x74, 0x65, 0x65, 0x72, 0x2e, 0x62, 0x61, 0x74, 0x63, 0x68, 0x2e, 0x42,
	0x61, 0x74, 0x63, 0x68, 0x4a, 0x6f, 0x62, 0x52, 0x03, 0x6a, 0x6f, 0x62, 0x22, 0x12, 0x0a, 0x10,
	0x42, 0x61, 0x74, 0x63, 0x68, 0x4a, 0x6f, 0x62, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65,
	0x22, 0x19, 0x0a, 0x17, 0x4d, 0x69, 0x67, 0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x56, 0x65, 0x72,
	0x73, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x22, 0x4a, 0x0a, 0x18, 0x4d,
	0x69, 0x67, 0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x56, 0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e, 0x52,
	0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x18, 0x0a, 0x07, 0x76, 0x65, 0x72, 0x73, 0x69,
	0x6f, 0x6e, 0x18, 0x01, 0x20, 0x01, 0x28, 0x05, 0x52, 0x07, 0x76, 0x65, 0x72, 0x73, 0x69, 0x6f,
	0x6e, 0x12, 0x14, 0x0a, 0x05, 0x64, 0x69, 0x72, 0x74, 0x79, 0x18, 0x02, 0x20, 0x01, 0x28, 0x08,
	0x52, 0x05, 0x64, 0x69, 0x72, 0x74, 0x79, 0x22, 0x92, 0x01, 0x0a, 0x10, 0x4d, 0x69, 0x67, 0x72,
	0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x49, 0x0a, 0x09,
	0x64, 0x69, 0x72, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0e, 0x32,
	0x2b, 0x2e, 0x62, 0x75, 0x63, 0x6b, 0x65, 0x74, 0x65, 0x65, 0x72, 0x2e, 0x62, 0x61, 0x74, 0x63,
	0x68, 0x2e, 0x4d, 0x69, 0x67, 0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65,
	0x73, 0x74, 0x2e, 0x44, 0x69, 0x72, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x09, 0x64, 0x69,
	0x72, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x14, 0x0a, 0x05, 0x73, 0x74, 0x65, 0x70, 0x73,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x05, 0x52, 0x05, 0x73, 0x74, 0x65, 0x70, 0x73, 0x22, 0x1d, 0x0a,
	0x09, 0x44, 0x69, 0x72, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x06, 0x0a, 0x02, 0x55, 0x50,
	0x10, 0x00, 0x12, 0x08, 0x0a, 0x04, 0x44, 0x4f, 0x57, 0x4e, 0x10, 0x01, 0x22, 0x13, 0x0a, 0x11,
	0x4d, 0x69, 0x67, 0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73,
	0x65, 0x2a, 0xcf, 0x02, 0x0a, 0x08, 0x42, 0x61, 0x74, 0x63, 0x68, 0x4a, 0x6f, 0x62, 0x12, 0x1b,
	0x0a, 0x17, 0x45, 0x78, 0x70, 0x65, 0x72, 0x69, 0x6d, 0x65, 0x6e, 0x74, 0x53, 0x74, 0x61, 0x74,
	0x75, 0x73, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x72, 0x10, 0x00, 0x12, 0x1c, 0x0a, 0x18, 0x45,
	0x78, 0x70, 0x65, 0x72, 0x69, 0x6d, 0x65, 0x6e, 0x74, 0x52, 0x75, 0x6e, 0x6e, 0x69, 0x6e, 0x67,
	0x57, 0x61, 0x74, 0x63, 0x68, 0x65, 0x72, 0x10, 0x01, 0x12, 0x17, 0x0a, 0x13, 0x46, 0x65, 0x61,
	0x74, 0x75, 0x72, 0x65, 0x53, 0x74, 0x61, 0x6c, 0x65, 0x57, 0x61, 0x74, 0x63, 0x68, 0x65, 0x72,
	0x10, 0x02, 0x12, 0x13, 0x0a, 0x0f, 0x4d, 0x61, 0x75, 0x43, 0x6f, 0x75, 0x6e, 0x74, 0x57, 0x61,
	0x74, 0x63, 0x68, 0x65, 0x72, 0x10, 0x03, 0x12, 0x13, 0x0a, 0x0f, 0x44, 0x61, 0x74, 0x65, 0x74,
	0x69, 0x6d, 0x65, 0x57, 0x61, 0x74, 0x63, 0x68, 0x65, 0x72, 0x10, 0x04, 0x12, 0x15, 0x0a, 0x11,
	0x45, 0x76, 0x65, 0x6e, 0x74, 0x43, 0x6f, 0x75, 0x6e, 0x74, 0x57, 0x61, 0x74, 0x63, 0x68, 0x65,
	0x72, 0x10, 0x05, 0x12, 0x17, 0x0a, 0x13, 0x44, 0x6f, 0x6d, 0x61, 0x69, 0x6e, 0x45, 0x76, 0x65,
	0x6e, 0x74, 0x49, 0x6e, 0x66, 0x6f, 0x72, 0x6d, 0x65, 0x72, 0x10, 0x06, 0x12, 0x17, 0x0a, 0x13,
	0x52, 0x65, 0x64, 0x69, 0x73, 0x43, 0x6f, 0x75, 0x6e, 0x74, 0x65, 0x72, 0x44, 0x65, 0x6c, 0x65,
	0x74, 0x65, 0x72, 0x10, 0x07, 0x12, 0x1d, 0x0a, 0x19, 0x50, 0x72, 0x6f, 0x67, 0x72, 0x65, 0x73,
	0x73, 0x69, 0x76, 0x65, 0x52, 0x6f, 0x6c, 0x6c, 0x6f, 0x75, 0x74, 0x57, 0x61, 0x74, 0x63, 0x68,
	0x65, 0x72, 0x10, 0x08, 0x12, 0x18, 0x0a, 0x14, 0x45, 0x78, 0x70, 0x65, 0x72, 0x69, 0x6d, 0x65,
	0x6e, 0x74, 0x43, 0x61, 0x6c, 0x63, 0x75, 0x6c, 0x61, 0x74, 0x6f, 0x72, 0x10, 0x09, 0x12, 0x11,
	0x0a, 0x0d, 0x4d, 0x61, 0x75, 0x53, 0x75, 0x6d, 0x6d, 0x61, 0x72, 0x69, 0x7a, 0x65, 0x72, 0x10,
	0x0a, 0x12, 0x17, 0x0a, 0x13, 0x4d, 0x61, 0x75, 0x50, 0x61, 0x72, 0x74, 0x69, 0x74, 0x69, 0x6f,
	0x6e, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x72, 0x10, 0x0b, 0x12, 0x17, 0x0a, 0x13, 0x4d, 0x61,
	0x75, 0x50, 0x61, 0x72, 0x74, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x43, 0x72, 0x65, 0x61, 0x74, 0x6f,
	0x72, 0x10, 0x0c, 0x32, 0xae, 0x02, 0x0a, 0x0c, 0x42, 0x61, 0x74, 0x63, 0x68, 0x53, 0x65, 0x72,
	0x76, 0x69, 0x63, 0x65, 0x12, 0x58, 0x0a, 0x0f, 0x45, 0x78, 0x65, 0x63, 0x75, 0x74, 0x65, 0x42,
	0x61, 0x74, 0x63, 0x68, 0x4a, 0x6f, 0x62, 0x12, 0x20, 0x2e, 0x62, 0x75, 0x63, 0x6b, 0x65, 0x74,
	0x65, 0x65, 0x72, 0x2e, 0x62, 0x61, 0x74, 0x63, 0x68, 0x2e, 0x42, 0x61, 0x74, 0x63, 0x68, 0x4a,
	0x6f, 0x62, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x21, 0x2e, 0x62, 0x75, 0x63, 0x6b,
	0x65, 0x74, 0x65, 0x65, 0x72, 0x2e, 0x62, 0x61, 0x74, 0x63, 0x68, 0x2e, 0x42, 0x61, 0x74, 0x63,
	0x68, 0x4a, 0x6f, 0x62, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12, 0x70,
	0x0a, 0x17, 0x43, 0x75, 0x72, 0x72, 0x65, 0x6e, 0x74, 0x4d, 0x69, 0x67, 0x72, 0x61, 0x74, 0x69,
	0x6f, 0x6e, 0x56, 0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e, 0x12, 0x28, 0x2e, 0x62, 0x75, 0x63, 0x6b,
	0x65, 0x74, 0x65, 0x65, 0x72, 0x2e, 0x62, 0x61, 0x74, 0x63, 0x68, 0x2e, 0x4d, 0x69, 0x67, 0x72,
	0x61, 0x74, 0x69, 0x6f, 0x6e, 0x56, 0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x71, 0x75,
	0x65, 0x73, 0x74, 0x1a, 0x29, 0x2e, 0x62, 0x75, 0x63, 0x6b, 0x65, 0x74, 0x65, 0x65, 0x72, 0x2e,
	0x62, 0x61, 0x74, 0x63, 0x68, 0x2e, 0x4d, 0x69, 0x67, 0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x56,
	0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00,
	0x12, 0x52, 0x0a, 0x07, 0x4d, 0x69, 0x67, 0x72, 0x61, 0x74, 0x65, 0x12, 0x21, 0x2e, 0x62, 0x75,
	0x63, 0x6b, 0x65, 0x74, 0x65, 0x65, 0x72, 0x2e, 0x62, 0x61, 0x74, 0x63, 0x68, 0x2e, 0x4d, 0x69,
	0x67, 0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x22,
	0x2e, 0x62, 0x75, 0x63, 0x6b, 0x65, 0x74, 0x65, 0x65, 0x72, 0x2e, 0x62, 0x61, 0x74, 0x63, 0x68,
	0x2e, 0x4d, 0x69, 0x67, 0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e,
	0x73, 0x65, 0x22, 0x00, 0x42, 0x2f, 0x5a, 0x2d, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63,
	0x6f, 0x6d, 0x2f, 0x62, 0x75, 0x63, 0x6b, 0x65, 0x74, 0x65, 0x65, 0x72, 0x2d, 0x69, 0x6f, 0x2f,
	0x62, 0x75, 0x63, 0x6b, 0x65, 0x74, 0x65, 0x65, 0x72, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f,
	0x62, 0x61, 0x74, 0x63, 0x68, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_proto_batch_service_proto_rawDescOnce sync.Once
	file_proto_batch_service_proto_rawDescData = file_proto_batch_service_proto_rawDesc
)

func file_proto_batch_service_proto_rawDescGZIP() []byte {
	file_proto_batch_service_proto_rawDescOnce.Do(func() {
		file_proto_batch_service_proto_rawDescData = protoimpl.X.CompressGZIP(file_proto_batch_service_proto_rawDescData)
	})
	return file_proto_batch_service_proto_rawDescData
}

var file_proto_batch_service_proto_enumTypes = make([]protoimpl.EnumInfo, 2)
var file_proto_batch_service_proto_msgTypes = make([]protoimpl.MessageInfo, 6)
var file_proto_batch_service_proto_goTypes = []interface{}{
	(BatchJob)(0),                    // 0: bucketeer.batch.BatchJob
	(MigrationRequest_Direction)(0),  // 1: bucketeer.batch.MigrationRequest.Direction
	(*BatchJobRequest)(nil),          // 2: bucketeer.batch.BatchJobRequest
	(*BatchJobResponse)(nil),         // 3: bucketeer.batch.BatchJobResponse
	(*MigrationVersionRequest)(nil),  // 4: bucketeer.batch.MigrationVersionRequest
	(*MigrationVersionResponse)(nil), // 5: bucketeer.batch.MigrationVersionResponse
	(*MigrationRequest)(nil),         // 6: bucketeer.batch.MigrationRequest
	(*MigrationResponse)(nil),        // 7: bucketeer.batch.MigrationResponse
}
var file_proto_batch_service_proto_depIdxs = []int32{
	0, // 0: bucketeer.batch.BatchJobRequest.job:type_name -> bucketeer.batch.BatchJob
	1, // 1: bucketeer.batch.MigrationRequest.direction:type_name -> bucketeer.batch.MigrationRequest.Direction
	2, // 2: bucketeer.batch.BatchService.ExecuteBatchJob:input_type -> bucketeer.batch.BatchJobRequest
	4, // 3: bucketeer.batch.BatchService.CurrentMigrationVersion:input_type -> bucketeer.batch.MigrationVersionRequest
	6, // 4: bucketeer.batch.BatchService.Migrate:input_type -> bucketeer.batch.MigrationRequest
	3, // 5: bucketeer.batch.BatchService.ExecuteBatchJob:output_type -> bucketeer.batch.BatchJobResponse
	5, // 6: bucketeer.batch.BatchService.CurrentMigrationVersion:output_type -> bucketeer.batch.MigrationVersionResponse
	7, // 7: bucketeer.batch.BatchService.Migrate:output_type -> bucketeer.batch.MigrationResponse
	5, // [5:8] is the sub-list for method output_type
	2, // [2:5] is the sub-list for method input_type
	2, // [2:2] is the sub-list for extension type_name
	2, // [2:2] is the sub-list for extension extendee
	0, // [0:2] is the sub-list for field type_name
}

func init() { file_proto_batch_service_proto_init() }
func file_proto_batch_service_proto_init() {
	if File_proto_batch_service_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_proto_batch_service_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*BatchJobRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_proto_batch_service_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*BatchJobResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_proto_batch_service_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*MigrationVersionRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_proto_batch_service_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*MigrationVersionResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_proto_batch_service_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*MigrationRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_proto_batch_service_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*MigrationResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_proto_batch_service_proto_rawDesc,
			NumEnums:      2,
			NumMessages:   6,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_proto_batch_service_proto_goTypes,
		DependencyIndexes: file_proto_batch_service_proto_depIdxs,
		EnumInfos:         file_proto_batch_service_proto_enumTypes,
		MessageInfos:      file_proto_batch_service_proto_msgTypes,
	}.Build()
	File_proto_batch_service_proto = out.File
	file_proto_batch_service_proto_rawDesc = nil
	file_proto_batch_service_proto_goTypes = nil
	file_proto_batch_service_proto_depIdxs = nil
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConnInterface

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion6

// BatchServiceClient is the client API for BatchService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type BatchServiceClient interface {
	ExecuteBatchJob(ctx context.Context, in *BatchJobRequest, opts ...grpc.CallOption) (*BatchJobResponse, error)
	CurrentMigrationVersion(ctx context.Context, in *MigrationVersionRequest, opts ...grpc.CallOption) (*MigrationVersionResponse, error)
	Migrate(ctx context.Context, in *MigrationRequest, opts ...grpc.CallOption) (*MigrationResponse, error)
}

type batchServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewBatchServiceClient(cc grpc.ClientConnInterface) BatchServiceClient {
	return &batchServiceClient{cc}
}

func (c *batchServiceClient) ExecuteBatchJob(ctx context.Context, in *BatchJobRequest, opts ...grpc.CallOption) (*BatchJobResponse, error) {
	out := new(BatchJobResponse)
	err := c.cc.Invoke(ctx, "/bucketeer.batch.BatchService/ExecuteBatchJob", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *batchServiceClient) CurrentMigrationVersion(ctx context.Context, in *MigrationVersionRequest, opts ...grpc.CallOption) (*MigrationVersionResponse, error) {
	out := new(MigrationVersionResponse)
	err := c.cc.Invoke(ctx, "/bucketeer.batch.BatchService/CurrentMigrationVersion", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *batchServiceClient) Migrate(ctx context.Context, in *MigrationRequest, opts ...grpc.CallOption) (*MigrationResponse, error) {
	out := new(MigrationResponse)
	err := c.cc.Invoke(ctx, "/bucketeer.batch.BatchService/Migrate", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// BatchServiceServer is the server API for BatchService service.
type BatchServiceServer interface {
	ExecuteBatchJob(context.Context, *BatchJobRequest) (*BatchJobResponse, error)
	CurrentMigrationVersion(context.Context, *MigrationVersionRequest) (*MigrationVersionResponse, error)
	Migrate(context.Context, *MigrationRequest) (*MigrationResponse, error)
}

// UnimplementedBatchServiceServer can be embedded to have forward compatible implementations.
type UnimplementedBatchServiceServer struct {
}

func (*UnimplementedBatchServiceServer) ExecuteBatchJob(context.Context, *BatchJobRequest) (*BatchJobResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ExecuteBatchJob not implemented")
}
func (*UnimplementedBatchServiceServer) CurrentMigrationVersion(context.Context, *MigrationVersionRequest) (*MigrationVersionResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CurrentMigrationVersion not implemented")
}
func (*UnimplementedBatchServiceServer) Migrate(context.Context, *MigrationRequest) (*MigrationResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Migrate not implemented")
}

func RegisterBatchServiceServer(s *grpc.Server, srv BatchServiceServer) {
	s.RegisterService(&_BatchService_serviceDesc, srv)
}

func _BatchService_ExecuteBatchJob_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(BatchJobRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BatchServiceServer).ExecuteBatchJob(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/bucketeer.batch.BatchService/ExecuteBatchJob",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BatchServiceServer).ExecuteBatchJob(ctx, req.(*BatchJobRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _BatchService_CurrentMigrationVersion_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(MigrationVersionRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BatchServiceServer).CurrentMigrationVersion(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/bucketeer.batch.BatchService/CurrentMigrationVersion",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BatchServiceServer).CurrentMigrationVersion(ctx, req.(*MigrationVersionRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _BatchService_Migrate_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(MigrationRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BatchServiceServer).Migrate(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/bucketeer.batch.BatchService/Migrate",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BatchServiceServer).Migrate(ctx, req.(*MigrationRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _BatchService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "bucketeer.batch.BatchService",
	HandlerType: (*BatchServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "ExecuteBatchJob",
			Handler:    _BatchService_ExecuteBatchJob_Handler,
		},
		{
			MethodName: "CurrentMigrationVersion",
			Handler:    _BatchService_CurrentMigrationVersion_Handler,
		},
		{
			MethodName: "Migrate",
			Handler:    _BatchService_Migrate_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "proto/batch/service.proto",
}
