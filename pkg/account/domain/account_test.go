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

package domain

import (
	"testing"

	"github.com/stretchr/testify/assert"

	proto "github.com/bucketeer-io/bucketeer/proto/account"
)

func TestNewAccount(t *testing.T) {
	a, err := NewAccount("email", proto.Account_VIEWER)
	assert.NoError(t, err)
	assert.Equal(t, "email", a.Id)
	assert.Equal(t, "email", a.Email)
	assert.Equal(t, proto.Account_VIEWER, a.Role)
}

func TestChangeRole(t *testing.T) {
	a, err := NewAccount("email", proto.Account_VIEWER)
	assert.NoError(t, err)
	a.ChangeRole(proto.Account_EDITOR)
	assert.Equal(t, proto.Account_EDITOR, a.Role)
}

func TestEnable(t *testing.T) {
	a, err := NewAccount("email", proto.Account_VIEWER)
	assert.NoError(t, err)
	a.Disabled = true
	a.Enable()
	assert.Equal(t, false, a.Disabled)
}

func TestDisable(t *testing.T) {
	a, err := NewAccount("email", proto.Account_VIEWER)
	assert.NoError(t, err)
	a.Disable()
	assert.Equal(t, true, a.Disabled)
}
