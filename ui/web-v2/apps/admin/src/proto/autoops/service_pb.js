// source: proto/autoops/service.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

var proto_autoops_auto_ops_rule_pb = require('../../proto/autoops/auto_ops_rule_pb.js');
goog.object.extend(proto, proto_autoops_auto_ops_rule_pb);
var proto_autoops_command_pb = require('../../proto/autoops/command_pb.js');
goog.object.extend(proto, proto_autoops_command_pb);
var proto_autoops_ops_count_pb = require('../../proto/autoops/ops_count_pb.js');
goog.object.extend(proto, proto_autoops_ops_count_pb);
var proto_autoops_webhook_pb = require('../../proto/autoops/webhook_pb.js');
goog.object.extend(proto, proto_autoops_webhook_pb);
var proto_autoops_progressive_rollout_pb = require('../../proto/autoops/progressive_rollout_pb.js');
goog.object.extend(proto, proto_autoops_progressive_rollout_pb);
var proto_autoops_flag_trigger_pb = require('../../proto/autoops/flag_trigger_pb.js');
goog.object.extend(proto, proto_autoops_flag_trigger_pb);
goog.exportSymbol('proto.bucketeer.autoops.ControlFlagTriggerRequest', null, global);
goog.exportSymbol('proto.bucketeer.autoops.ControlFlagTriggerResponse', null, global);
goog.exportSymbol('proto.bucketeer.autoops.CreateAutoOpsRuleRequest', null, global);
goog.exportSymbol('proto.bucketeer.autoops.CreateAutoOpsRuleResponse', null, global);
goog.exportSymbol('proto.bucketeer.autoops.CreateFlagTriggerRequest', null, global);
goog.exportSymbol('proto.bucketeer.autoops.CreateFlagTriggerResponse', null, global);
goog.exportSymbol('proto.bucketeer.autoops.CreateProgressiveRolloutRequest', null, global);
goog.exportSymbol('proto.bucketeer.autoops.CreateProgressiveRolloutResponse', null, global);
goog.exportSymbol('proto.bucketeer.autoops.CreateWebhookRequest', null, global);
goog.exportSymbol('proto.bucketeer.autoops.CreateWebhookResponse', null, global);
goog.exportSymbol('proto.bucketeer.autoops.DeleteAutoOpsRuleRequest', null, global);
goog.exportSymbol('proto.bucketeer.autoops.DeleteAutoOpsRuleResponse', null, global);
goog.exportSymbol('proto.bucketeer.autoops.DeleteFlagTriggerRequest', null, global);
goog.exportSymbol('proto.bucketeer.autoops.DeleteFlagTriggerResponse', null, global);
goog.exportSymbol('proto.bucketeer.autoops.DeleteProgressiveRolloutRequest', null, global);
goog.exportSymbol('proto.bucketeer.autoops.DeleteProgressiveRolloutResponse', null, global);
goog.exportSymbol('proto.bucketeer.autoops.DeleteWebhookRequest', null, global);
goog.exportSymbol('proto.bucketeer.autoops.DeleteWebhookResponse', null, global);
goog.exportSymbol('proto.bucketeer.autoops.ExecuteAutoOpsRequest', null, global);
goog.exportSymbol('proto.bucketeer.autoops.ExecuteAutoOpsResponse', null, global);
goog.exportSymbol('proto.bucketeer.autoops.ExecuteProgressiveRolloutRequest', null, global);
goog.exportSymbol('proto.bucketeer.autoops.ExecuteProgressiveRolloutResponse', null, global);
goog.exportSymbol('proto.bucketeer.autoops.GetAutoOpsRuleRequest', null, global);
goog.exportSymbol('proto.bucketeer.autoops.GetAutoOpsRuleResponse', null, global);
goog.exportSymbol('proto.bucketeer.autoops.GetFlagTriggerRequest', null, global);
goog.exportSymbol('proto.bucketeer.autoops.GetFlagTriggerResponse', null, global);
goog.exportSymbol('proto.bucketeer.autoops.GetProgressiveRolloutRequest', null, global);
goog.exportSymbol('proto.bucketeer.autoops.GetProgressiveRolloutResponse', null, global);
goog.exportSymbol('proto.bucketeer.autoops.GetWebhookRequest', null, global);
goog.exportSymbol('proto.bucketeer.autoops.GetWebhookResponse', null, global);
goog.exportSymbol('proto.bucketeer.autoops.ListAutoOpsRulesRequest', null, global);
goog.exportSymbol('proto.bucketeer.autoops.ListAutoOpsRulesResponse', null, global);
goog.exportSymbol('proto.bucketeer.autoops.ListFlagTriggersRequest', null, global);
goog.exportSymbol('proto.bucketeer.autoops.ListFlagTriggersRequest.OrderBy', null, global);
goog.exportSymbol('proto.bucketeer.autoops.ListFlagTriggersRequest.OrderDirection', null, global);
goog.exportSymbol('proto.bucketeer.autoops.ListFlagTriggersResponse', null, global);
goog.exportSymbol('proto.bucketeer.autoops.ListFlagTriggersResponse.FlagTriggerWithUrl', null, global);
goog.exportSymbol('proto.bucketeer.autoops.ListOpsCountsRequest', null, global);
goog.exportSymbol('proto.bucketeer.autoops.ListOpsCountsResponse', null, global);
goog.exportSymbol('proto.bucketeer.autoops.ListProgressiveRolloutsRequest', null, global);
goog.exportSymbol('proto.bucketeer.autoops.ListProgressiveRolloutsRequest.OrderBy', null, global);
goog.exportSymbol('proto.bucketeer.autoops.ListProgressiveRolloutsRequest.OrderDirection', null, global);
goog.exportSymbol('proto.bucketeer.autoops.ListProgressiveRolloutsResponse', null, global);
goog.exportSymbol('proto.bucketeer.autoops.ListWebhooksRequest', null, global);
goog.exportSymbol('proto.bucketeer.autoops.ListWebhooksRequest.OrderBy', null, global);
goog.exportSymbol('proto.bucketeer.autoops.ListWebhooksRequest.OrderDirection', null, global);
goog.exportSymbol('proto.bucketeer.autoops.ListWebhooksResponse', null, global);
goog.exportSymbol('proto.bucketeer.autoops.ResetFlagTriggerRequest', null, global);
goog.exportSymbol('proto.bucketeer.autoops.ResetFlagTriggerResponse', null, global);
goog.exportSymbol('proto.bucketeer.autoops.UpdateAutoOpsRuleRequest', null, global);
goog.exportSymbol('proto.bucketeer.autoops.UpdateAutoOpsRuleResponse', null, global);
goog.exportSymbol('proto.bucketeer.autoops.UpdateWebhookRequest', null, global);
goog.exportSymbol('proto.bucketeer.autoops.UpdateWebhookResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bucketeer.autoops.GetAutoOpsRuleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bucketeer.autoops.GetAutoOpsRuleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bucketeer.autoops.GetAutoOpsRuleRequest.displayName = 'proto.bucketeer.autoops.GetAutoOpsRuleRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bucketeer.autoops.GetAutoOpsRuleResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bucketeer.autoops.GetAutoOpsRuleResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bucketeer.autoops.GetAutoOpsRuleResponse.displayName = 'proto.bucketeer.autoops.GetAutoOpsRuleResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bucketeer.autoops.CreateAutoOpsRuleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bucketeer.autoops.CreateAutoOpsRuleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bucketeer.autoops.CreateAutoOpsRuleRequest.displayName = 'proto.bucketeer.autoops.CreateAutoOpsRuleRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bucketeer.autoops.CreateAutoOpsRuleResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bucketeer.autoops.CreateAutoOpsRuleResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bucketeer.autoops.CreateAutoOpsRuleResponse.displayName = 'proto.bucketeer.autoops.CreateAutoOpsRuleResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bucketeer.autoops.ListAutoOpsRulesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bucketeer.autoops.ListAutoOpsRulesRequest.repeatedFields_, null);
};
goog.inherits(proto.bucketeer.autoops.ListAutoOpsRulesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bucketeer.autoops.ListAutoOpsRulesRequest.displayName = 'proto.bucketeer.autoops.ListAutoOpsRulesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bucketeer.autoops.ListAutoOpsRulesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bucketeer.autoops.ListAutoOpsRulesResponse.repeatedFields_, null);
};
goog.inherits(proto.bucketeer.autoops.ListAutoOpsRulesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bucketeer.autoops.ListAutoOpsRulesResponse.displayName = 'proto.bucketeer.autoops.ListAutoOpsRulesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bucketeer.autoops.DeleteAutoOpsRuleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bucketeer.autoops.DeleteAutoOpsRuleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bucketeer.autoops.DeleteAutoOpsRuleRequest.displayName = 'proto.bucketeer.autoops.DeleteAutoOpsRuleRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bucketeer.autoops.DeleteAutoOpsRuleResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bucketeer.autoops.DeleteAutoOpsRuleResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bucketeer.autoops.DeleteAutoOpsRuleResponse.displayName = 'proto.bucketeer.autoops.DeleteAutoOpsRuleResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bucketeer.autoops.UpdateAutoOpsRuleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bucketeer.autoops.UpdateAutoOpsRuleRequest.repeatedFields_, null);
};
goog.inherits(proto.bucketeer.autoops.UpdateAutoOpsRuleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bucketeer.autoops.UpdateAutoOpsRuleRequest.displayName = 'proto.bucketeer.autoops.UpdateAutoOpsRuleRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bucketeer.autoops.UpdateAutoOpsRuleResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bucketeer.autoops.UpdateAutoOpsRuleResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bucketeer.autoops.UpdateAutoOpsRuleResponse.displayName = 'proto.bucketeer.autoops.UpdateAutoOpsRuleResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bucketeer.autoops.ExecuteAutoOpsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bucketeer.autoops.ExecuteAutoOpsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bucketeer.autoops.ExecuteAutoOpsRequest.displayName = 'proto.bucketeer.autoops.ExecuteAutoOpsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bucketeer.autoops.ExecuteAutoOpsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bucketeer.autoops.ExecuteAutoOpsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bucketeer.autoops.ExecuteAutoOpsResponse.displayName = 'proto.bucketeer.autoops.ExecuteAutoOpsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bucketeer.autoops.ListOpsCountsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bucketeer.autoops.ListOpsCountsRequest.repeatedFields_, null);
};
goog.inherits(proto.bucketeer.autoops.ListOpsCountsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bucketeer.autoops.ListOpsCountsRequest.displayName = 'proto.bucketeer.autoops.ListOpsCountsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bucketeer.autoops.ListOpsCountsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bucketeer.autoops.ListOpsCountsResponse.repeatedFields_, null);
};
goog.inherits(proto.bucketeer.autoops.ListOpsCountsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bucketeer.autoops.ListOpsCountsResponse.displayName = 'proto.bucketeer.autoops.ListOpsCountsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bucketeer.autoops.CreateWebhookRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bucketeer.autoops.CreateWebhookRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bucketeer.autoops.CreateWebhookRequest.displayName = 'proto.bucketeer.autoops.CreateWebhookRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bucketeer.autoops.CreateWebhookResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bucketeer.autoops.CreateWebhookResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bucketeer.autoops.CreateWebhookResponse.displayName = 'proto.bucketeer.autoops.CreateWebhookResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bucketeer.autoops.GetWebhookRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bucketeer.autoops.GetWebhookRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bucketeer.autoops.GetWebhookRequest.displayName = 'proto.bucketeer.autoops.GetWebhookRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bucketeer.autoops.GetWebhookResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bucketeer.autoops.GetWebhookResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bucketeer.autoops.GetWebhookResponse.displayName = 'proto.bucketeer.autoops.GetWebhookResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bucketeer.autoops.UpdateWebhookRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bucketeer.autoops.UpdateWebhookRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bucketeer.autoops.UpdateWebhookRequest.displayName = 'proto.bucketeer.autoops.UpdateWebhookRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bucketeer.autoops.UpdateWebhookResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bucketeer.autoops.UpdateWebhookResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bucketeer.autoops.UpdateWebhookResponse.displayName = 'proto.bucketeer.autoops.UpdateWebhookResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bucketeer.autoops.DeleteWebhookRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bucketeer.autoops.DeleteWebhookRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bucketeer.autoops.DeleteWebhookRequest.displayName = 'proto.bucketeer.autoops.DeleteWebhookRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bucketeer.autoops.DeleteWebhookResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bucketeer.autoops.DeleteWebhookResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bucketeer.autoops.DeleteWebhookResponse.displayName = 'proto.bucketeer.autoops.DeleteWebhookResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bucketeer.autoops.ListWebhooksRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bucketeer.autoops.ListWebhooksRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bucketeer.autoops.ListWebhooksRequest.displayName = 'proto.bucketeer.autoops.ListWebhooksRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bucketeer.autoops.ListWebhooksResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bucketeer.autoops.ListWebhooksResponse.repeatedFields_, null);
};
goog.inherits(proto.bucketeer.autoops.ListWebhooksResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bucketeer.autoops.ListWebhooksResponse.displayName = 'proto.bucketeer.autoops.ListWebhooksResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bucketeer.autoops.CreateProgressiveRolloutRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bucketeer.autoops.CreateProgressiveRolloutRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bucketeer.autoops.CreateProgressiveRolloutRequest.displayName = 'proto.bucketeer.autoops.CreateProgressiveRolloutRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bucketeer.autoops.CreateProgressiveRolloutResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bucketeer.autoops.CreateProgressiveRolloutResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bucketeer.autoops.CreateProgressiveRolloutResponse.displayName = 'proto.bucketeer.autoops.CreateProgressiveRolloutResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bucketeer.autoops.GetProgressiveRolloutRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bucketeer.autoops.GetProgressiveRolloutRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bucketeer.autoops.GetProgressiveRolloutRequest.displayName = 'proto.bucketeer.autoops.GetProgressiveRolloutRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bucketeer.autoops.GetProgressiveRolloutResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bucketeer.autoops.GetProgressiveRolloutResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bucketeer.autoops.GetProgressiveRolloutResponse.displayName = 'proto.bucketeer.autoops.GetProgressiveRolloutResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bucketeer.autoops.DeleteProgressiveRolloutRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bucketeer.autoops.DeleteProgressiveRolloutRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bucketeer.autoops.DeleteProgressiveRolloutRequest.displayName = 'proto.bucketeer.autoops.DeleteProgressiveRolloutRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bucketeer.autoops.DeleteProgressiveRolloutResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bucketeer.autoops.DeleteProgressiveRolloutResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bucketeer.autoops.DeleteProgressiveRolloutResponse.displayName = 'proto.bucketeer.autoops.DeleteProgressiveRolloutResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bucketeer.autoops.ListProgressiveRolloutsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bucketeer.autoops.ListProgressiveRolloutsRequest.repeatedFields_, null);
};
goog.inherits(proto.bucketeer.autoops.ListProgressiveRolloutsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bucketeer.autoops.ListProgressiveRolloutsRequest.displayName = 'proto.bucketeer.autoops.ListProgressiveRolloutsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bucketeer.autoops.ListProgressiveRolloutsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bucketeer.autoops.ListProgressiveRolloutsResponse.repeatedFields_, null);
};
goog.inherits(proto.bucketeer.autoops.ListProgressiveRolloutsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bucketeer.autoops.ListProgressiveRolloutsResponse.displayName = 'proto.bucketeer.autoops.ListProgressiveRolloutsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bucketeer.autoops.ExecuteProgressiveRolloutRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bucketeer.autoops.ExecuteProgressiveRolloutRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bucketeer.autoops.ExecuteProgressiveRolloutRequest.displayName = 'proto.bucketeer.autoops.ExecuteProgressiveRolloutRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bucketeer.autoops.ExecuteProgressiveRolloutResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bucketeer.autoops.ExecuteProgressiveRolloutResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bucketeer.autoops.ExecuteProgressiveRolloutResponse.displayName = 'proto.bucketeer.autoops.ExecuteProgressiveRolloutResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bucketeer.autoops.CreateFlagTriggerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bucketeer.autoops.CreateFlagTriggerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bucketeer.autoops.CreateFlagTriggerRequest.displayName = 'proto.bucketeer.autoops.CreateFlagTriggerRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bucketeer.autoops.CreateFlagTriggerResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bucketeer.autoops.CreateFlagTriggerResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bucketeer.autoops.CreateFlagTriggerResponse.displayName = 'proto.bucketeer.autoops.CreateFlagTriggerResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bucketeer.autoops.DeleteFlagTriggerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bucketeer.autoops.DeleteFlagTriggerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bucketeer.autoops.DeleteFlagTriggerRequest.displayName = 'proto.bucketeer.autoops.DeleteFlagTriggerRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bucketeer.autoops.DeleteFlagTriggerResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bucketeer.autoops.DeleteFlagTriggerResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bucketeer.autoops.DeleteFlagTriggerResponse.displayName = 'proto.bucketeer.autoops.DeleteFlagTriggerResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bucketeer.autoops.ControlFlagTriggerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bucketeer.autoops.ControlFlagTriggerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bucketeer.autoops.ControlFlagTriggerRequest.displayName = 'proto.bucketeer.autoops.ControlFlagTriggerRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bucketeer.autoops.ControlFlagTriggerResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bucketeer.autoops.ControlFlagTriggerResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bucketeer.autoops.ControlFlagTriggerResponse.displayName = 'proto.bucketeer.autoops.ControlFlagTriggerResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bucketeer.autoops.ResetFlagTriggerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bucketeer.autoops.ResetFlagTriggerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bucketeer.autoops.ResetFlagTriggerRequest.displayName = 'proto.bucketeer.autoops.ResetFlagTriggerRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bucketeer.autoops.ResetFlagTriggerResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bucketeer.autoops.ResetFlagTriggerResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bucketeer.autoops.ResetFlagTriggerResponse.displayName = 'proto.bucketeer.autoops.ResetFlagTriggerResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bucketeer.autoops.GetFlagTriggerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bucketeer.autoops.GetFlagTriggerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bucketeer.autoops.GetFlagTriggerRequest.displayName = 'proto.bucketeer.autoops.GetFlagTriggerRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bucketeer.autoops.GetFlagTriggerResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bucketeer.autoops.GetFlagTriggerResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bucketeer.autoops.GetFlagTriggerResponse.displayName = 'proto.bucketeer.autoops.GetFlagTriggerResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bucketeer.autoops.ListFlagTriggersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bucketeer.autoops.ListFlagTriggersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bucketeer.autoops.ListFlagTriggersRequest.displayName = 'proto.bucketeer.autoops.ListFlagTriggersRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bucketeer.autoops.ListFlagTriggersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bucketeer.autoops.ListFlagTriggersResponse.repeatedFields_, null);
};
goog.inherits(proto.bucketeer.autoops.ListFlagTriggersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bucketeer.autoops.ListFlagTriggersResponse.displayName = 'proto.bucketeer.autoops.ListFlagTriggersResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bucketeer.autoops.ListFlagTriggersResponse.FlagTriggerWithUrl = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bucketeer.autoops.ListFlagTriggersResponse.FlagTriggerWithUrl, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bucketeer.autoops.ListFlagTriggersResponse.FlagTriggerWithUrl.displayName = 'proto.bucketeer.autoops.ListFlagTriggersResponse.FlagTriggerWithUrl';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bucketeer.autoops.GetAutoOpsRuleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bucketeer.autoops.GetAutoOpsRuleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bucketeer.autoops.GetAutoOpsRuleRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.GetAutoOpsRuleRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    environmentNamespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    id: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bucketeer.autoops.GetAutoOpsRuleRequest}
 */
proto.bucketeer.autoops.GetAutoOpsRuleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bucketeer.autoops.GetAutoOpsRuleRequest;
  return proto.bucketeer.autoops.GetAutoOpsRuleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bucketeer.autoops.GetAutoOpsRuleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bucketeer.autoops.GetAutoOpsRuleRequest}
 */
proto.bucketeer.autoops.GetAutoOpsRuleRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEnvironmentNamespace(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bucketeer.autoops.GetAutoOpsRuleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bucketeer.autoops.GetAutoOpsRuleRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bucketeer.autoops.GetAutoOpsRuleRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.GetAutoOpsRuleRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnvironmentNamespace();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string environment_namespace = 1;
 * @return {string}
 */
proto.bucketeer.autoops.GetAutoOpsRuleRequest.prototype.getEnvironmentNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bucketeer.autoops.GetAutoOpsRuleRequest} returns this
 */
proto.bucketeer.autoops.GetAutoOpsRuleRequest.prototype.setEnvironmentNamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string id = 2;
 * @return {string}
 */
proto.bucketeer.autoops.GetAutoOpsRuleRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bucketeer.autoops.GetAutoOpsRuleRequest} returns this
 */
proto.bucketeer.autoops.GetAutoOpsRuleRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bucketeer.autoops.GetAutoOpsRuleResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.bucketeer.autoops.GetAutoOpsRuleResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bucketeer.autoops.GetAutoOpsRuleResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.GetAutoOpsRuleResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    autoOpsRule: (f = msg.getAutoOpsRule()) && proto_autoops_auto_ops_rule_pb.AutoOpsRule.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bucketeer.autoops.GetAutoOpsRuleResponse}
 */
proto.bucketeer.autoops.GetAutoOpsRuleResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bucketeer.autoops.GetAutoOpsRuleResponse;
  return proto.bucketeer.autoops.GetAutoOpsRuleResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bucketeer.autoops.GetAutoOpsRuleResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bucketeer.autoops.GetAutoOpsRuleResponse}
 */
proto.bucketeer.autoops.GetAutoOpsRuleResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_autoops_auto_ops_rule_pb.AutoOpsRule;
      reader.readMessage(value,proto_autoops_auto_ops_rule_pb.AutoOpsRule.deserializeBinaryFromReader);
      msg.setAutoOpsRule(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bucketeer.autoops.GetAutoOpsRuleResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bucketeer.autoops.GetAutoOpsRuleResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bucketeer.autoops.GetAutoOpsRuleResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.GetAutoOpsRuleResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAutoOpsRule();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_autoops_auto_ops_rule_pb.AutoOpsRule.serializeBinaryToWriter
    );
  }
};


/**
 * optional AutoOpsRule auto_ops_rule = 1;
 * @return {?proto.bucketeer.autoops.AutoOpsRule}
 */
proto.bucketeer.autoops.GetAutoOpsRuleResponse.prototype.getAutoOpsRule = function() {
  return /** @type{?proto.bucketeer.autoops.AutoOpsRule} */ (
    jspb.Message.getWrapperField(this, proto_autoops_auto_ops_rule_pb.AutoOpsRule, 1));
};


/**
 * @param {?proto.bucketeer.autoops.AutoOpsRule|undefined} value
 * @return {!proto.bucketeer.autoops.GetAutoOpsRuleResponse} returns this
*/
proto.bucketeer.autoops.GetAutoOpsRuleResponse.prototype.setAutoOpsRule = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bucketeer.autoops.GetAutoOpsRuleResponse} returns this
 */
proto.bucketeer.autoops.GetAutoOpsRuleResponse.prototype.clearAutoOpsRule = function() {
  return this.setAutoOpsRule(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bucketeer.autoops.GetAutoOpsRuleResponse.prototype.hasAutoOpsRule = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bucketeer.autoops.CreateAutoOpsRuleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bucketeer.autoops.CreateAutoOpsRuleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bucketeer.autoops.CreateAutoOpsRuleRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.CreateAutoOpsRuleRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    environmentNamespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    command: (f = msg.getCommand()) && proto_autoops_command_pb.CreateAutoOpsRuleCommand.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bucketeer.autoops.CreateAutoOpsRuleRequest}
 */
proto.bucketeer.autoops.CreateAutoOpsRuleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bucketeer.autoops.CreateAutoOpsRuleRequest;
  return proto.bucketeer.autoops.CreateAutoOpsRuleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bucketeer.autoops.CreateAutoOpsRuleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bucketeer.autoops.CreateAutoOpsRuleRequest}
 */
proto.bucketeer.autoops.CreateAutoOpsRuleRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEnvironmentNamespace(value);
      break;
    case 2:
      var value = new proto_autoops_command_pb.CreateAutoOpsRuleCommand;
      reader.readMessage(value,proto_autoops_command_pb.CreateAutoOpsRuleCommand.deserializeBinaryFromReader);
      msg.setCommand(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bucketeer.autoops.CreateAutoOpsRuleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bucketeer.autoops.CreateAutoOpsRuleRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bucketeer.autoops.CreateAutoOpsRuleRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.CreateAutoOpsRuleRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnvironmentNamespace();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCommand();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto_autoops_command_pb.CreateAutoOpsRuleCommand.serializeBinaryToWriter
    );
  }
};


/**
 * optional string environment_namespace = 1;
 * @return {string}
 */
proto.bucketeer.autoops.CreateAutoOpsRuleRequest.prototype.getEnvironmentNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bucketeer.autoops.CreateAutoOpsRuleRequest} returns this
 */
proto.bucketeer.autoops.CreateAutoOpsRuleRequest.prototype.setEnvironmentNamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional CreateAutoOpsRuleCommand command = 2;
 * @return {?proto.bucketeer.autoops.CreateAutoOpsRuleCommand}
 */
proto.bucketeer.autoops.CreateAutoOpsRuleRequest.prototype.getCommand = function() {
  return /** @type{?proto.bucketeer.autoops.CreateAutoOpsRuleCommand} */ (
    jspb.Message.getWrapperField(this, proto_autoops_command_pb.CreateAutoOpsRuleCommand, 2));
};


/**
 * @param {?proto.bucketeer.autoops.CreateAutoOpsRuleCommand|undefined} value
 * @return {!proto.bucketeer.autoops.CreateAutoOpsRuleRequest} returns this
*/
proto.bucketeer.autoops.CreateAutoOpsRuleRequest.prototype.setCommand = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bucketeer.autoops.CreateAutoOpsRuleRequest} returns this
 */
proto.bucketeer.autoops.CreateAutoOpsRuleRequest.prototype.clearCommand = function() {
  return this.setCommand(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bucketeer.autoops.CreateAutoOpsRuleRequest.prototype.hasCommand = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bucketeer.autoops.CreateAutoOpsRuleResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.bucketeer.autoops.CreateAutoOpsRuleResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bucketeer.autoops.CreateAutoOpsRuleResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.CreateAutoOpsRuleResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bucketeer.autoops.CreateAutoOpsRuleResponse}
 */
proto.bucketeer.autoops.CreateAutoOpsRuleResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bucketeer.autoops.CreateAutoOpsRuleResponse;
  return proto.bucketeer.autoops.CreateAutoOpsRuleResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bucketeer.autoops.CreateAutoOpsRuleResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bucketeer.autoops.CreateAutoOpsRuleResponse}
 */
proto.bucketeer.autoops.CreateAutoOpsRuleResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bucketeer.autoops.CreateAutoOpsRuleResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bucketeer.autoops.CreateAutoOpsRuleResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bucketeer.autoops.CreateAutoOpsRuleResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.CreateAutoOpsRuleResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bucketeer.autoops.ListAutoOpsRulesRequest.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bucketeer.autoops.ListAutoOpsRulesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bucketeer.autoops.ListAutoOpsRulesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bucketeer.autoops.ListAutoOpsRulesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.ListAutoOpsRulesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    environmentNamespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pageSize: jspb.Message.getFieldWithDefault(msg, 2, 0),
    cursor: jspb.Message.getFieldWithDefault(msg, 3, ""),
    featureIdsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bucketeer.autoops.ListAutoOpsRulesRequest}
 */
proto.bucketeer.autoops.ListAutoOpsRulesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bucketeer.autoops.ListAutoOpsRulesRequest;
  return proto.bucketeer.autoops.ListAutoOpsRulesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bucketeer.autoops.ListAutoOpsRulesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bucketeer.autoops.ListAutoOpsRulesRequest}
 */
proto.bucketeer.autoops.ListAutoOpsRulesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEnvironmentNamespace(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPageSize(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCursor(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addFeatureIds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bucketeer.autoops.ListAutoOpsRulesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bucketeer.autoops.ListAutoOpsRulesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bucketeer.autoops.ListAutoOpsRulesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.ListAutoOpsRulesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnvironmentNamespace();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getCursor();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getFeatureIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
};


/**
 * optional string environment_namespace = 1;
 * @return {string}
 */
proto.bucketeer.autoops.ListAutoOpsRulesRequest.prototype.getEnvironmentNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bucketeer.autoops.ListAutoOpsRulesRequest} returns this
 */
proto.bucketeer.autoops.ListAutoOpsRulesRequest.prototype.setEnvironmentNamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 page_size = 2;
 * @return {number}
 */
proto.bucketeer.autoops.ListAutoOpsRulesRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bucketeer.autoops.ListAutoOpsRulesRequest} returns this
 */
proto.bucketeer.autoops.ListAutoOpsRulesRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string cursor = 3;
 * @return {string}
 */
proto.bucketeer.autoops.ListAutoOpsRulesRequest.prototype.getCursor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.bucketeer.autoops.ListAutoOpsRulesRequest} returns this
 */
proto.bucketeer.autoops.ListAutoOpsRulesRequest.prototype.setCursor = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated string feature_ids = 4;
 * @return {!Array<string>}
 */
proto.bucketeer.autoops.ListAutoOpsRulesRequest.prototype.getFeatureIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.bucketeer.autoops.ListAutoOpsRulesRequest} returns this
 */
proto.bucketeer.autoops.ListAutoOpsRulesRequest.prototype.setFeatureIdsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.bucketeer.autoops.ListAutoOpsRulesRequest} returns this
 */
proto.bucketeer.autoops.ListAutoOpsRulesRequest.prototype.addFeatureIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bucketeer.autoops.ListAutoOpsRulesRequest} returns this
 */
proto.bucketeer.autoops.ListAutoOpsRulesRequest.prototype.clearFeatureIdsList = function() {
  return this.setFeatureIdsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bucketeer.autoops.ListAutoOpsRulesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bucketeer.autoops.ListAutoOpsRulesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.bucketeer.autoops.ListAutoOpsRulesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bucketeer.autoops.ListAutoOpsRulesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.ListAutoOpsRulesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    autoOpsRulesList: jspb.Message.toObjectList(msg.getAutoOpsRulesList(),
    proto_autoops_auto_ops_rule_pb.AutoOpsRule.toObject, includeInstance),
    cursor: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bucketeer.autoops.ListAutoOpsRulesResponse}
 */
proto.bucketeer.autoops.ListAutoOpsRulesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bucketeer.autoops.ListAutoOpsRulesResponse;
  return proto.bucketeer.autoops.ListAutoOpsRulesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bucketeer.autoops.ListAutoOpsRulesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bucketeer.autoops.ListAutoOpsRulesResponse}
 */
proto.bucketeer.autoops.ListAutoOpsRulesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_autoops_auto_ops_rule_pb.AutoOpsRule;
      reader.readMessage(value,proto_autoops_auto_ops_rule_pb.AutoOpsRule.deserializeBinaryFromReader);
      msg.addAutoOpsRules(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCursor(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bucketeer.autoops.ListAutoOpsRulesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bucketeer.autoops.ListAutoOpsRulesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bucketeer.autoops.ListAutoOpsRulesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.ListAutoOpsRulesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAutoOpsRulesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto_autoops_auto_ops_rule_pb.AutoOpsRule.serializeBinaryToWriter
    );
  }
  f = message.getCursor();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated AutoOpsRule auto_ops_rules = 1;
 * @return {!Array<!proto.bucketeer.autoops.AutoOpsRule>}
 */
proto.bucketeer.autoops.ListAutoOpsRulesResponse.prototype.getAutoOpsRulesList = function() {
  return /** @type{!Array<!proto.bucketeer.autoops.AutoOpsRule>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_autoops_auto_ops_rule_pb.AutoOpsRule, 1));
};


/**
 * @param {!Array<!proto.bucketeer.autoops.AutoOpsRule>} value
 * @return {!proto.bucketeer.autoops.ListAutoOpsRulesResponse} returns this
*/
proto.bucketeer.autoops.ListAutoOpsRulesResponse.prototype.setAutoOpsRulesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.bucketeer.autoops.AutoOpsRule=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bucketeer.autoops.AutoOpsRule}
 */
proto.bucketeer.autoops.ListAutoOpsRulesResponse.prototype.addAutoOpsRules = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.bucketeer.autoops.AutoOpsRule, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bucketeer.autoops.ListAutoOpsRulesResponse} returns this
 */
proto.bucketeer.autoops.ListAutoOpsRulesResponse.prototype.clearAutoOpsRulesList = function() {
  return this.setAutoOpsRulesList([]);
};


/**
 * optional string cursor = 2;
 * @return {string}
 */
proto.bucketeer.autoops.ListAutoOpsRulesResponse.prototype.getCursor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bucketeer.autoops.ListAutoOpsRulesResponse} returns this
 */
proto.bucketeer.autoops.ListAutoOpsRulesResponse.prototype.setCursor = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bucketeer.autoops.DeleteAutoOpsRuleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bucketeer.autoops.DeleteAutoOpsRuleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bucketeer.autoops.DeleteAutoOpsRuleRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.DeleteAutoOpsRuleRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    environmentNamespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    id: jspb.Message.getFieldWithDefault(msg, 2, ""),
    command: (f = msg.getCommand()) && proto_autoops_command_pb.DeleteAutoOpsRuleCommand.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bucketeer.autoops.DeleteAutoOpsRuleRequest}
 */
proto.bucketeer.autoops.DeleteAutoOpsRuleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bucketeer.autoops.DeleteAutoOpsRuleRequest;
  return proto.bucketeer.autoops.DeleteAutoOpsRuleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bucketeer.autoops.DeleteAutoOpsRuleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bucketeer.autoops.DeleteAutoOpsRuleRequest}
 */
proto.bucketeer.autoops.DeleteAutoOpsRuleRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEnvironmentNamespace(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 3:
      var value = new proto_autoops_command_pb.DeleteAutoOpsRuleCommand;
      reader.readMessage(value,proto_autoops_command_pb.DeleteAutoOpsRuleCommand.deserializeBinaryFromReader);
      msg.setCommand(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bucketeer.autoops.DeleteAutoOpsRuleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bucketeer.autoops.DeleteAutoOpsRuleRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bucketeer.autoops.DeleteAutoOpsRuleRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.DeleteAutoOpsRuleRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnvironmentNamespace();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCommand();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto_autoops_command_pb.DeleteAutoOpsRuleCommand.serializeBinaryToWriter
    );
  }
};


/**
 * optional string environment_namespace = 1;
 * @return {string}
 */
proto.bucketeer.autoops.DeleteAutoOpsRuleRequest.prototype.getEnvironmentNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bucketeer.autoops.DeleteAutoOpsRuleRequest} returns this
 */
proto.bucketeer.autoops.DeleteAutoOpsRuleRequest.prototype.setEnvironmentNamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string id = 2;
 * @return {string}
 */
proto.bucketeer.autoops.DeleteAutoOpsRuleRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bucketeer.autoops.DeleteAutoOpsRuleRequest} returns this
 */
proto.bucketeer.autoops.DeleteAutoOpsRuleRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional DeleteAutoOpsRuleCommand command = 3;
 * @return {?proto.bucketeer.autoops.DeleteAutoOpsRuleCommand}
 */
proto.bucketeer.autoops.DeleteAutoOpsRuleRequest.prototype.getCommand = function() {
  return /** @type{?proto.bucketeer.autoops.DeleteAutoOpsRuleCommand} */ (
    jspb.Message.getWrapperField(this, proto_autoops_command_pb.DeleteAutoOpsRuleCommand, 3));
};


/**
 * @param {?proto.bucketeer.autoops.DeleteAutoOpsRuleCommand|undefined} value
 * @return {!proto.bucketeer.autoops.DeleteAutoOpsRuleRequest} returns this
*/
proto.bucketeer.autoops.DeleteAutoOpsRuleRequest.prototype.setCommand = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bucketeer.autoops.DeleteAutoOpsRuleRequest} returns this
 */
proto.bucketeer.autoops.DeleteAutoOpsRuleRequest.prototype.clearCommand = function() {
  return this.setCommand(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bucketeer.autoops.DeleteAutoOpsRuleRequest.prototype.hasCommand = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bucketeer.autoops.DeleteAutoOpsRuleResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.bucketeer.autoops.DeleteAutoOpsRuleResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bucketeer.autoops.DeleteAutoOpsRuleResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.DeleteAutoOpsRuleResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bucketeer.autoops.DeleteAutoOpsRuleResponse}
 */
proto.bucketeer.autoops.DeleteAutoOpsRuleResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bucketeer.autoops.DeleteAutoOpsRuleResponse;
  return proto.bucketeer.autoops.DeleteAutoOpsRuleResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bucketeer.autoops.DeleteAutoOpsRuleResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bucketeer.autoops.DeleteAutoOpsRuleResponse}
 */
proto.bucketeer.autoops.DeleteAutoOpsRuleResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bucketeer.autoops.DeleteAutoOpsRuleResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bucketeer.autoops.DeleteAutoOpsRuleResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bucketeer.autoops.DeleteAutoOpsRuleResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.DeleteAutoOpsRuleResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bucketeer.autoops.UpdateAutoOpsRuleRequest.repeatedFields_ = [4,5,6,7,8,9,10];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bucketeer.autoops.UpdateAutoOpsRuleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bucketeer.autoops.UpdateAutoOpsRuleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bucketeer.autoops.UpdateAutoOpsRuleRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.UpdateAutoOpsRuleRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    environmentNamespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    id: jspb.Message.getFieldWithDefault(msg, 2, ""),
    changeAutoOpsRuleOpsTypeCommand: (f = msg.getChangeAutoOpsRuleOpsTypeCommand()) && proto_autoops_command_pb.ChangeAutoOpsRuleOpsTypeCommand.toObject(includeInstance, f),
    addOpsEventRateClauseCommandsList: jspb.Message.toObjectList(msg.getAddOpsEventRateClauseCommandsList(),
    proto_autoops_command_pb.AddOpsEventRateClauseCommand.toObject, includeInstance),
    changeOpsEventRateClauseCommandsList: jspb.Message.toObjectList(msg.getChangeOpsEventRateClauseCommandsList(),
    proto_autoops_command_pb.ChangeOpsEventRateClauseCommand.toObject, includeInstance),
    deleteClauseCommandsList: jspb.Message.toObjectList(msg.getDeleteClauseCommandsList(),
    proto_autoops_command_pb.DeleteClauseCommand.toObject, includeInstance),
    addDatetimeClauseCommandsList: jspb.Message.toObjectList(msg.getAddDatetimeClauseCommandsList(),
    proto_autoops_command_pb.AddDatetimeClauseCommand.toObject, includeInstance),
    changeDatetimeClauseCommandsList: jspb.Message.toObjectList(msg.getChangeDatetimeClauseCommandsList(),
    proto_autoops_command_pb.ChangeDatetimeClauseCommand.toObject, includeInstance),
    addWebhookClauseCommandsList: jspb.Message.toObjectList(msg.getAddWebhookClauseCommandsList(),
    proto_autoops_command_pb.AddWebhookClauseCommand.toObject, includeInstance),
    changeWebhookClauseCommandsList: jspb.Message.toObjectList(msg.getChangeWebhookClauseCommandsList(),
    proto_autoops_command_pb.ChangeWebhookClauseCommand.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bucketeer.autoops.UpdateAutoOpsRuleRequest}
 */
proto.bucketeer.autoops.UpdateAutoOpsRuleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bucketeer.autoops.UpdateAutoOpsRuleRequest;
  return proto.bucketeer.autoops.UpdateAutoOpsRuleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bucketeer.autoops.UpdateAutoOpsRuleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bucketeer.autoops.UpdateAutoOpsRuleRequest}
 */
proto.bucketeer.autoops.UpdateAutoOpsRuleRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEnvironmentNamespace(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 3:
      var value = new proto_autoops_command_pb.ChangeAutoOpsRuleOpsTypeCommand;
      reader.readMessage(value,proto_autoops_command_pb.ChangeAutoOpsRuleOpsTypeCommand.deserializeBinaryFromReader);
      msg.setChangeAutoOpsRuleOpsTypeCommand(value);
      break;
    case 4:
      var value = new proto_autoops_command_pb.AddOpsEventRateClauseCommand;
      reader.readMessage(value,proto_autoops_command_pb.AddOpsEventRateClauseCommand.deserializeBinaryFromReader);
      msg.addAddOpsEventRateClauseCommands(value);
      break;
    case 5:
      var value = new proto_autoops_command_pb.ChangeOpsEventRateClauseCommand;
      reader.readMessage(value,proto_autoops_command_pb.ChangeOpsEventRateClauseCommand.deserializeBinaryFromReader);
      msg.addChangeOpsEventRateClauseCommands(value);
      break;
    case 6:
      var value = new proto_autoops_command_pb.DeleteClauseCommand;
      reader.readMessage(value,proto_autoops_command_pb.DeleteClauseCommand.deserializeBinaryFromReader);
      msg.addDeleteClauseCommands(value);
      break;
    case 7:
      var value = new proto_autoops_command_pb.AddDatetimeClauseCommand;
      reader.readMessage(value,proto_autoops_command_pb.AddDatetimeClauseCommand.deserializeBinaryFromReader);
      msg.addAddDatetimeClauseCommands(value);
      break;
    case 8:
      var value = new proto_autoops_command_pb.ChangeDatetimeClauseCommand;
      reader.readMessage(value,proto_autoops_command_pb.ChangeDatetimeClauseCommand.deserializeBinaryFromReader);
      msg.addChangeDatetimeClauseCommands(value);
      break;
    case 9:
      var value = new proto_autoops_command_pb.AddWebhookClauseCommand;
      reader.readMessage(value,proto_autoops_command_pb.AddWebhookClauseCommand.deserializeBinaryFromReader);
      msg.addAddWebhookClauseCommands(value);
      break;
    case 10:
      var value = new proto_autoops_command_pb.ChangeWebhookClauseCommand;
      reader.readMessage(value,proto_autoops_command_pb.ChangeWebhookClauseCommand.deserializeBinaryFromReader);
      msg.addChangeWebhookClauseCommands(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bucketeer.autoops.UpdateAutoOpsRuleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bucketeer.autoops.UpdateAutoOpsRuleRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bucketeer.autoops.UpdateAutoOpsRuleRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.UpdateAutoOpsRuleRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnvironmentNamespace();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getChangeAutoOpsRuleOpsTypeCommand();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto_autoops_command_pb.ChangeAutoOpsRuleOpsTypeCommand.serializeBinaryToWriter
    );
  }
  f = message.getAddOpsEventRateClauseCommandsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto_autoops_command_pb.AddOpsEventRateClauseCommand.serializeBinaryToWriter
    );
  }
  f = message.getChangeOpsEventRateClauseCommandsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto_autoops_command_pb.ChangeOpsEventRateClauseCommand.serializeBinaryToWriter
    );
  }
  f = message.getDeleteClauseCommandsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto_autoops_command_pb.DeleteClauseCommand.serializeBinaryToWriter
    );
  }
  f = message.getAddDatetimeClauseCommandsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto_autoops_command_pb.AddDatetimeClauseCommand.serializeBinaryToWriter
    );
  }
  f = message.getChangeDatetimeClauseCommandsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto_autoops_command_pb.ChangeDatetimeClauseCommand.serializeBinaryToWriter
    );
  }
  f = message.getAddWebhookClauseCommandsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto_autoops_command_pb.AddWebhookClauseCommand.serializeBinaryToWriter
    );
  }
  f = message.getChangeWebhookClauseCommandsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      proto_autoops_command_pb.ChangeWebhookClauseCommand.serializeBinaryToWriter
    );
  }
};


/**
 * optional string environment_namespace = 1;
 * @return {string}
 */
proto.bucketeer.autoops.UpdateAutoOpsRuleRequest.prototype.getEnvironmentNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bucketeer.autoops.UpdateAutoOpsRuleRequest} returns this
 */
proto.bucketeer.autoops.UpdateAutoOpsRuleRequest.prototype.setEnvironmentNamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string id = 2;
 * @return {string}
 */
proto.bucketeer.autoops.UpdateAutoOpsRuleRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bucketeer.autoops.UpdateAutoOpsRuleRequest} returns this
 */
proto.bucketeer.autoops.UpdateAutoOpsRuleRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional ChangeAutoOpsRuleOpsTypeCommand change_auto_ops_rule_ops_type_command = 3;
 * @return {?proto.bucketeer.autoops.ChangeAutoOpsRuleOpsTypeCommand}
 */
proto.bucketeer.autoops.UpdateAutoOpsRuleRequest.prototype.getChangeAutoOpsRuleOpsTypeCommand = function() {
  return /** @type{?proto.bucketeer.autoops.ChangeAutoOpsRuleOpsTypeCommand} */ (
    jspb.Message.getWrapperField(this, proto_autoops_command_pb.ChangeAutoOpsRuleOpsTypeCommand, 3));
};


/**
 * @param {?proto.bucketeer.autoops.ChangeAutoOpsRuleOpsTypeCommand|undefined} value
 * @return {!proto.bucketeer.autoops.UpdateAutoOpsRuleRequest} returns this
*/
proto.bucketeer.autoops.UpdateAutoOpsRuleRequest.prototype.setChangeAutoOpsRuleOpsTypeCommand = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bucketeer.autoops.UpdateAutoOpsRuleRequest} returns this
 */
proto.bucketeer.autoops.UpdateAutoOpsRuleRequest.prototype.clearChangeAutoOpsRuleOpsTypeCommand = function() {
  return this.setChangeAutoOpsRuleOpsTypeCommand(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bucketeer.autoops.UpdateAutoOpsRuleRequest.prototype.hasChangeAutoOpsRuleOpsTypeCommand = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated AddOpsEventRateClauseCommand add_ops_event_rate_clause_commands = 4;
 * @return {!Array<!proto.bucketeer.autoops.AddOpsEventRateClauseCommand>}
 */
proto.bucketeer.autoops.UpdateAutoOpsRuleRequest.prototype.getAddOpsEventRateClauseCommandsList = function() {
  return /** @type{!Array<!proto.bucketeer.autoops.AddOpsEventRateClauseCommand>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_autoops_command_pb.AddOpsEventRateClauseCommand, 4));
};


/**
 * @param {!Array<!proto.bucketeer.autoops.AddOpsEventRateClauseCommand>} value
 * @return {!proto.bucketeer.autoops.UpdateAutoOpsRuleRequest} returns this
*/
proto.bucketeer.autoops.UpdateAutoOpsRuleRequest.prototype.setAddOpsEventRateClauseCommandsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.bucketeer.autoops.AddOpsEventRateClauseCommand=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bucketeer.autoops.AddOpsEventRateClauseCommand}
 */
proto.bucketeer.autoops.UpdateAutoOpsRuleRequest.prototype.addAddOpsEventRateClauseCommands = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.bucketeer.autoops.AddOpsEventRateClauseCommand, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bucketeer.autoops.UpdateAutoOpsRuleRequest} returns this
 */
proto.bucketeer.autoops.UpdateAutoOpsRuleRequest.prototype.clearAddOpsEventRateClauseCommandsList = function() {
  return this.setAddOpsEventRateClauseCommandsList([]);
};


/**
 * repeated ChangeOpsEventRateClauseCommand change_ops_event_rate_clause_commands = 5;
 * @return {!Array<!proto.bucketeer.autoops.ChangeOpsEventRateClauseCommand>}
 */
proto.bucketeer.autoops.UpdateAutoOpsRuleRequest.prototype.getChangeOpsEventRateClauseCommandsList = function() {
  return /** @type{!Array<!proto.bucketeer.autoops.ChangeOpsEventRateClauseCommand>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_autoops_command_pb.ChangeOpsEventRateClauseCommand, 5));
};


/**
 * @param {!Array<!proto.bucketeer.autoops.ChangeOpsEventRateClauseCommand>} value
 * @return {!proto.bucketeer.autoops.UpdateAutoOpsRuleRequest} returns this
*/
proto.bucketeer.autoops.UpdateAutoOpsRuleRequest.prototype.setChangeOpsEventRateClauseCommandsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.bucketeer.autoops.ChangeOpsEventRateClauseCommand=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bucketeer.autoops.ChangeOpsEventRateClauseCommand}
 */
proto.bucketeer.autoops.UpdateAutoOpsRuleRequest.prototype.addChangeOpsEventRateClauseCommands = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.bucketeer.autoops.ChangeOpsEventRateClauseCommand, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bucketeer.autoops.UpdateAutoOpsRuleRequest} returns this
 */
proto.bucketeer.autoops.UpdateAutoOpsRuleRequest.prototype.clearChangeOpsEventRateClauseCommandsList = function() {
  return this.setChangeOpsEventRateClauseCommandsList([]);
};


/**
 * repeated DeleteClauseCommand delete_clause_commands = 6;
 * @return {!Array<!proto.bucketeer.autoops.DeleteClauseCommand>}
 */
proto.bucketeer.autoops.UpdateAutoOpsRuleRequest.prototype.getDeleteClauseCommandsList = function() {
  return /** @type{!Array<!proto.bucketeer.autoops.DeleteClauseCommand>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_autoops_command_pb.DeleteClauseCommand, 6));
};


/**
 * @param {!Array<!proto.bucketeer.autoops.DeleteClauseCommand>} value
 * @return {!proto.bucketeer.autoops.UpdateAutoOpsRuleRequest} returns this
*/
proto.bucketeer.autoops.UpdateAutoOpsRuleRequest.prototype.setDeleteClauseCommandsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.bucketeer.autoops.DeleteClauseCommand=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bucketeer.autoops.DeleteClauseCommand}
 */
proto.bucketeer.autoops.UpdateAutoOpsRuleRequest.prototype.addDeleteClauseCommands = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.bucketeer.autoops.DeleteClauseCommand, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bucketeer.autoops.UpdateAutoOpsRuleRequest} returns this
 */
proto.bucketeer.autoops.UpdateAutoOpsRuleRequest.prototype.clearDeleteClauseCommandsList = function() {
  return this.setDeleteClauseCommandsList([]);
};


/**
 * repeated AddDatetimeClauseCommand add_datetime_clause_commands = 7;
 * @return {!Array<!proto.bucketeer.autoops.AddDatetimeClauseCommand>}
 */
proto.bucketeer.autoops.UpdateAutoOpsRuleRequest.prototype.getAddDatetimeClauseCommandsList = function() {
  return /** @type{!Array<!proto.bucketeer.autoops.AddDatetimeClauseCommand>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_autoops_command_pb.AddDatetimeClauseCommand, 7));
};


/**
 * @param {!Array<!proto.bucketeer.autoops.AddDatetimeClauseCommand>} value
 * @return {!proto.bucketeer.autoops.UpdateAutoOpsRuleRequest} returns this
*/
proto.bucketeer.autoops.UpdateAutoOpsRuleRequest.prototype.setAddDatetimeClauseCommandsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.bucketeer.autoops.AddDatetimeClauseCommand=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bucketeer.autoops.AddDatetimeClauseCommand}
 */
proto.bucketeer.autoops.UpdateAutoOpsRuleRequest.prototype.addAddDatetimeClauseCommands = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.bucketeer.autoops.AddDatetimeClauseCommand, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bucketeer.autoops.UpdateAutoOpsRuleRequest} returns this
 */
proto.bucketeer.autoops.UpdateAutoOpsRuleRequest.prototype.clearAddDatetimeClauseCommandsList = function() {
  return this.setAddDatetimeClauseCommandsList([]);
};


/**
 * repeated ChangeDatetimeClauseCommand change_datetime_clause_commands = 8;
 * @return {!Array<!proto.bucketeer.autoops.ChangeDatetimeClauseCommand>}
 */
proto.bucketeer.autoops.UpdateAutoOpsRuleRequest.prototype.getChangeDatetimeClauseCommandsList = function() {
  return /** @type{!Array<!proto.bucketeer.autoops.ChangeDatetimeClauseCommand>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_autoops_command_pb.ChangeDatetimeClauseCommand, 8));
};


/**
 * @param {!Array<!proto.bucketeer.autoops.ChangeDatetimeClauseCommand>} value
 * @return {!proto.bucketeer.autoops.UpdateAutoOpsRuleRequest} returns this
*/
proto.bucketeer.autoops.UpdateAutoOpsRuleRequest.prototype.setChangeDatetimeClauseCommandsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.bucketeer.autoops.ChangeDatetimeClauseCommand=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bucketeer.autoops.ChangeDatetimeClauseCommand}
 */
proto.bucketeer.autoops.UpdateAutoOpsRuleRequest.prototype.addChangeDatetimeClauseCommands = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.bucketeer.autoops.ChangeDatetimeClauseCommand, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bucketeer.autoops.UpdateAutoOpsRuleRequest} returns this
 */
proto.bucketeer.autoops.UpdateAutoOpsRuleRequest.prototype.clearChangeDatetimeClauseCommandsList = function() {
  return this.setChangeDatetimeClauseCommandsList([]);
};


/**
 * repeated AddWebhookClauseCommand add_webhook_clause_commands = 9;
 * @return {!Array<!proto.bucketeer.autoops.AddWebhookClauseCommand>}
 */
proto.bucketeer.autoops.UpdateAutoOpsRuleRequest.prototype.getAddWebhookClauseCommandsList = function() {
  return /** @type{!Array<!proto.bucketeer.autoops.AddWebhookClauseCommand>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_autoops_command_pb.AddWebhookClauseCommand, 9));
};


/**
 * @param {!Array<!proto.bucketeer.autoops.AddWebhookClauseCommand>} value
 * @return {!proto.bucketeer.autoops.UpdateAutoOpsRuleRequest} returns this
*/
proto.bucketeer.autoops.UpdateAutoOpsRuleRequest.prototype.setAddWebhookClauseCommandsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.bucketeer.autoops.AddWebhookClauseCommand=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bucketeer.autoops.AddWebhookClauseCommand}
 */
proto.bucketeer.autoops.UpdateAutoOpsRuleRequest.prototype.addAddWebhookClauseCommands = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.bucketeer.autoops.AddWebhookClauseCommand, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bucketeer.autoops.UpdateAutoOpsRuleRequest} returns this
 */
proto.bucketeer.autoops.UpdateAutoOpsRuleRequest.prototype.clearAddWebhookClauseCommandsList = function() {
  return this.setAddWebhookClauseCommandsList([]);
};


/**
 * repeated ChangeWebhookClauseCommand change_webhook_clause_commands = 10;
 * @return {!Array<!proto.bucketeer.autoops.ChangeWebhookClauseCommand>}
 */
proto.bucketeer.autoops.UpdateAutoOpsRuleRequest.prototype.getChangeWebhookClauseCommandsList = function() {
  return /** @type{!Array<!proto.bucketeer.autoops.ChangeWebhookClauseCommand>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_autoops_command_pb.ChangeWebhookClauseCommand, 10));
};


/**
 * @param {!Array<!proto.bucketeer.autoops.ChangeWebhookClauseCommand>} value
 * @return {!proto.bucketeer.autoops.UpdateAutoOpsRuleRequest} returns this
*/
proto.bucketeer.autoops.UpdateAutoOpsRuleRequest.prototype.setChangeWebhookClauseCommandsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.bucketeer.autoops.ChangeWebhookClauseCommand=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bucketeer.autoops.ChangeWebhookClauseCommand}
 */
proto.bucketeer.autoops.UpdateAutoOpsRuleRequest.prototype.addChangeWebhookClauseCommands = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.bucketeer.autoops.ChangeWebhookClauseCommand, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bucketeer.autoops.UpdateAutoOpsRuleRequest} returns this
 */
proto.bucketeer.autoops.UpdateAutoOpsRuleRequest.prototype.clearChangeWebhookClauseCommandsList = function() {
  return this.setChangeWebhookClauseCommandsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bucketeer.autoops.UpdateAutoOpsRuleResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.bucketeer.autoops.UpdateAutoOpsRuleResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bucketeer.autoops.UpdateAutoOpsRuleResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.UpdateAutoOpsRuleResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bucketeer.autoops.UpdateAutoOpsRuleResponse}
 */
proto.bucketeer.autoops.UpdateAutoOpsRuleResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bucketeer.autoops.UpdateAutoOpsRuleResponse;
  return proto.bucketeer.autoops.UpdateAutoOpsRuleResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bucketeer.autoops.UpdateAutoOpsRuleResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bucketeer.autoops.UpdateAutoOpsRuleResponse}
 */
proto.bucketeer.autoops.UpdateAutoOpsRuleResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bucketeer.autoops.UpdateAutoOpsRuleResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bucketeer.autoops.UpdateAutoOpsRuleResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bucketeer.autoops.UpdateAutoOpsRuleResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.UpdateAutoOpsRuleResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bucketeer.autoops.ExecuteAutoOpsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bucketeer.autoops.ExecuteAutoOpsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bucketeer.autoops.ExecuteAutoOpsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.ExecuteAutoOpsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    environmentNamespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    id: jspb.Message.getFieldWithDefault(msg, 2, ""),
    changeAutoOpsRuleTriggeredAtCommand: (f = msg.getChangeAutoOpsRuleTriggeredAtCommand()) && proto_autoops_command_pb.ChangeAutoOpsRuleTriggeredAtCommand.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bucketeer.autoops.ExecuteAutoOpsRequest}
 */
proto.bucketeer.autoops.ExecuteAutoOpsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bucketeer.autoops.ExecuteAutoOpsRequest;
  return proto.bucketeer.autoops.ExecuteAutoOpsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bucketeer.autoops.ExecuteAutoOpsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bucketeer.autoops.ExecuteAutoOpsRequest}
 */
proto.bucketeer.autoops.ExecuteAutoOpsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEnvironmentNamespace(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 3:
      var value = new proto_autoops_command_pb.ChangeAutoOpsRuleTriggeredAtCommand;
      reader.readMessage(value,proto_autoops_command_pb.ChangeAutoOpsRuleTriggeredAtCommand.deserializeBinaryFromReader);
      msg.setChangeAutoOpsRuleTriggeredAtCommand(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bucketeer.autoops.ExecuteAutoOpsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bucketeer.autoops.ExecuteAutoOpsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bucketeer.autoops.ExecuteAutoOpsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.ExecuteAutoOpsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnvironmentNamespace();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getChangeAutoOpsRuleTriggeredAtCommand();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto_autoops_command_pb.ChangeAutoOpsRuleTriggeredAtCommand.serializeBinaryToWriter
    );
  }
};


/**
 * optional string environment_namespace = 1;
 * @return {string}
 */
proto.bucketeer.autoops.ExecuteAutoOpsRequest.prototype.getEnvironmentNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bucketeer.autoops.ExecuteAutoOpsRequest} returns this
 */
proto.bucketeer.autoops.ExecuteAutoOpsRequest.prototype.setEnvironmentNamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string id = 2;
 * @return {string}
 */
proto.bucketeer.autoops.ExecuteAutoOpsRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bucketeer.autoops.ExecuteAutoOpsRequest} returns this
 */
proto.bucketeer.autoops.ExecuteAutoOpsRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional ChangeAutoOpsRuleTriggeredAtCommand change_auto_ops_rule_triggered_at_command = 3;
 * @return {?proto.bucketeer.autoops.ChangeAutoOpsRuleTriggeredAtCommand}
 */
proto.bucketeer.autoops.ExecuteAutoOpsRequest.prototype.getChangeAutoOpsRuleTriggeredAtCommand = function() {
  return /** @type{?proto.bucketeer.autoops.ChangeAutoOpsRuleTriggeredAtCommand} */ (
    jspb.Message.getWrapperField(this, proto_autoops_command_pb.ChangeAutoOpsRuleTriggeredAtCommand, 3));
};


/**
 * @param {?proto.bucketeer.autoops.ChangeAutoOpsRuleTriggeredAtCommand|undefined} value
 * @return {!proto.bucketeer.autoops.ExecuteAutoOpsRequest} returns this
*/
proto.bucketeer.autoops.ExecuteAutoOpsRequest.prototype.setChangeAutoOpsRuleTriggeredAtCommand = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bucketeer.autoops.ExecuteAutoOpsRequest} returns this
 */
proto.bucketeer.autoops.ExecuteAutoOpsRequest.prototype.clearChangeAutoOpsRuleTriggeredAtCommand = function() {
  return this.setChangeAutoOpsRuleTriggeredAtCommand(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bucketeer.autoops.ExecuteAutoOpsRequest.prototype.hasChangeAutoOpsRuleTriggeredAtCommand = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bucketeer.autoops.ExecuteAutoOpsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.bucketeer.autoops.ExecuteAutoOpsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bucketeer.autoops.ExecuteAutoOpsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.ExecuteAutoOpsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    alreadyTriggered: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bucketeer.autoops.ExecuteAutoOpsResponse}
 */
proto.bucketeer.autoops.ExecuteAutoOpsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bucketeer.autoops.ExecuteAutoOpsResponse;
  return proto.bucketeer.autoops.ExecuteAutoOpsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bucketeer.autoops.ExecuteAutoOpsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bucketeer.autoops.ExecuteAutoOpsResponse}
 */
proto.bucketeer.autoops.ExecuteAutoOpsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAlreadyTriggered(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bucketeer.autoops.ExecuteAutoOpsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bucketeer.autoops.ExecuteAutoOpsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bucketeer.autoops.ExecuteAutoOpsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.ExecuteAutoOpsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAlreadyTriggered();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool already_triggered = 1;
 * @return {boolean}
 */
proto.bucketeer.autoops.ExecuteAutoOpsResponse.prototype.getAlreadyTriggered = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bucketeer.autoops.ExecuteAutoOpsResponse} returns this
 */
proto.bucketeer.autoops.ExecuteAutoOpsResponse.prototype.setAlreadyTriggered = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bucketeer.autoops.ListOpsCountsRequest.repeatedFields_ = [4,5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bucketeer.autoops.ListOpsCountsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bucketeer.autoops.ListOpsCountsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bucketeer.autoops.ListOpsCountsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.ListOpsCountsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    environmentNamespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pageSize: jspb.Message.getFieldWithDefault(msg, 2, 0),
    cursor: jspb.Message.getFieldWithDefault(msg, 3, ""),
    autoOpsRuleIdsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    featureIdsList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bucketeer.autoops.ListOpsCountsRequest}
 */
proto.bucketeer.autoops.ListOpsCountsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bucketeer.autoops.ListOpsCountsRequest;
  return proto.bucketeer.autoops.ListOpsCountsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bucketeer.autoops.ListOpsCountsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bucketeer.autoops.ListOpsCountsRequest}
 */
proto.bucketeer.autoops.ListOpsCountsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEnvironmentNamespace(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPageSize(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCursor(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addAutoOpsRuleIds(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addFeatureIds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bucketeer.autoops.ListOpsCountsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bucketeer.autoops.ListOpsCountsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bucketeer.autoops.ListOpsCountsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.ListOpsCountsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnvironmentNamespace();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getCursor();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAutoOpsRuleIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getFeatureIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
};


/**
 * optional string environment_namespace = 1;
 * @return {string}
 */
proto.bucketeer.autoops.ListOpsCountsRequest.prototype.getEnvironmentNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bucketeer.autoops.ListOpsCountsRequest} returns this
 */
proto.bucketeer.autoops.ListOpsCountsRequest.prototype.setEnvironmentNamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 page_size = 2;
 * @return {number}
 */
proto.bucketeer.autoops.ListOpsCountsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bucketeer.autoops.ListOpsCountsRequest} returns this
 */
proto.bucketeer.autoops.ListOpsCountsRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string cursor = 3;
 * @return {string}
 */
proto.bucketeer.autoops.ListOpsCountsRequest.prototype.getCursor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.bucketeer.autoops.ListOpsCountsRequest} returns this
 */
proto.bucketeer.autoops.ListOpsCountsRequest.prototype.setCursor = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated string auto_ops_rule_ids = 4;
 * @return {!Array<string>}
 */
proto.bucketeer.autoops.ListOpsCountsRequest.prototype.getAutoOpsRuleIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.bucketeer.autoops.ListOpsCountsRequest} returns this
 */
proto.bucketeer.autoops.ListOpsCountsRequest.prototype.setAutoOpsRuleIdsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.bucketeer.autoops.ListOpsCountsRequest} returns this
 */
proto.bucketeer.autoops.ListOpsCountsRequest.prototype.addAutoOpsRuleIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bucketeer.autoops.ListOpsCountsRequest} returns this
 */
proto.bucketeer.autoops.ListOpsCountsRequest.prototype.clearAutoOpsRuleIdsList = function() {
  return this.setAutoOpsRuleIdsList([]);
};


/**
 * repeated string feature_ids = 5;
 * @return {!Array<string>}
 */
proto.bucketeer.autoops.ListOpsCountsRequest.prototype.getFeatureIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.bucketeer.autoops.ListOpsCountsRequest} returns this
 */
proto.bucketeer.autoops.ListOpsCountsRequest.prototype.setFeatureIdsList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.bucketeer.autoops.ListOpsCountsRequest} returns this
 */
proto.bucketeer.autoops.ListOpsCountsRequest.prototype.addFeatureIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bucketeer.autoops.ListOpsCountsRequest} returns this
 */
proto.bucketeer.autoops.ListOpsCountsRequest.prototype.clearFeatureIdsList = function() {
  return this.setFeatureIdsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bucketeer.autoops.ListOpsCountsResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bucketeer.autoops.ListOpsCountsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.bucketeer.autoops.ListOpsCountsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bucketeer.autoops.ListOpsCountsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.ListOpsCountsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    cursor: jspb.Message.getFieldWithDefault(msg, 1, ""),
    opsCountsList: jspb.Message.toObjectList(msg.getOpsCountsList(),
    proto_autoops_ops_count_pb.OpsCount.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bucketeer.autoops.ListOpsCountsResponse}
 */
proto.bucketeer.autoops.ListOpsCountsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bucketeer.autoops.ListOpsCountsResponse;
  return proto.bucketeer.autoops.ListOpsCountsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bucketeer.autoops.ListOpsCountsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bucketeer.autoops.ListOpsCountsResponse}
 */
proto.bucketeer.autoops.ListOpsCountsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCursor(value);
      break;
    case 2:
      var value = new proto_autoops_ops_count_pb.OpsCount;
      reader.readMessage(value,proto_autoops_ops_count_pb.OpsCount.deserializeBinaryFromReader);
      msg.addOpsCounts(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bucketeer.autoops.ListOpsCountsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bucketeer.autoops.ListOpsCountsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bucketeer.autoops.ListOpsCountsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.ListOpsCountsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCursor();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOpsCountsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto_autoops_ops_count_pb.OpsCount.serializeBinaryToWriter
    );
  }
};


/**
 * optional string cursor = 1;
 * @return {string}
 */
proto.bucketeer.autoops.ListOpsCountsResponse.prototype.getCursor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bucketeer.autoops.ListOpsCountsResponse} returns this
 */
proto.bucketeer.autoops.ListOpsCountsResponse.prototype.setCursor = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated OpsCount ops_counts = 2;
 * @return {!Array<!proto.bucketeer.autoops.OpsCount>}
 */
proto.bucketeer.autoops.ListOpsCountsResponse.prototype.getOpsCountsList = function() {
  return /** @type{!Array<!proto.bucketeer.autoops.OpsCount>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_autoops_ops_count_pb.OpsCount, 2));
};


/**
 * @param {!Array<!proto.bucketeer.autoops.OpsCount>} value
 * @return {!proto.bucketeer.autoops.ListOpsCountsResponse} returns this
*/
proto.bucketeer.autoops.ListOpsCountsResponse.prototype.setOpsCountsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.bucketeer.autoops.OpsCount=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bucketeer.autoops.OpsCount}
 */
proto.bucketeer.autoops.ListOpsCountsResponse.prototype.addOpsCounts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.bucketeer.autoops.OpsCount, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bucketeer.autoops.ListOpsCountsResponse} returns this
 */
proto.bucketeer.autoops.ListOpsCountsResponse.prototype.clearOpsCountsList = function() {
  return this.setOpsCountsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bucketeer.autoops.CreateWebhookRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bucketeer.autoops.CreateWebhookRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bucketeer.autoops.CreateWebhookRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.CreateWebhookRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    environmentNamespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    command: (f = msg.getCommand()) && proto_autoops_command_pb.CreateWebhookCommand.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bucketeer.autoops.CreateWebhookRequest}
 */
proto.bucketeer.autoops.CreateWebhookRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bucketeer.autoops.CreateWebhookRequest;
  return proto.bucketeer.autoops.CreateWebhookRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bucketeer.autoops.CreateWebhookRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bucketeer.autoops.CreateWebhookRequest}
 */
proto.bucketeer.autoops.CreateWebhookRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEnvironmentNamespace(value);
      break;
    case 2:
      var value = new proto_autoops_command_pb.CreateWebhookCommand;
      reader.readMessage(value,proto_autoops_command_pb.CreateWebhookCommand.deserializeBinaryFromReader);
      msg.setCommand(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bucketeer.autoops.CreateWebhookRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bucketeer.autoops.CreateWebhookRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bucketeer.autoops.CreateWebhookRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.CreateWebhookRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnvironmentNamespace();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCommand();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto_autoops_command_pb.CreateWebhookCommand.serializeBinaryToWriter
    );
  }
};


/**
 * optional string environment_namespace = 1;
 * @return {string}
 */
proto.bucketeer.autoops.CreateWebhookRequest.prototype.getEnvironmentNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bucketeer.autoops.CreateWebhookRequest} returns this
 */
proto.bucketeer.autoops.CreateWebhookRequest.prototype.setEnvironmentNamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional CreateWebhookCommand command = 2;
 * @return {?proto.bucketeer.autoops.CreateWebhookCommand}
 */
proto.bucketeer.autoops.CreateWebhookRequest.prototype.getCommand = function() {
  return /** @type{?proto.bucketeer.autoops.CreateWebhookCommand} */ (
    jspb.Message.getWrapperField(this, proto_autoops_command_pb.CreateWebhookCommand, 2));
};


/**
 * @param {?proto.bucketeer.autoops.CreateWebhookCommand|undefined} value
 * @return {!proto.bucketeer.autoops.CreateWebhookRequest} returns this
*/
proto.bucketeer.autoops.CreateWebhookRequest.prototype.setCommand = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bucketeer.autoops.CreateWebhookRequest} returns this
 */
proto.bucketeer.autoops.CreateWebhookRequest.prototype.clearCommand = function() {
  return this.setCommand(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bucketeer.autoops.CreateWebhookRequest.prototype.hasCommand = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bucketeer.autoops.CreateWebhookResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.bucketeer.autoops.CreateWebhookResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bucketeer.autoops.CreateWebhookResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.CreateWebhookResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    webhook: (f = msg.getWebhook()) && proto_autoops_webhook_pb.Webhook.toObject(includeInstance, f),
    url: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bucketeer.autoops.CreateWebhookResponse}
 */
proto.bucketeer.autoops.CreateWebhookResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bucketeer.autoops.CreateWebhookResponse;
  return proto.bucketeer.autoops.CreateWebhookResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bucketeer.autoops.CreateWebhookResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bucketeer.autoops.CreateWebhookResponse}
 */
proto.bucketeer.autoops.CreateWebhookResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_autoops_webhook_pb.Webhook;
      reader.readMessage(value,proto_autoops_webhook_pb.Webhook.deserializeBinaryFromReader);
      msg.setWebhook(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bucketeer.autoops.CreateWebhookResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bucketeer.autoops.CreateWebhookResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bucketeer.autoops.CreateWebhookResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.CreateWebhookResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWebhook();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_autoops_webhook_pb.Webhook.serializeBinaryToWriter
    );
  }
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional Webhook webhook = 1;
 * @return {?proto.bucketeer.autoops.Webhook}
 */
proto.bucketeer.autoops.CreateWebhookResponse.prototype.getWebhook = function() {
  return /** @type{?proto.bucketeer.autoops.Webhook} */ (
    jspb.Message.getWrapperField(this, proto_autoops_webhook_pb.Webhook, 1));
};


/**
 * @param {?proto.bucketeer.autoops.Webhook|undefined} value
 * @return {!proto.bucketeer.autoops.CreateWebhookResponse} returns this
*/
proto.bucketeer.autoops.CreateWebhookResponse.prototype.setWebhook = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bucketeer.autoops.CreateWebhookResponse} returns this
 */
proto.bucketeer.autoops.CreateWebhookResponse.prototype.clearWebhook = function() {
  return this.setWebhook(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bucketeer.autoops.CreateWebhookResponse.prototype.hasWebhook = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string url = 2;
 * @return {string}
 */
proto.bucketeer.autoops.CreateWebhookResponse.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bucketeer.autoops.CreateWebhookResponse} returns this
 */
proto.bucketeer.autoops.CreateWebhookResponse.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bucketeer.autoops.GetWebhookRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bucketeer.autoops.GetWebhookRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bucketeer.autoops.GetWebhookRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.GetWebhookRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    environmentNamespace: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bucketeer.autoops.GetWebhookRequest}
 */
proto.bucketeer.autoops.GetWebhookRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bucketeer.autoops.GetWebhookRequest;
  return proto.bucketeer.autoops.GetWebhookRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bucketeer.autoops.GetWebhookRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bucketeer.autoops.GetWebhookRequest}
 */
proto.bucketeer.autoops.GetWebhookRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEnvironmentNamespace(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bucketeer.autoops.GetWebhookRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bucketeer.autoops.GetWebhookRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bucketeer.autoops.GetWebhookRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.GetWebhookRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEnvironmentNamespace();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.bucketeer.autoops.GetWebhookRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bucketeer.autoops.GetWebhookRequest} returns this
 */
proto.bucketeer.autoops.GetWebhookRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string environment_namespace = 2;
 * @return {string}
 */
proto.bucketeer.autoops.GetWebhookRequest.prototype.getEnvironmentNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bucketeer.autoops.GetWebhookRequest} returns this
 */
proto.bucketeer.autoops.GetWebhookRequest.prototype.setEnvironmentNamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bucketeer.autoops.GetWebhookResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.bucketeer.autoops.GetWebhookResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bucketeer.autoops.GetWebhookResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.GetWebhookResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    webhook: (f = msg.getWebhook()) && proto_autoops_webhook_pb.Webhook.toObject(includeInstance, f),
    url: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bucketeer.autoops.GetWebhookResponse}
 */
proto.bucketeer.autoops.GetWebhookResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bucketeer.autoops.GetWebhookResponse;
  return proto.bucketeer.autoops.GetWebhookResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bucketeer.autoops.GetWebhookResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bucketeer.autoops.GetWebhookResponse}
 */
proto.bucketeer.autoops.GetWebhookResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_autoops_webhook_pb.Webhook;
      reader.readMessage(value,proto_autoops_webhook_pb.Webhook.deserializeBinaryFromReader);
      msg.setWebhook(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bucketeer.autoops.GetWebhookResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bucketeer.autoops.GetWebhookResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bucketeer.autoops.GetWebhookResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.GetWebhookResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWebhook();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_autoops_webhook_pb.Webhook.serializeBinaryToWriter
    );
  }
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional Webhook webhook = 1;
 * @return {?proto.bucketeer.autoops.Webhook}
 */
proto.bucketeer.autoops.GetWebhookResponse.prototype.getWebhook = function() {
  return /** @type{?proto.bucketeer.autoops.Webhook} */ (
    jspb.Message.getWrapperField(this, proto_autoops_webhook_pb.Webhook, 1));
};


/**
 * @param {?proto.bucketeer.autoops.Webhook|undefined} value
 * @return {!proto.bucketeer.autoops.GetWebhookResponse} returns this
*/
proto.bucketeer.autoops.GetWebhookResponse.prototype.setWebhook = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bucketeer.autoops.GetWebhookResponse} returns this
 */
proto.bucketeer.autoops.GetWebhookResponse.prototype.clearWebhook = function() {
  return this.setWebhook(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bucketeer.autoops.GetWebhookResponse.prototype.hasWebhook = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string url = 2;
 * @return {string}
 */
proto.bucketeer.autoops.GetWebhookResponse.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bucketeer.autoops.GetWebhookResponse} returns this
 */
proto.bucketeer.autoops.GetWebhookResponse.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bucketeer.autoops.UpdateWebhookRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bucketeer.autoops.UpdateWebhookRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bucketeer.autoops.UpdateWebhookRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.UpdateWebhookRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    environmentNamespace: jspb.Message.getFieldWithDefault(msg, 2, ""),
    changewebhooknamecommand: (f = msg.getChangewebhooknamecommand()) && proto_autoops_command_pb.ChangeWebhookNameCommand.toObject(includeInstance, f),
    changewebhookdescriptioncommand: (f = msg.getChangewebhookdescriptioncommand()) && proto_autoops_command_pb.ChangeWebhookDescriptionCommand.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bucketeer.autoops.UpdateWebhookRequest}
 */
proto.bucketeer.autoops.UpdateWebhookRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bucketeer.autoops.UpdateWebhookRequest;
  return proto.bucketeer.autoops.UpdateWebhookRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bucketeer.autoops.UpdateWebhookRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bucketeer.autoops.UpdateWebhookRequest}
 */
proto.bucketeer.autoops.UpdateWebhookRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEnvironmentNamespace(value);
      break;
    case 3:
      var value = new proto_autoops_command_pb.ChangeWebhookNameCommand;
      reader.readMessage(value,proto_autoops_command_pb.ChangeWebhookNameCommand.deserializeBinaryFromReader);
      msg.setChangewebhooknamecommand(value);
      break;
    case 4:
      var value = new proto_autoops_command_pb.ChangeWebhookDescriptionCommand;
      reader.readMessage(value,proto_autoops_command_pb.ChangeWebhookDescriptionCommand.deserializeBinaryFromReader);
      msg.setChangewebhookdescriptioncommand(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bucketeer.autoops.UpdateWebhookRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bucketeer.autoops.UpdateWebhookRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bucketeer.autoops.UpdateWebhookRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.UpdateWebhookRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEnvironmentNamespace();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getChangewebhooknamecommand();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto_autoops_command_pb.ChangeWebhookNameCommand.serializeBinaryToWriter
    );
  }
  f = message.getChangewebhookdescriptioncommand();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto_autoops_command_pb.ChangeWebhookDescriptionCommand.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.bucketeer.autoops.UpdateWebhookRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bucketeer.autoops.UpdateWebhookRequest} returns this
 */
proto.bucketeer.autoops.UpdateWebhookRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string environment_namespace = 2;
 * @return {string}
 */
proto.bucketeer.autoops.UpdateWebhookRequest.prototype.getEnvironmentNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bucketeer.autoops.UpdateWebhookRequest} returns this
 */
proto.bucketeer.autoops.UpdateWebhookRequest.prototype.setEnvironmentNamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional ChangeWebhookNameCommand changeWebhookNameCommand = 3;
 * @return {?proto.bucketeer.autoops.ChangeWebhookNameCommand}
 */
proto.bucketeer.autoops.UpdateWebhookRequest.prototype.getChangewebhooknamecommand = function() {
  return /** @type{?proto.bucketeer.autoops.ChangeWebhookNameCommand} */ (
    jspb.Message.getWrapperField(this, proto_autoops_command_pb.ChangeWebhookNameCommand, 3));
};


/**
 * @param {?proto.bucketeer.autoops.ChangeWebhookNameCommand|undefined} value
 * @return {!proto.bucketeer.autoops.UpdateWebhookRequest} returns this
*/
proto.bucketeer.autoops.UpdateWebhookRequest.prototype.setChangewebhooknamecommand = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bucketeer.autoops.UpdateWebhookRequest} returns this
 */
proto.bucketeer.autoops.UpdateWebhookRequest.prototype.clearChangewebhooknamecommand = function() {
  return this.setChangewebhooknamecommand(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bucketeer.autoops.UpdateWebhookRequest.prototype.hasChangewebhooknamecommand = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ChangeWebhookDescriptionCommand changeWebhookDescriptionCommand = 4;
 * @return {?proto.bucketeer.autoops.ChangeWebhookDescriptionCommand}
 */
proto.bucketeer.autoops.UpdateWebhookRequest.prototype.getChangewebhookdescriptioncommand = function() {
  return /** @type{?proto.bucketeer.autoops.ChangeWebhookDescriptionCommand} */ (
    jspb.Message.getWrapperField(this, proto_autoops_command_pb.ChangeWebhookDescriptionCommand, 4));
};


/**
 * @param {?proto.bucketeer.autoops.ChangeWebhookDescriptionCommand|undefined} value
 * @return {!proto.bucketeer.autoops.UpdateWebhookRequest} returns this
*/
proto.bucketeer.autoops.UpdateWebhookRequest.prototype.setChangewebhookdescriptioncommand = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bucketeer.autoops.UpdateWebhookRequest} returns this
 */
proto.bucketeer.autoops.UpdateWebhookRequest.prototype.clearChangewebhookdescriptioncommand = function() {
  return this.setChangewebhookdescriptioncommand(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bucketeer.autoops.UpdateWebhookRequest.prototype.hasChangewebhookdescriptioncommand = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bucketeer.autoops.UpdateWebhookResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.bucketeer.autoops.UpdateWebhookResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bucketeer.autoops.UpdateWebhookResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.UpdateWebhookResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bucketeer.autoops.UpdateWebhookResponse}
 */
proto.bucketeer.autoops.UpdateWebhookResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bucketeer.autoops.UpdateWebhookResponse;
  return proto.bucketeer.autoops.UpdateWebhookResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bucketeer.autoops.UpdateWebhookResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bucketeer.autoops.UpdateWebhookResponse}
 */
proto.bucketeer.autoops.UpdateWebhookResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bucketeer.autoops.UpdateWebhookResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bucketeer.autoops.UpdateWebhookResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bucketeer.autoops.UpdateWebhookResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.UpdateWebhookResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bucketeer.autoops.DeleteWebhookRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bucketeer.autoops.DeleteWebhookRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bucketeer.autoops.DeleteWebhookRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.DeleteWebhookRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    environmentNamespace: jspb.Message.getFieldWithDefault(msg, 2, ""),
    command: (f = msg.getCommand()) && proto_autoops_command_pb.DeleteWebhookCommand.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bucketeer.autoops.DeleteWebhookRequest}
 */
proto.bucketeer.autoops.DeleteWebhookRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bucketeer.autoops.DeleteWebhookRequest;
  return proto.bucketeer.autoops.DeleteWebhookRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bucketeer.autoops.DeleteWebhookRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bucketeer.autoops.DeleteWebhookRequest}
 */
proto.bucketeer.autoops.DeleteWebhookRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEnvironmentNamespace(value);
      break;
    case 3:
      var value = new proto_autoops_command_pb.DeleteWebhookCommand;
      reader.readMessage(value,proto_autoops_command_pb.DeleteWebhookCommand.deserializeBinaryFromReader);
      msg.setCommand(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bucketeer.autoops.DeleteWebhookRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bucketeer.autoops.DeleteWebhookRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bucketeer.autoops.DeleteWebhookRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.DeleteWebhookRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEnvironmentNamespace();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCommand();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto_autoops_command_pb.DeleteWebhookCommand.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.bucketeer.autoops.DeleteWebhookRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bucketeer.autoops.DeleteWebhookRequest} returns this
 */
proto.bucketeer.autoops.DeleteWebhookRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string environment_namespace = 2;
 * @return {string}
 */
proto.bucketeer.autoops.DeleteWebhookRequest.prototype.getEnvironmentNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bucketeer.autoops.DeleteWebhookRequest} returns this
 */
proto.bucketeer.autoops.DeleteWebhookRequest.prototype.setEnvironmentNamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional DeleteWebhookCommand command = 3;
 * @return {?proto.bucketeer.autoops.DeleteWebhookCommand}
 */
proto.bucketeer.autoops.DeleteWebhookRequest.prototype.getCommand = function() {
  return /** @type{?proto.bucketeer.autoops.DeleteWebhookCommand} */ (
    jspb.Message.getWrapperField(this, proto_autoops_command_pb.DeleteWebhookCommand, 3));
};


/**
 * @param {?proto.bucketeer.autoops.DeleteWebhookCommand|undefined} value
 * @return {!proto.bucketeer.autoops.DeleteWebhookRequest} returns this
*/
proto.bucketeer.autoops.DeleteWebhookRequest.prototype.setCommand = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bucketeer.autoops.DeleteWebhookRequest} returns this
 */
proto.bucketeer.autoops.DeleteWebhookRequest.prototype.clearCommand = function() {
  return this.setCommand(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bucketeer.autoops.DeleteWebhookRequest.prototype.hasCommand = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bucketeer.autoops.DeleteWebhookResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.bucketeer.autoops.DeleteWebhookResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bucketeer.autoops.DeleteWebhookResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.DeleteWebhookResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bucketeer.autoops.DeleteWebhookResponse}
 */
proto.bucketeer.autoops.DeleteWebhookResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bucketeer.autoops.DeleteWebhookResponse;
  return proto.bucketeer.autoops.DeleteWebhookResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bucketeer.autoops.DeleteWebhookResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bucketeer.autoops.DeleteWebhookResponse}
 */
proto.bucketeer.autoops.DeleteWebhookResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bucketeer.autoops.DeleteWebhookResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bucketeer.autoops.DeleteWebhookResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bucketeer.autoops.DeleteWebhookResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.DeleteWebhookResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bucketeer.autoops.ListWebhooksRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bucketeer.autoops.ListWebhooksRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bucketeer.autoops.ListWebhooksRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.ListWebhooksRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    environmentNamespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pageSize: jspb.Message.getFieldWithDefault(msg, 2, 0),
    cursor: jspb.Message.getFieldWithDefault(msg, 3, ""),
    orderBy: jspb.Message.getFieldWithDefault(msg, 4, 0),
    orderDirection: jspb.Message.getFieldWithDefault(msg, 5, 0),
    searchKeyword: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bucketeer.autoops.ListWebhooksRequest}
 */
proto.bucketeer.autoops.ListWebhooksRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bucketeer.autoops.ListWebhooksRequest;
  return proto.bucketeer.autoops.ListWebhooksRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bucketeer.autoops.ListWebhooksRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bucketeer.autoops.ListWebhooksRequest}
 */
proto.bucketeer.autoops.ListWebhooksRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEnvironmentNamespace(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPageSize(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCursor(value);
      break;
    case 4:
      var value = /** @type {!proto.bucketeer.autoops.ListWebhooksRequest.OrderBy} */ (reader.readEnum());
      msg.setOrderBy(value);
      break;
    case 5:
      var value = /** @type {!proto.bucketeer.autoops.ListWebhooksRequest.OrderDirection} */ (reader.readEnum());
      msg.setOrderDirection(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setSearchKeyword(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bucketeer.autoops.ListWebhooksRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bucketeer.autoops.ListWebhooksRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bucketeer.autoops.ListWebhooksRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.ListWebhooksRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnvironmentNamespace();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getCursor();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getOrderBy();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getOrderDirection();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getSearchKeyword();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.bucketeer.autoops.ListWebhooksRequest.OrderBy = {
  DEFAULT: 0,
  NAME: 1,
  CREATED_AT: 2,
  UPDATED_AT: 3
};

/**
 * @enum {number}
 */
proto.bucketeer.autoops.ListWebhooksRequest.OrderDirection = {
  ASC: 0,
  DESC: 1
};

/**
 * optional string environment_namespace = 1;
 * @return {string}
 */
proto.bucketeer.autoops.ListWebhooksRequest.prototype.getEnvironmentNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bucketeer.autoops.ListWebhooksRequest} returns this
 */
proto.bucketeer.autoops.ListWebhooksRequest.prototype.setEnvironmentNamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 page_size = 2;
 * @return {number}
 */
proto.bucketeer.autoops.ListWebhooksRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bucketeer.autoops.ListWebhooksRequest} returns this
 */
proto.bucketeer.autoops.ListWebhooksRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string cursor = 3;
 * @return {string}
 */
proto.bucketeer.autoops.ListWebhooksRequest.prototype.getCursor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.bucketeer.autoops.ListWebhooksRequest} returns this
 */
proto.bucketeer.autoops.ListWebhooksRequest.prototype.setCursor = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional OrderBy order_by = 4;
 * @return {!proto.bucketeer.autoops.ListWebhooksRequest.OrderBy}
 */
proto.bucketeer.autoops.ListWebhooksRequest.prototype.getOrderBy = function() {
  return /** @type {!proto.bucketeer.autoops.ListWebhooksRequest.OrderBy} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.bucketeer.autoops.ListWebhooksRequest.OrderBy} value
 * @return {!proto.bucketeer.autoops.ListWebhooksRequest} returns this
 */
proto.bucketeer.autoops.ListWebhooksRequest.prototype.setOrderBy = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional OrderDirection order_direction = 5;
 * @return {!proto.bucketeer.autoops.ListWebhooksRequest.OrderDirection}
 */
proto.bucketeer.autoops.ListWebhooksRequest.prototype.getOrderDirection = function() {
  return /** @type {!proto.bucketeer.autoops.ListWebhooksRequest.OrderDirection} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.bucketeer.autoops.ListWebhooksRequest.OrderDirection} value
 * @return {!proto.bucketeer.autoops.ListWebhooksRequest} returns this
 */
proto.bucketeer.autoops.ListWebhooksRequest.prototype.setOrderDirection = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional string search_keyword = 6;
 * @return {string}
 */
proto.bucketeer.autoops.ListWebhooksRequest.prototype.getSearchKeyword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.bucketeer.autoops.ListWebhooksRequest} returns this
 */
proto.bucketeer.autoops.ListWebhooksRequest.prototype.setSearchKeyword = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bucketeer.autoops.ListWebhooksResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bucketeer.autoops.ListWebhooksResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.bucketeer.autoops.ListWebhooksResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bucketeer.autoops.ListWebhooksResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.ListWebhooksResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    webhooksList: jspb.Message.toObjectList(msg.getWebhooksList(),
    proto_autoops_webhook_pb.Webhook.toObject, includeInstance),
    cursor: jspb.Message.getFieldWithDefault(msg, 2, ""),
    totalCount: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bucketeer.autoops.ListWebhooksResponse}
 */
proto.bucketeer.autoops.ListWebhooksResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bucketeer.autoops.ListWebhooksResponse;
  return proto.bucketeer.autoops.ListWebhooksResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bucketeer.autoops.ListWebhooksResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bucketeer.autoops.ListWebhooksResponse}
 */
proto.bucketeer.autoops.ListWebhooksResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_autoops_webhook_pb.Webhook;
      reader.readMessage(value,proto_autoops_webhook_pb.Webhook.deserializeBinaryFromReader);
      msg.addWebhooks(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCursor(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bucketeer.autoops.ListWebhooksResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bucketeer.autoops.ListWebhooksResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bucketeer.autoops.ListWebhooksResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.ListWebhooksResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWebhooksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto_autoops_webhook_pb.Webhook.serializeBinaryToWriter
    );
  }
  f = message.getCursor();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTotalCount();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * repeated Webhook webhooks = 1;
 * @return {!Array<!proto.bucketeer.autoops.Webhook>}
 */
proto.bucketeer.autoops.ListWebhooksResponse.prototype.getWebhooksList = function() {
  return /** @type{!Array<!proto.bucketeer.autoops.Webhook>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_autoops_webhook_pb.Webhook, 1));
};


/**
 * @param {!Array<!proto.bucketeer.autoops.Webhook>} value
 * @return {!proto.bucketeer.autoops.ListWebhooksResponse} returns this
*/
proto.bucketeer.autoops.ListWebhooksResponse.prototype.setWebhooksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.bucketeer.autoops.Webhook=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bucketeer.autoops.Webhook}
 */
proto.bucketeer.autoops.ListWebhooksResponse.prototype.addWebhooks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.bucketeer.autoops.Webhook, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bucketeer.autoops.ListWebhooksResponse} returns this
 */
proto.bucketeer.autoops.ListWebhooksResponse.prototype.clearWebhooksList = function() {
  return this.setWebhooksList([]);
};


/**
 * optional string cursor = 2;
 * @return {string}
 */
proto.bucketeer.autoops.ListWebhooksResponse.prototype.getCursor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bucketeer.autoops.ListWebhooksResponse} returns this
 */
proto.bucketeer.autoops.ListWebhooksResponse.prototype.setCursor = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 total_count = 3;
 * @return {number}
 */
proto.bucketeer.autoops.ListWebhooksResponse.prototype.getTotalCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bucketeer.autoops.ListWebhooksResponse} returns this
 */
proto.bucketeer.autoops.ListWebhooksResponse.prototype.setTotalCount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bucketeer.autoops.CreateProgressiveRolloutRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bucketeer.autoops.CreateProgressiveRolloutRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bucketeer.autoops.CreateProgressiveRolloutRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.CreateProgressiveRolloutRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    environmentNamespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    command: (f = msg.getCommand()) && proto_autoops_command_pb.CreateProgressiveRolloutCommand.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bucketeer.autoops.CreateProgressiveRolloutRequest}
 */
proto.bucketeer.autoops.CreateProgressiveRolloutRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bucketeer.autoops.CreateProgressiveRolloutRequest;
  return proto.bucketeer.autoops.CreateProgressiveRolloutRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bucketeer.autoops.CreateProgressiveRolloutRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bucketeer.autoops.CreateProgressiveRolloutRequest}
 */
proto.bucketeer.autoops.CreateProgressiveRolloutRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEnvironmentNamespace(value);
      break;
    case 2:
      var value = new proto_autoops_command_pb.CreateProgressiveRolloutCommand;
      reader.readMessage(value,proto_autoops_command_pb.CreateProgressiveRolloutCommand.deserializeBinaryFromReader);
      msg.setCommand(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bucketeer.autoops.CreateProgressiveRolloutRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bucketeer.autoops.CreateProgressiveRolloutRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bucketeer.autoops.CreateProgressiveRolloutRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.CreateProgressiveRolloutRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnvironmentNamespace();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCommand();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto_autoops_command_pb.CreateProgressiveRolloutCommand.serializeBinaryToWriter
    );
  }
};


/**
 * optional string environment_namespace = 1;
 * @return {string}
 */
proto.bucketeer.autoops.CreateProgressiveRolloutRequest.prototype.getEnvironmentNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bucketeer.autoops.CreateProgressiveRolloutRequest} returns this
 */
proto.bucketeer.autoops.CreateProgressiveRolloutRequest.prototype.setEnvironmentNamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional CreateProgressiveRolloutCommand command = 2;
 * @return {?proto.bucketeer.autoops.CreateProgressiveRolloutCommand}
 */
proto.bucketeer.autoops.CreateProgressiveRolloutRequest.prototype.getCommand = function() {
  return /** @type{?proto.bucketeer.autoops.CreateProgressiveRolloutCommand} */ (
    jspb.Message.getWrapperField(this, proto_autoops_command_pb.CreateProgressiveRolloutCommand, 2));
};


/**
 * @param {?proto.bucketeer.autoops.CreateProgressiveRolloutCommand|undefined} value
 * @return {!proto.bucketeer.autoops.CreateProgressiveRolloutRequest} returns this
*/
proto.bucketeer.autoops.CreateProgressiveRolloutRequest.prototype.setCommand = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bucketeer.autoops.CreateProgressiveRolloutRequest} returns this
 */
proto.bucketeer.autoops.CreateProgressiveRolloutRequest.prototype.clearCommand = function() {
  return this.setCommand(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bucketeer.autoops.CreateProgressiveRolloutRequest.prototype.hasCommand = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bucketeer.autoops.CreateProgressiveRolloutResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.bucketeer.autoops.CreateProgressiveRolloutResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bucketeer.autoops.CreateProgressiveRolloutResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.CreateProgressiveRolloutResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bucketeer.autoops.CreateProgressiveRolloutResponse}
 */
proto.bucketeer.autoops.CreateProgressiveRolloutResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bucketeer.autoops.CreateProgressiveRolloutResponse;
  return proto.bucketeer.autoops.CreateProgressiveRolloutResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bucketeer.autoops.CreateProgressiveRolloutResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bucketeer.autoops.CreateProgressiveRolloutResponse}
 */
proto.bucketeer.autoops.CreateProgressiveRolloutResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bucketeer.autoops.CreateProgressiveRolloutResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bucketeer.autoops.CreateProgressiveRolloutResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bucketeer.autoops.CreateProgressiveRolloutResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.CreateProgressiveRolloutResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bucketeer.autoops.GetProgressiveRolloutRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bucketeer.autoops.GetProgressiveRolloutRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bucketeer.autoops.GetProgressiveRolloutRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.GetProgressiveRolloutRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    environmentNamespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    id: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bucketeer.autoops.GetProgressiveRolloutRequest}
 */
proto.bucketeer.autoops.GetProgressiveRolloutRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bucketeer.autoops.GetProgressiveRolloutRequest;
  return proto.bucketeer.autoops.GetProgressiveRolloutRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bucketeer.autoops.GetProgressiveRolloutRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bucketeer.autoops.GetProgressiveRolloutRequest}
 */
proto.bucketeer.autoops.GetProgressiveRolloutRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEnvironmentNamespace(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bucketeer.autoops.GetProgressiveRolloutRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bucketeer.autoops.GetProgressiveRolloutRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bucketeer.autoops.GetProgressiveRolloutRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.GetProgressiveRolloutRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnvironmentNamespace();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string environment_namespace = 1;
 * @return {string}
 */
proto.bucketeer.autoops.GetProgressiveRolloutRequest.prototype.getEnvironmentNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bucketeer.autoops.GetProgressiveRolloutRequest} returns this
 */
proto.bucketeer.autoops.GetProgressiveRolloutRequest.prototype.setEnvironmentNamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string id = 2;
 * @return {string}
 */
proto.bucketeer.autoops.GetProgressiveRolloutRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bucketeer.autoops.GetProgressiveRolloutRequest} returns this
 */
proto.bucketeer.autoops.GetProgressiveRolloutRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bucketeer.autoops.GetProgressiveRolloutResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.bucketeer.autoops.GetProgressiveRolloutResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bucketeer.autoops.GetProgressiveRolloutResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.GetProgressiveRolloutResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    progressiveRollout: (f = msg.getProgressiveRollout()) && proto_autoops_progressive_rollout_pb.ProgressiveRollout.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bucketeer.autoops.GetProgressiveRolloutResponse}
 */
proto.bucketeer.autoops.GetProgressiveRolloutResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bucketeer.autoops.GetProgressiveRolloutResponse;
  return proto.bucketeer.autoops.GetProgressiveRolloutResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bucketeer.autoops.GetProgressiveRolloutResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bucketeer.autoops.GetProgressiveRolloutResponse}
 */
proto.bucketeer.autoops.GetProgressiveRolloutResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_autoops_progressive_rollout_pb.ProgressiveRollout;
      reader.readMessage(value,proto_autoops_progressive_rollout_pb.ProgressiveRollout.deserializeBinaryFromReader);
      msg.setProgressiveRollout(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bucketeer.autoops.GetProgressiveRolloutResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bucketeer.autoops.GetProgressiveRolloutResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bucketeer.autoops.GetProgressiveRolloutResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.GetProgressiveRolloutResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProgressiveRollout();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_autoops_progressive_rollout_pb.ProgressiveRollout.serializeBinaryToWriter
    );
  }
};


/**
 * optional ProgressiveRollout progressive_rollout = 1;
 * @return {?proto.bucketeer.autoops.ProgressiveRollout}
 */
proto.bucketeer.autoops.GetProgressiveRolloutResponse.prototype.getProgressiveRollout = function() {
  return /** @type{?proto.bucketeer.autoops.ProgressiveRollout} */ (
    jspb.Message.getWrapperField(this, proto_autoops_progressive_rollout_pb.ProgressiveRollout, 1));
};


/**
 * @param {?proto.bucketeer.autoops.ProgressiveRollout|undefined} value
 * @return {!proto.bucketeer.autoops.GetProgressiveRolloutResponse} returns this
*/
proto.bucketeer.autoops.GetProgressiveRolloutResponse.prototype.setProgressiveRollout = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bucketeer.autoops.GetProgressiveRolloutResponse} returns this
 */
proto.bucketeer.autoops.GetProgressiveRolloutResponse.prototype.clearProgressiveRollout = function() {
  return this.setProgressiveRollout(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bucketeer.autoops.GetProgressiveRolloutResponse.prototype.hasProgressiveRollout = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bucketeer.autoops.DeleteProgressiveRolloutRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bucketeer.autoops.DeleteProgressiveRolloutRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bucketeer.autoops.DeleteProgressiveRolloutRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.DeleteProgressiveRolloutRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    environmentNamespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    id: jspb.Message.getFieldWithDefault(msg, 2, ""),
    command: (f = msg.getCommand()) && proto_autoops_command_pb.DeleteProgressiveRolloutCommand.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bucketeer.autoops.DeleteProgressiveRolloutRequest}
 */
proto.bucketeer.autoops.DeleteProgressiveRolloutRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bucketeer.autoops.DeleteProgressiveRolloutRequest;
  return proto.bucketeer.autoops.DeleteProgressiveRolloutRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bucketeer.autoops.DeleteProgressiveRolloutRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bucketeer.autoops.DeleteProgressiveRolloutRequest}
 */
proto.bucketeer.autoops.DeleteProgressiveRolloutRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEnvironmentNamespace(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 3:
      var value = new proto_autoops_command_pb.DeleteProgressiveRolloutCommand;
      reader.readMessage(value,proto_autoops_command_pb.DeleteProgressiveRolloutCommand.deserializeBinaryFromReader);
      msg.setCommand(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bucketeer.autoops.DeleteProgressiveRolloutRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bucketeer.autoops.DeleteProgressiveRolloutRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bucketeer.autoops.DeleteProgressiveRolloutRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.DeleteProgressiveRolloutRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnvironmentNamespace();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCommand();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto_autoops_command_pb.DeleteProgressiveRolloutCommand.serializeBinaryToWriter
    );
  }
};


/**
 * optional string environment_namespace = 1;
 * @return {string}
 */
proto.bucketeer.autoops.DeleteProgressiveRolloutRequest.prototype.getEnvironmentNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bucketeer.autoops.DeleteProgressiveRolloutRequest} returns this
 */
proto.bucketeer.autoops.DeleteProgressiveRolloutRequest.prototype.setEnvironmentNamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string id = 2;
 * @return {string}
 */
proto.bucketeer.autoops.DeleteProgressiveRolloutRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bucketeer.autoops.DeleteProgressiveRolloutRequest} returns this
 */
proto.bucketeer.autoops.DeleteProgressiveRolloutRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional DeleteProgressiveRolloutCommand command = 3;
 * @return {?proto.bucketeer.autoops.DeleteProgressiveRolloutCommand}
 */
proto.bucketeer.autoops.DeleteProgressiveRolloutRequest.prototype.getCommand = function() {
  return /** @type{?proto.bucketeer.autoops.DeleteProgressiveRolloutCommand} */ (
    jspb.Message.getWrapperField(this, proto_autoops_command_pb.DeleteProgressiveRolloutCommand, 3));
};


/**
 * @param {?proto.bucketeer.autoops.DeleteProgressiveRolloutCommand|undefined} value
 * @return {!proto.bucketeer.autoops.DeleteProgressiveRolloutRequest} returns this
*/
proto.bucketeer.autoops.DeleteProgressiveRolloutRequest.prototype.setCommand = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bucketeer.autoops.DeleteProgressiveRolloutRequest} returns this
 */
proto.bucketeer.autoops.DeleteProgressiveRolloutRequest.prototype.clearCommand = function() {
  return this.setCommand(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bucketeer.autoops.DeleteProgressiveRolloutRequest.prototype.hasCommand = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bucketeer.autoops.DeleteProgressiveRolloutResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.bucketeer.autoops.DeleteProgressiveRolloutResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bucketeer.autoops.DeleteProgressiveRolloutResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.DeleteProgressiveRolloutResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bucketeer.autoops.DeleteProgressiveRolloutResponse}
 */
proto.bucketeer.autoops.DeleteProgressiveRolloutResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bucketeer.autoops.DeleteProgressiveRolloutResponse;
  return proto.bucketeer.autoops.DeleteProgressiveRolloutResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bucketeer.autoops.DeleteProgressiveRolloutResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bucketeer.autoops.DeleteProgressiveRolloutResponse}
 */
proto.bucketeer.autoops.DeleteProgressiveRolloutResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bucketeer.autoops.DeleteProgressiveRolloutResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bucketeer.autoops.DeleteProgressiveRolloutResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bucketeer.autoops.DeleteProgressiveRolloutResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.DeleteProgressiveRolloutResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bucketeer.autoops.ListProgressiveRolloutsRequest.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bucketeer.autoops.ListProgressiveRolloutsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bucketeer.autoops.ListProgressiveRolloutsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bucketeer.autoops.ListProgressiveRolloutsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.ListProgressiveRolloutsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    environmentNamespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pageSize: jspb.Message.getFieldWithDefault(msg, 2, 0),
    cursor: jspb.Message.getFieldWithDefault(msg, 3, ""),
    featureIdsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    orderBy: jspb.Message.getFieldWithDefault(msg, 5, 0),
    orderDirection: jspb.Message.getFieldWithDefault(msg, 6, 0),
    status: jspb.Message.getFieldWithDefault(msg, 7, 0),
    type: jspb.Message.getFieldWithDefault(msg, 8, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bucketeer.autoops.ListProgressiveRolloutsRequest}
 */
proto.bucketeer.autoops.ListProgressiveRolloutsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bucketeer.autoops.ListProgressiveRolloutsRequest;
  return proto.bucketeer.autoops.ListProgressiveRolloutsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bucketeer.autoops.ListProgressiveRolloutsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bucketeer.autoops.ListProgressiveRolloutsRequest}
 */
proto.bucketeer.autoops.ListProgressiveRolloutsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEnvironmentNamespace(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPageSize(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCursor(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addFeatureIds(value);
      break;
    case 5:
      var value = /** @type {!proto.bucketeer.autoops.ListProgressiveRolloutsRequest.OrderBy} */ (reader.readEnum());
      msg.setOrderBy(value);
      break;
    case 6:
      var value = /** @type {!proto.bucketeer.autoops.ListProgressiveRolloutsRequest.OrderDirection} */ (reader.readEnum());
      msg.setOrderDirection(value);
      break;
    case 7:
      var value = /** @type {!proto.bucketeer.autoops.ProgressiveRollout.Status} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 8:
      var value = /** @type {!proto.bucketeer.autoops.ProgressiveRollout.Type} */ (reader.readEnum());
      msg.setType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bucketeer.autoops.ListProgressiveRolloutsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bucketeer.autoops.ListProgressiveRolloutsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bucketeer.autoops.ListProgressiveRolloutsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.ListProgressiveRolloutsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnvironmentNamespace();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getCursor();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getFeatureIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getOrderBy();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getOrderDirection();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = /** @type {!proto.bucketeer.autoops.ProgressiveRollout.Status} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = /** @type {!proto.bucketeer.autoops.ProgressiveRollout.Type} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeEnum(
      8,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.bucketeer.autoops.ListProgressiveRolloutsRequest.OrderBy = {
  DEFAULT: 0,
  CREATED_AT: 1,
  UPDATED_AT: 2
};

/**
 * @enum {number}
 */
proto.bucketeer.autoops.ListProgressiveRolloutsRequest.OrderDirection = {
  ASC: 0,
  DESC: 1
};

/**
 * optional string environment_namespace = 1;
 * @return {string}
 */
proto.bucketeer.autoops.ListProgressiveRolloutsRequest.prototype.getEnvironmentNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bucketeer.autoops.ListProgressiveRolloutsRequest} returns this
 */
proto.bucketeer.autoops.ListProgressiveRolloutsRequest.prototype.setEnvironmentNamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 page_size = 2;
 * @return {number}
 */
proto.bucketeer.autoops.ListProgressiveRolloutsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bucketeer.autoops.ListProgressiveRolloutsRequest} returns this
 */
proto.bucketeer.autoops.ListProgressiveRolloutsRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string cursor = 3;
 * @return {string}
 */
proto.bucketeer.autoops.ListProgressiveRolloutsRequest.prototype.getCursor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.bucketeer.autoops.ListProgressiveRolloutsRequest} returns this
 */
proto.bucketeer.autoops.ListProgressiveRolloutsRequest.prototype.setCursor = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated string feature_ids = 4;
 * @return {!Array<string>}
 */
proto.bucketeer.autoops.ListProgressiveRolloutsRequest.prototype.getFeatureIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.bucketeer.autoops.ListProgressiveRolloutsRequest} returns this
 */
proto.bucketeer.autoops.ListProgressiveRolloutsRequest.prototype.setFeatureIdsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.bucketeer.autoops.ListProgressiveRolloutsRequest} returns this
 */
proto.bucketeer.autoops.ListProgressiveRolloutsRequest.prototype.addFeatureIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bucketeer.autoops.ListProgressiveRolloutsRequest} returns this
 */
proto.bucketeer.autoops.ListProgressiveRolloutsRequest.prototype.clearFeatureIdsList = function() {
  return this.setFeatureIdsList([]);
};


/**
 * optional OrderBy order_by = 5;
 * @return {!proto.bucketeer.autoops.ListProgressiveRolloutsRequest.OrderBy}
 */
proto.bucketeer.autoops.ListProgressiveRolloutsRequest.prototype.getOrderBy = function() {
  return /** @type {!proto.bucketeer.autoops.ListProgressiveRolloutsRequest.OrderBy} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.bucketeer.autoops.ListProgressiveRolloutsRequest.OrderBy} value
 * @return {!proto.bucketeer.autoops.ListProgressiveRolloutsRequest} returns this
 */
proto.bucketeer.autoops.ListProgressiveRolloutsRequest.prototype.setOrderBy = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional OrderDirection order_direction = 6;
 * @return {!proto.bucketeer.autoops.ListProgressiveRolloutsRequest.OrderDirection}
 */
proto.bucketeer.autoops.ListProgressiveRolloutsRequest.prototype.getOrderDirection = function() {
  return /** @type {!proto.bucketeer.autoops.ListProgressiveRolloutsRequest.OrderDirection} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.bucketeer.autoops.ListProgressiveRolloutsRequest.OrderDirection} value
 * @return {!proto.bucketeer.autoops.ListProgressiveRolloutsRequest} returns this
 */
proto.bucketeer.autoops.ListProgressiveRolloutsRequest.prototype.setOrderDirection = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional ProgressiveRollout.Status status = 7;
 * @return {!proto.bucketeer.autoops.ProgressiveRollout.Status}
 */
proto.bucketeer.autoops.ListProgressiveRolloutsRequest.prototype.getStatus = function() {
  return /** @type {!proto.bucketeer.autoops.ProgressiveRollout.Status} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.bucketeer.autoops.ProgressiveRollout.Status} value
 * @return {!proto.bucketeer.autoops.ListProgressiveRolloutsRequest} returns this
 */
proto.bucketeer.autoops.ListProgressiveRolloutsRequest.prototype.setStatus = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.bucketeer.autoops.ListProgressiveRolloutsRequest} returns this
 */
proto.bucketeer.autoops.ListProgressiveRolloutsRequest.prototype.clearStatus = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bucketeer.autoops.ListProgressiveRolloutsRequest.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional ProgressiveRollout.Type type = 8;
 * @return {!proto.bucketeer.autoops.ProgressiveRollout.Type}
 */
proto.bucketeer.autoops.ListProgressiveRolloutsRequest.prototype.getType = function() {
  return /** @type {!proto.bucketeer.autoops.ProgressiveRollout.Type} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.bucketeer.autoops.ProgressiveRollout.Type} value
 * @return {!proto.bucketeer.autoops.ListProgressiveRolloutsRequest} returns this
 */
proto.bucketeer.autoops.ListProgressiveRolloutsRequest.prototype.setType = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.bucketeer.autoops.ListProgressiveRolloutsRequest} returns this
 */
proto.bucketeer.autoops.ListProgressiveRolloutsRequest.prototype.clearType = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bucketeer.autoops.ListProgressiveRolloutsRequest.prototype.hasType = function() {
  return jspb.Message.getField(this, 8) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bucketeer.autoops.ListProgressiveRolloutsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bucketeer.autoops.ListProgressiveRolloutsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.bucketeer.autoops.ListProgressiveRolloutsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bucketeer.autoops.ListProgressiveRolloutsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.ListProgressiveRolloutsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    progressiveRolloutsList: jspb.Message.toObjectList(msg.getProgressiveRolloutsList(),
    proto_autoops_progressive_rollout_pb.ProgressiveRollout.toObject, includeInstance),
    cursor: jspb.Message.getFieldWithDefault(msg, 2, ""),
    totalCount: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bucketeer.autoops.ListProgressiveRolloutsResponse}
 */
proto.bucketeer.autoops.ListProgressiveRolloutsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bucketeer.autoops.ListProgressiveRolloutsResponse;
  return proto.bucketeer.autoops.ListProgressiveRolloutsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bucketeer.autoops.ListProgressiveRolloutsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bucketeer.autoops.ListProgressiveRolloutsResponse}
 */
proto.bucketeer.autoops.ListProgressiveRolloutsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_autoops_progressive_rollout_pb.ProgressiveRollout;
      reader.readMessage(value,proto_autoops_progressive_rollout_pb.ProgressiveRollout.deserializeBinaryFromReader);
      msg.addProgressiveRollouts(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCursor(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bucketeer.autoops.ListProgressiveRolloutsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bucketeer.autoops.ListProgressiveRolloutsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bucketeer.autoops.ListProgressiveRolloutsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.ListProgressiveRolloutsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProgressiveRolloutsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto_autoops_progressive_rollout_pb.ProgressiveRollout.serializeBinaryToWriter
    );
  }
  f = message.getCursor();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTotalCount();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * repeated ProgressiveRollout progressive_rollouts = 1;
 * @return {!Array<!proto.bucketeer.autoops.ProgressiveRollout>}
 */
proto.bucketeer.autoops.ListProgressiveRolloutsResponse.prototype.getProgressiveRolloutsList = function() {
  return /** @type{!Array<!proto.bucketeer.autoops.ProgressiveRollout>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_autoops_progressive_rollout_pb.ProgressiveRollout, 1));
};


/**
 * @param {!Array<!proto.bucketeer.autoops.ProgressiveRollout>} value
 * @return {!proto.bucketeer.autoops.ListProgressiveRolloutsResponse} returns this
*/
proto.bucketeer.autoops.ListProgressiveRolloutsResponse.prototype.setProgressiveRolloutsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.bucketeer.autoops.ProgressiveRollout=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bucketeer.autoops.ProgressiveRollout}
 */
proto.bucketeer.autoops.ListProgressiveRolloutsResponse.prototype.addProgressiveRollouts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.bucketeer.autoops.ProgressiveRollout, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bucketeer.autoops.ListProgressiveRolloutsResponse} returns this
 */
proto.bucketeer.autoops.ListProgressiveRolloutsResponse.prototype.clearProgressiveRolloutsList = function() {
  return this.setProgressiveRolloutsList([]);
};


/**
 * optional string cursor = 2;
 * @return {string}
 */
proto.bucketeer.autoops.ListProgressiveRolloutsResponse.prototype.getCursor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bucketeer.autoops.ListProgressiveRolloutsResponse} returns this
 */
proto.bucketeer.autoops.ListProgressiveRolloutsResponse.prototype.setCursor = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 total_count = 3;
 * @return {number}
 */
proto.bucketeer.autoops.ListProgressiveRolloutsResponse.prototype.getTotalCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bucketeer.autoops.ListProgressiveRolloutsResponse} returns this
 */
proto.bucketeer.autoops.ListProgressiveRolloutsResponse.prototype.setTotalCount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bucketeer.autoops.ExecuteProgressiveRolloutRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bucketeer.autoops.ExecuteProgressiveRolloutRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bucketeer.autoops.ExecuteProgressiveRolloutRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.ExecuteProgressiveRolloutRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    environmentNamespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    id: jspb.Message.getFieldWithDefault(msg, 2, ""),
    changeProgressiveRolloutTriggeredAtCommand: (f = msg.getChangeProgressiveRolloutTriggeredAtCommand()) && proto_autoops_command_pb.ChangeProgressiveRolloutScheduleTriggeredAtCommand.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bucketeer.autoops.ExecuteProgressiveRolloutRequest}
 */
proto.bucketeer.autoops.ExecuteProgressiveRolloutRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bucketeer.autoops.ExecuteProgressiveRolloutRequest;
  return proto.bucketeer.autoops.ExecuteProgressiveRolloutRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bucketeer.autoops.ExecuteProgressiveRolloutRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bucketeer.autoops.ExecuteProgressiveRolloutRequest}
 */
proto.bucketeer.autoops.ExecuteProgressiveRolloutRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEnvironmentNamespace(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 3:
      var value = new proto_autoops_command_pb.ChangeProgressiveRolloutScheduleTriggeredAtCommand;
      reader.readMessage(value,proto_autoops_command_pb.ChangeProgressiveRolloutScheduleTriggeredAtCommand.deserializeBinaryFromReader);
      msg.setChangeProgressiveRolloutTriggeredAtCommand(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bucketeer.autoops.ExecuteProgressiveRolloutRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bucketeer.autoops.ExecuteProgressiveRolloutRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bucketeer.autoops.ExecuteProgressiveRolloutRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.ExecuteProgressiveRolloutRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnvironmentNamespace();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getChangeProgressiveRolloutTriggeredAtCommand();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto_autoops_command_pb.ChangeProgressiveRolloutScheduleTriggeredAtCommand.serializeBinaryToWriter
    );
  }
};


/**
 * optional string environment_namespace = 1;
 * @return {string}
 */
proto.bucketeer.autoops.ExecuteProgressiveRolloutRequest.prototype.getEnvironmentNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bucketeer.autoops.ExecuteProgressiveRolloutRequest} returns this
 */
proto.bucketeer.autoops.ExecuteProgressiveRolloutRequest.prototype.setEnvironmentNamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string id = 2;
 * @return {string}
 */
proto.bucketeer.autoops.ExecuteProgressiveRolloutRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bucketeer.autoops.ExecuteProgressiveRolloutRequest} returns this
 */
proto.bucketeer.autoops.ExecuteProgressiveRolloutRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional ChangeProgressiveRolloutScheduleTriggeredAtCommand change_progressive_rollout_triggered_at_command = 3;
 * @return {?proto.bucketeer.autoops.ChangeProgressiveRolloutScheduleTriggeredAtCommand}
 */
proto.bucketeer.autoops.ExecuteProgressiveRolloutRequest.prototype.getChangeProgressiveRolloutTriggeredAtCommand = function() {
  return /** @type{?proto.bucketeer.autoops.ChangeProgressiveRolloutScheduleTriggeredAtCommand} */ (
    jspb.Message.getWrapperField(this, proto_autoops_command_pb.ChangeProgressiveRolloutScheduleTriggeredAtCommand, 3));
};


/**
 * @param {?proto.bucketeer.autoops.ChangeProgressiveRolloutScheduleTriggeredAtCommand|undefined} value
 * @return {!proto.bucketeer.autoops.ExecuteProgressiveRolloutRequest} returns this
*/
proto.bucketeer.autoops.ExecuteProgressiveRolloutRequest.prototype.setChangeProgressiveRolloutTriggeredAtCommand = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bucketeer.autoops.ExecuteProgressiveRolloutRequest} returns this
 */
proto.bucketeer.autoops.ExecuteProgressiveRolloutRequest.prototype.clearChangeProgressiveRolloutTriggeredAtCommand = function() {
  return this.setChangeProgressiveRolloutTriggeredAtCommand(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bucketeer.autoops.ExecuteProgressiveRolloutRequest.prototype.hasChangeProgressiveRolloutTriggeredAtCommand = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bucketeer.autoops.ExecuteProgressiveRolloutResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.bucketeer.autoops.ExecuteProgressiveRolloutResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bucketeer.autoops.ExecuteProgressiveRolloutResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.ExecuteProgressiveRolloutResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bucketeer.autoops.ExecuteProgressiveRolloutResponse}
 */
proto.bucketeer.autoops.ExecuteProgressiveRolloutResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bucketeer.autoops.ExecuteProgressiveRolloutResponse;
  return proto.bucketeer.autoops.ExecuteProgressiveRolloutResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bucketeer.autoops.ExecuteProgressiveRolloutResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bucketeer.autoops.ExecuteProgressiveRolloutResponse}
 */
proto.bucketeer.autoops.ExecuteProgressiveRolloutResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bucketeer.autoops.ExecuteProgressiveRolloutResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bucketeer.autoops.ExecuteProgressiveRolloutResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bucketeer.autoops.ExecuteProgressiveRolloutResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.ExecuteProgressiveRolloutResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bucketeer.autoops.CreateFlagTriggerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bucketeer.autoops.CreateFlagTriggerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bucketeer.autoops.CreateFlagTriggerRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.CreateFlagTriggerRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    environmentNamespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    createFlagTriggerCommand: (f = msg.getCreateFlagTriggerCommand()) && proto_autoops_command_pb.CreateFlagTriggerCommand.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bucketeer.autoops.CreateFlagTriggerRequest}
 */
proto.bucketeer.autoops.CreateFlagTriggerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bucketeer.autoops.CreateFlagTriggerRequest;
  return proto.bucketeer.autoops.CreateFlagTriggerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bucketeer.autoops.CreateFlagTriggerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bucketeer.autoops.CreateFlagTriggerRequest}
 */
proto.bucketeer.autoops.CreateFlagTriggerRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEnvironmentNamespace(value);
      break;
    case 2:
      var value = new proto_autoops_command_pb.CreateFlagTriggerCommand;
      reader.readMessage(value,proto_autoops_command_pb.CreateFlagTriggerCommand.deserializeBinaryFromReader);
      msg.setCreateFlagTriggerCommand(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bucketeer.autoops.CreateFlagTriggerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bucketeer.autoops.CreateFlagTriggerRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bucketeer.autoops.CreateFlagTriggerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.CreateFlagTriggerRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnvironmentNamespace();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCreateFlagTriggerCommand();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto_autoops_command_pb.CreateFlagTriggerCommand.serializeBinaryToWriter
    );
  }
};


/**
 * optional string environment_namespace = 1;
 * @return {string}
 */
proto.bucketeer.autoops.CreateFlagTriggerRequest.prototype.getEnvironmentNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bucketeer.autoops.CreateFlagTriggerRequest} returns this
 */
proto.bucketeer.autoops.CreateFlagTriggerRequest.prototype.setEnvironmentNamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional CreateFlagTriggerCommand create_flag_trigger_command = 2;
 * @return {?proto.bucketeer.autoops.CreateFlagTriggerCommand}
 */
proto.bucketeer.autoops.CreateFlagTriggerRequest.prototype.getCreateFlagTriggerCommand = function() {
  return /** @type{?proto.bucketeer.autoops.CreateFlagTriggerCommand} */ (
    jspb.Message.getWrapperField(this, proto_autoops_command_pb.CreateFlagTriggerCommand, 2));
};


/**
 * @param {?proto.bucketeer.autoops.CreateFlagTriggerCommand|undefined} value
 * @return {!proto.bucketeer.autoops.CreateFlagTriggerRequest} returns this
*/
proto.bucketeer.autoops.CreateFlagTriggerRequest.prototype.setCreateFlagTriggerCommand = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bucketeer.autoops.CreateFlagTriggerRequest} returns this
 */
proto.bucketeer.autoops.CreateFlagTriggerRequest.prototype.clearCreateFlagTriggerCommand = function() {
  return this.setCreateFlagTriggerCommand(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bucketeer.autoops.CreateFlagTriggerRequest.prototype.hasCreateFlagTriggerCommand = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bucketeer.autoops.CreateFlagTriggerResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.bucketeer.autoops.CreateFlagTriggerResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bucketeer.autoops.CreateFlagTriggerResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.CreateFlagTriggerResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    flagTrigger: (f = msg.getFlagTrigger()) && proto_autoops_flag_trigger_pb.FlagTrigger.toObject(includeInstance, f),
    url: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bucketeer.autoops.CreateFlagTriggerResponse}
 */
proto.bucketeer.autoops.CreateFlagTriggerResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bucketeer.autoops.CreateFlagTriggerResponse;
  return proto.bucketeer.autoops.CreateFlagTriggerResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bucketeer.autoops.CreateFlagTriggerResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bucketeer.autoops.CreateFlagTriggerResponse}
 */
proto.bucketeer.autoops.CreateFlagTriggerResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_autoops_flag_trigger_pb.FlagTrigger;
      reader.readMessage(value,proto_autoops_flag_trigger_pb.FlagTrigger.deserializeBinaryFromReader);
      msg.setFlagTrigger(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bucketeer.autoops.CreateFlagTriggerResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bucketeer.autoops.CreateFlagTriggerResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bucketeer.autoops.CreateFlagTriggerResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.CreateFlagTriggerResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFlagTrigger();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_autoops_flag_trigger_pb.FlagTrigger.serializeBinaryToWriter
    );
  }
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional FlagTrigger flag_trigger = 1;
 * @return {?proto.bucketeer.autoops.FlagTrigger}
 */
proto.bucketeer.autoops.CreateFlagTriggerResponse.prototype.getFlagTrigger = function() {
  return /** @type{?proto.bucketeer.autoops.FlagTrigger} */ (
    jspb.Message.getWrapperField(this, proto_autoops_flag_trigger_pb.FlagTrigger, 1));
};


/**
 * @param {?proto.bucketeer.autoops.FlagTrigger|undefined} value
 * @return {!proto.bucketeer.autoops.CreateFlagTriggerResponse} returns this
*/
proto.bucketeer.autoops.CreateFlagTriggerResponse.prototype.setFlagTrigger = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bucketeer.autoops.CreateFlagTriggerResponse} returns this
 */
proto.bucketeer.autoops.CreateFlagTriggerResponse.prototype.clearFlagTrigger = function() {
  return this.setFlagTrigger(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bucketeer.autoops.CreateFlagTriggerResponse.prototype.hasFlagTrigger = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string url = 2;
 * @return {string}
 */
proto.bucketeer.autoops.CreateFlagTriggerResponse.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bucketeer.autoops.CreateFlagTriggerResponse} returns this
 */
proto.bucketeer.autoops.CreateFlagTriggerResponse.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bucketeer.autoops.DeleteFlagTriggerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bucketeer.autoops.DeleteFlagTriggerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bucketeer.autoops.DeleteFlagTriggerRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.DeleteFlagTriggerRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    environmentNamespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    deleteFlagTriggerCommand: (f = msg.getDeleteFlagTriggerCommand()) && proto_autoops_command_pb.DeleteFlagTriggerCommand.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bucketeer.autoops.DeleteFlagTriggerRequest}
 */
proto.bucketeer.autoops.DeleteFlagTriggerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bucketeer.autoops.DeleteFlagTriggerRequest;
  return proto.bucketeer.autoops.DeleteFlagTriggerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bucketeer.autoops.DeleteFlagTriggerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bucketeer.autoops.DeleteFlagTriggerRequest}
 */
proto.bucketeer.autoops.DeleteFlagTriggerRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEnvironmentNamespace(value);
      break;
    case 2:
      var value = new proto_autoops_command_pb.DeleteFlagTriggerCommand;
      reader.readMessage(value,proto_autoops_command_pb.DeleteFlagTriggerCommand.deserializeBinaryFromReader);
      msg.setDeleteFlagTriggerCommand(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bucketeer.autoops.DeleteFlagTriggerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bucketeer.autoops.DeleteFlagTriggerRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bucketeer.autoops.DeleteFlagTriggerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.DeleteFlagTriggerRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnvironmentNamespace();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDeleteFlagTriggerCommand();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto_autoops_command_pb.DeleteFlagTriggerCommand.serializeBinaryToWriter
    );
  }
};


/**
 * optional string environment_namespace = 1;
 * @return {string}
 */
proto.bucketeer.autoops.DeleteFlagTriggerRequest.prototype.getEnvironmentNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bucketeer.autoops.DeleteFlagTriggerRequest} returns this
 */
proto.bucketeer.autoops.DeleteFlagTriggerRequest.prototype.setEnvironmentNamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional DeleteFlagTriggerCommand delete_flag_trigger_command = 2;
 * @return {?proto.bucketeer.autoops.DeleteFlagTriggerCommand}
 */
proto.bucketeer.autoops.DeleteFlagTriggerRequest.prototype.getDeleteFlagTriggerCommand = function() {
  return /** @type{?proto.bucketeer.autoops.DeleteFlagTriggerCommand} */ (
    jspb.Message.getWrapperField(this, proto_autoops_command_pb.DeleteFlagTriggerCommand, 2));
};


/**
 * @param {?proto.bucketeer.autoops.DeleteFlagTriggerCommand|undefined} value
 * @return {!proto.bucketeer.autoops.DeleteFlagTriggerRequest} returns this
*/
proto.bucketeer.autoops.DeleteFlagTriggerRequest.prototype.setDeleteFlagTriggerCommand = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bucketeer.autoops.DeleteFlagTriggerRequest} returns this
 */
proto.bucketeer.autoops.DeleteFlagTriggerRequest.prototype.clearDeleteFlagTriggerCommand = function() {
  return this.setDeleteFlagTriggerCommand(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bucketeer.autoops.DeleteFlagTriggerRequest.prototype.hasDeleteFlagTriggerCommand = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bucketeer.autoops.DeleteFlagTriggerResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.bucketeer.autoops.DeleteFlagTriggerResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bucketeer.autoops.DeleteFlagTriggerResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.DeleteFlagTriggerResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bucketeer.autoops.DeleteFlagTriggerResponse}
 */
proto.bucketeer.autoops.DeleteFlagTriggerResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bucketeer.autoops.DeleteFlagTriggerResponse;
  return proto.bucketeer.autoops.DeleteFlagTriggerResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bucketeer.autoops.DeleteFlagTriggerResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bucketeer.autoops.DeleteFlagTriggerResponse}
 */
proto.bucketeer.autoops.DeleteFlagTriggerResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bucketeer.autoops.DeleteFlagTriggerResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bucketeer.autoops.DeleteFlagTriggerResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bucketeer.autoops.DeleteFlagTriggerResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.DeleteFlagTriggerResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bucketeer.autoops.ControlFlagTriggerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bucketeer.autoops.ControlFlagTriggerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bucketeer.autoops.ControlFlagTriggerRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.ControlFlagTriggerRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    environmentNamespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    controlFlagTriggerCommand: (f = msg.getControlFlagTriggerCommand()) && proto_autoops_command_pb.ControlFlagTriggerCommand.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bucketeer.autoops.ControlFlagTriggerRequest}
 */
proto.bucketeer.autoops.ControlFlagTriggerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bucketeer.autoops.ControlFlagTriggerRequest;
  return proto.bucketeer.autoops.ControlFlagTriggerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bucketeer.autoops.ControlFlagTriggerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bucketeer.autoops.ControlFlagTriggerRequest}
 */
proto.bucketeer.autoops.ControlFlagTriggerRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEnvironmentNamespace(value);
      break;
    case 2:
      var value = new proto_autoops_command_pb.ControlFlagTriggerCommand;
      reader.readMessage(value,proto_autoops_command_pb.ControlFlagTriggerCommand.deserializeBinaryFromReader);
      msg.setControlFlagTriggerCommand(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bucketeer.autoops.ControlFlagTriggerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bucketeer.autoops.ControlFlagTriggerRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bucketeer.autoops.ControlFlagTriggerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.ControlFlagTriggerRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnvironmentNamespace();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getControlFlagTriggerCommand();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto_autoops_command_pb.ControlFlagTriggerCommand.serializeBinaryToWriter
    );
  }
};


/**
 * optional string environment_namespace = 1;
 * @return {string}
 */
proto.bucketeer.autoops.ControlFlagTriggerRequest.prototype.getEnvironmentNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bucketeer.autoops.ControlFlagTriggerRequest} returns this
 */
proto.bucketeer.autoops.ControlFlagTriggerRequest.prototype.setEnvironmentNamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ControlFlagTriggerCommand control_flag_trigger_command = 2;
 * @return {?proto.bucketeer.autoops.ControlFlagTriggerCommand}
 */
proto.bucketeer.autoops.ControlFlagTriggerRequest.prototype.getControlFlagTriggerCommand = function() {
  return /** @type{?proto.bucketeer.autoops.ControlFlagTriggerCommand} */ (
    jspb.Message.getWrapperField(this, proto_autoops_command_pb.ControlFlagTriggerCommand, 2));
};


/**
 * @param {?proto.bucketeer.autoops.ControlFlagTriggerCommand|undefined} value
 * @return {!proto.bucketeer.autoops.ControlFlagTriggerRequest} returns this
*/
proto.bucketeer.autoops.ControlFlagTriggerRequest.prototype.setControlFlagTriggerCommand = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bucketeer.autoops.ControlFlagTriggerRequest} returns this
 */
proto.bucketeer.autoops.ControlFlagTriggerRequest.prototype.clearControlFlagTriggerCommand = function() {
  return this.setControlFlagTriggerCommand(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bucketeer.autoops.ControlFlagTriggerRequest.prototype.hasControlFlagTriggerCommand = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bucketeer.autoops.ControlFlagTriggerResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.bucketeer.autoops.ControlFlagTriggerResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bucketeer.autoops.ControlFlagTriggerResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.ControlFlagTriggerResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bucketeer.autoops.ControlFlagTriggerResponse}
 */
proto.bucketeer.autoops.ControlFlagTriggerResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bucketeer.autoops.ControlFlagTriggerResponse;
  return proto.bucketeer.autoops.ControlFlagTriggerResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bucketeer.autoops.ControlFlagTriggerResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bucketeer.autoops.ControlFlagTriggerResponse}
 */
proto.bucketeer.autoops.ControlFlagTriggerResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bucketeer.autoops.ControlFlagTriggerResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bucketeer.autoops.ControlFlagTriggerResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bucketeer.autoops.ControlFlagTriggerResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.ControlFlagTriggerResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bucketeer.autoops.ResetFlagTriggerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bucketeer.autoops.ResetFlagTriggerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bucketeer.autoops.ResetFlagTriggerRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.ResetFlagTriggerRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    environmentNamespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    resetFlagTriggerCommand: (f = msg.getResetFlagTriggerCommand()) && proto_autoops_command_pb.ResetFlagTriggerCommand.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bucketeer.autoops.ResetFlagTriggerRequest}
 */
proto.bucketeer.autoops.ResetFlagTriggerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bucketeer.autoops.ResetFlagTriggerRequest;
  return proto.bucketeer.autoops.ResetFlagTriggerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bucketeer.autoops.ResetFlagTriggerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bucketeer.autoops.ResetFlagTriggerRequest}
 */
proto.bucketeer.autoops.ResetFlagTriggerRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEnvironmentNamespace(value);
      break;
    case 2:
      var value = new proto_autoops_command_pb.ResetFlagTriggerCommand;
      reader.readMessage(value,proto_autoops_command_pb.ResetFlagTriggerCommand.deserializeBinaryFromReader);
      msg.setResetFlagTriggerCommand(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bucketeer.autoops.ResetFlagTriggerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bucketeer.autoops.ResetFlagTriggerRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bucketeer.autoops.ResetFlagTriggerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.ResetFlagTriggerRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnvironmentNamespace();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getResetFlagTriggerCommand();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto_autoops_command_pb.ResetFlagTriggerCommand.serializeBinaryToWriter
    );
  }
};


/**
 * optional string environment_namespace = 1;
 * @return {string}
 */
proto.bucketeer.autoops.ResetFlagTriggerRequest.prototype.getEnvironmentNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bucketeer.autoops.ResetFlagTriggerRequest} returns this
 */
proto.bucketeer.autoops.ResetFlagTriggerRequest.prototype.setEnvironmentNamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ResetFlagTriggerCommand reset_flag_trigger_command = 2;
 * @return {?proto.bucketeer.autoops.ResetFlagTriggerCommand}
 */
proto.bucketeer.autoops.ResetFlagTriggerRequest.prototype.getResetFlagTriggerCommand = function() {
  return /** @type{?proto.bucketeer.autoops.ResetFlagTriggerCommand} */ (
    jspb.Message.getWrapperField(this, proto_autoops_command_pb.ResetFlagTriggerCommand, 2));
};


/**
 * @param {?proto.bucketeer.autoops.ResetFlagTriggerCommand|undefined} value
 * @return {!proto.bucketeer.autoops.ResetFlagTriggerRequest} returns this
*/
proto.bucketeer.autoops.ResetFlagTriggerRequest.prototype.setResetFlagTriggerCommand = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bucketeer.autoops.ResetFlagTriggerRequest} returns this
 */
proto.bucketeer.autoops.ResetFlagTriggerRequest.prototype.clearResetFlagTriggerCommand = function() {
  return this.setResetFlagTriggerCommand(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bucketeer.autoops.ResetFlagTriggerRequest.prototype.hasResetFlagTriggerCommand = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bucketeer.autoops.ResetFlagTriggerResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.bucketeer.autoops.ResetFlagTriggerResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bucketeer.autoops.ResetFlagTriggerResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.ResetFlagTriggerResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    flagTrigger: (f = msg.getFlagTrigger()) && proto_autoops_flag_trigger_pb.FlagTrigger.toObject(includeInstance, f),
    url: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bucketeer.autoops.ResetFlagTriggerResponse}
 */
proto.bucketeer.autoops.ResetFlagTriggerResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bucketeer.autoops.ResetFlagTriggerResponse;
  return proto.bucketeer.autoops.ResetFlagTriggerResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bucketeer.autoops.ResetFlagTriggerResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bucketeer.autoops.ResetFlagTriggerResponse}
 */
proto.bucketeer.autoops.ResetFlagTriggerResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_autoops_flag_trigger_pb.FlagTrigger;
      reader.readMessage(value,proto_autoops_flag_trigger_pb.FlagTrigger.deserializeBinaryFromReader);
      msg.setFlagTrigger(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bucketeer.autoops.ResetFlagTriggerResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bucketeer.autoops.ResetFlagTriggerResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bucketeer.autoops.ResetFlagTriggerResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.ResetFlagTriggerResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFlagTrigger();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_autoops_flag_trigger_pb.FlagTrigger.serializeBinaryToWriter
    );
  }
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional FlagTrigger flag_trigger = 1;
 * @return {?proto.bucketeer.autoops.FlagTrigger}
 */
proto.bucketeer.autoops.ResetFlagTriggerResponse.prototype.getFlagTrigger = function() {
  return /** @type{?proto.bucketeer.autoops.FlagTrigger} */ (
    jspb.Message.getWrapperField(this, proto_autoops_flag_trigger_pb.FlagTrigger, 1));
};


/**
 * @param {?proto.bucketeer.autoops.FlagTrigger|undefined} value
 * @return {!proto.bucketeer.autoops.ResetFlagTriggerResponse} returns this
*/
proto.bucketeer.autoops.ResetFlagTriggerResponse.prototype.setFlagTrigger = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bucketeer.autoops.ResetFlagTriggerResponse} returns this
 */
proto.bucketeer.autoops.ResetFlagTriggerResponse.prototype.clearFlagTrigger = function() {
  return this.setFlagTrigger(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bucketeer.autoops.ResetFlagTriggerResponse.prototype.hasFlagTrigger = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string url = 2;
 * @return {string}
 */
proto.bucketeer.autoops.ResetFlagTriggerResponse.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bucketeer.autoops.ResetFlagTriggerResponse} returns this
 */
proto.bucketeer.autoops.ResetFlagTriggerResponse.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bucketeer.autoops.GetFlagTriggerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bucketeer.autoops.GetFlagTriggerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bucketeer.autoops.GetFlagTriggerRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.GetFlagTriggerRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    environmentNamespace: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bucketeer.autoops.GetFlagTriggerRequest}
 */
proto.bucketeer.autoops.GetFlagTriggerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bucketeer.autoops.GetFlagTriggerRequest;
  return proto.bucketeer.autoops.GetFlagTriggerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bucketeer.autoops.GetFlagTriggerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bucketeer.autoops.GetFlagTriggerRequest}
 */
proto.bucketeer.autoops.GetFlagTriggerRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEnvironmentNamespace(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bucketeer.autoops.GetFlagTriggerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bucketeer.autoops.GetFlagTriggerRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bucketeer.autoops.GetFlagTriggerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.GetFlagTriggerRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEnvironmentNamespace();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.bucketeer.autoops.GetFlagTriggerRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bucketeer.autoops.GetFlagTriggerRequest} returns this
 */
proto.bucketeer.autoops.GetFlagTriggerRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string environment_namespace = 2;
 * @return {string}
 */
proto.bucketeer.autoops.GetFlagTriggerRequest.prototype.getEnvironmentNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bucketeer.autoops.GetFlagTriggerRequest} returns this
 */
proto.bucketeer.autoops.GetFlagTriggerRequest.prototype.setEnvironmentNamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bucketeer.autoops.GetFlagTriggerResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.bucketeer.autoops.GetFlagTriggerResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bucketeer.autoops.GetFlagTriggerResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.GetFlagTriggerResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    flagTrigger: (f = msg.getFlagTrigger()) && proto_autoops_flag_trigger_pb.FlagTrigger.toObject(includeInstance, f),
    url: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bucketeer.autoops.GetFlagTriggerResponse}
 */
proto.bucketeer.autoops.GetFlagTriggerResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bucketeer.autoops.GetFlagTriggerResponse;
  return proto.bucketeer.autoops.GetFlagTriggerResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bucketeer.autoops.GetFlagTriggerResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bucketeer.autoops.GetFlagTriggerResponse}
 */
proto.bucketeer.autoops.GetFlagTriggerResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_autoops_flag_trigger_pb.FlagTrigger;
      reader.readMessage(value,proto_autoops_flag_trigger_pb.FlagTrigger.deserializeBinaryFromReader);
      msg.setFlagTrigger(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bucketeer.autoops.GetFlagTriggerResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bucketeer.autoops.GetFlagTriggerResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bucketeer.autoops.GetFlagTriggerResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.GetFlagTriggerResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFlagTrigger();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_autoops_flag_trigger_pb.FlagTrigger.serializeBinaryToWriter
    );
  }
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional FlagTrigger flag_trigger = 1;
 * @return {?proto.bucketeer.autoops.FlagTrigger}
 */
proto.bucketeer.autoops.GetFlagTriggerResponse.prototype.getFlagTrigger = function() {
  return /** @type{?proto.bucketeer.autoops.FlagTrigger} */ (
    jspb.Message.getWrapperField(this, proto_autoops_flag_trigger_pb.FlagTrigger, 1));
};


/**
 * @param {?proto.bucketeer.autoops.FlagTrigger|undefined} value
 * @return {!proto.bucketeer.autoops.GetFlagTriggerResponse} returns this
*/
proto.bucketeer.autoops.GetFlagTriggerResponse.prototype.setFlagTrigger = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bucketeer.autoops.GetFlagTriggerResponse} returns this
 */
proto.bucketeer.autoops.GetFlagTriggerResponse.prototype.clearFlagTrigger = function() {
  return this.setFlagTrigger(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bucketeer.autoops.GetFlagTriggerResponse.prototype.hasFlagTrigger = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string url = 2;
 * @return {string}
 */
proto.bucketeer.autoops.GetFlagTriggerResponse.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bucketeer.autoops.GetFlagTriggerResponse} returns this
 */
proto.bucketeer.autoops.GetFlagTriggerResponse.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bucketeer.autoops.ListFlagTriggersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bucketeer.autoops.ListFlagTriggersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bucketeer.autoops.ListFlagTriggersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.ListFlagTriggersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    featureId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    environmentNamespace: jspb.Message.getFieldWithDefault(msg, 2, ""),
    cursor: jspb.Message.getFieldWithDefault(msg, 3, 0),
    pageSize: jspb.Message.getFieldWithDefault(msg, 4, 0),
    orderBy: jspb.Message.getFieldWithDefault(msg, 5, 0),
    orderDirection: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bucketeer.autoops.ListFlagTriggersRequest}
 */
proto.bucketeer.autoops.ListFlagTriggersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bucketeer.autoops.ListFlagTriggersRequest;
  return proto.bucketeer.autoops.ListFlagTriggersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bucketeer.autoops.ListFlagTriggersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bucketeer.autoops.ListFlagTriggersRequest}
 */
proto.bucketeer.autoops.ListFlagTriggersRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFeatureId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEnvironmentNamespace(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCursor(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 5:
      var value = /** @type {!proto.bucketeer.autoops.ListFlagTriggersRequest.OrderBy} */ (reader.readEnum());
      msg.setOrderBy(value);
      break;
    case 6:
      var value = /** @type {!proto.bucketeer.autoops.ListFlagTriggersRequest.OrderDirection} */ (reader.readEnum());
      msg.setOrderDirection(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bucketeer.autoops.ListFlagTriggersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bucketeer.autoops.ListFlagTriggersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bucketeer.autoops.ListFlagTriggersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.ListFlagTriggersRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFeatureId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEnvironmentNamespace();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCursor();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getOrderBy();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getOrderDirection();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.bucketeer.autoops.ListFlagTriggersRequest.OrderBy = {
  DEFAULT: 0,
  CREATED_AT: 1,
  UPDATED_AT: 2
};

/**
 * @enum {number}
 */
proto.bucketeer.autoops.ListFlagTriggersRequest.OrderDirection = {
  ASC: 0,
  DESC: 1
};

/**
 * optional string feature_id = 1;
 * @return {string}
 */
proto.bucketeer.autoops.ListFlagTriggersRequest.prototype.getFeatureId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bucketeer.autoops.ListFlagTriggersRequest} returns this
 */
proto.bucketeer.autoops.ListFlagTriggersRequest.prototype.setFeatureId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string environment_namespace = 2;
 * @return {string}
 */
proto.bucketeer.autoops.ListFlagTriggersRequest.prototype.getEnvironmentNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bucketeer.autoops.ListFlagTriggersRequest} returns this
 */
proto.bucketeer.autoops.ListFlagTriggersRequest.prototype.setEnvironmentNamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 cursor = 3;
 * @return {number}
 */
proto.bucketeer.autoops.ListFlagTriggersRequest.prototype.getCursor = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bucketeer.autoops.ListFlagTriggersRequest} returns this
 */
proto.bucketeer.autoops.ListFlagTriggersRequest.prototype.setCursor = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 page_size = 4;
 * @return {number}
 */
proto.bucketeer.autoops.ListFlagTriggersRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.bucketeer.autoops.ListFlagTriggersRequest} returns this
 */
proto.bucketeer.autoops.ListFlagTriggersRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional OrderBy order_by = 5;
 * @return {!proto.bucketeer.autoops.ListFlagTriggersRequest.OrderBy}
 */
proto.bucketeer.autoops.ListFlagTriggersRequest.prototype.getOrderBy = function() {
  return /** @type {!proto.bucketeer.autoops.ListFlagTriggersRequest.OrderBy} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.bucketeer.autoops.ListFlagTriggersRequest.OrderBy} value
 * @return {!proto.bucketeer.autoops.ListFlagTriggersRequest} returns this
 */
proto.bucketeer.autoops.ListFlagTriggersRequest.prototype.setOrderBy = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional OrderDirection order_direction = 6;
 * @return {!proto.bucketeer.autoops.ListFlagTriggersRequest.OrderDirection}
 */
proto.bucketeer.autoops.ListFlagTriggersRequest.prototype.getOrderDirection = function() {
  return /** @type {!proto.bucketeer.autoops.ListFlagTriggersRequest.OrderDirection} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.bucketeer.autoops.ListFlagTriggersRequest.OrderDirection} value
 * @return {!proto.bucketeer.autoops.ListFlagTriggersRequest} returns this
 */
proto.bucketeer.autoops.ListFlagTriggersRequest.prototype.setOrderDirection = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bucketeer.autoops.ListFlagTriggersResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bucketeer.autoops.ListFlagTriggersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.bucketeer.autoops.ListFlagTriggersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bucketeer.autoops.ListFlagTriggersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.ListFlagTriggersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    flagTriggersList: jspb.Message.toObjectList(msg.getFlagTriggersList(),
    proto.bucketeer.autoops.ListFlagTriggersResponse.FlagTriggerWithUrl.toObject, includeInstance),
    cursor: jspb.Message.getFieldWithDefault(msg, 2, ""),
    totalCount: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bucketeer.autoops.ListFlagTriggersResponse}
 */
proto.bucketeer.autoops.ListFlagTriggersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bucketeer.autoops.ListFlagTriggersResponse;
  return proto.bucketeer.autoops.ListFlagTriggersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bucketeer.autoops.ListFlagTriggersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bucketeer.autoops.ListFlagTriggersResponse}
 */
proto.bucketeer.autoops.ListFlagTriggersResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bucketeer.autoops.ListFlagTriggersResponse.FlagTriggerWithUrl;
      reader.readMessage(value,proto.bucketeer.autoops.ListFlagTriggersResponse.FlagTriggerWithUrl.deserializeBinaryFromReader);
      msg.addFlagTriggers(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCursor(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bucketeer.autoops.ListFlagTriggersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bucketeer.autoops.ListFlagTriggersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bucketeer.autoops.ListFlagTriggersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.ListFlagTriggersResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFlagTriggersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.bucketeer.autoops.ListFlagTriggersResponse.FlagTriggerWithUrl.serializeBinaryToWriter
    );
  }
  f = message.getCursor();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTotalCount();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bucketeer.autoops.ListFlagTriggersResponse.FlagTriggerWithUrl.prototype.toObject = function(opt_includeInstance) {
  return proto.bucketeer.autoops.ListFlagTriggersResponse.FlagTriggerWithUrl.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bucketeer.autoops.ListFlagTriggersResponse.FlagTriggerWithUrl} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.ListFlagTriggersResponse.FlagTriggerWithUrl.toObject = function(includeInstance, msg) {
  var f, obj = {
    flagTrigger: (f = msg.getFlagTrigger()) && proto_autoops_flag_trigger_pb.FlagTrigger.toObject(includeInstance, f),
    url: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bucketeer.autoops.ListFlagTriggersResponse.FlagTriggerWithUrl}
 */
proto.bucketeer.autoops.ListFlagTriggersResponse.FlagTriggerWithUrl.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bucketeer.autoops.ListFlagTriggersResponse.FlagTriggerWithUrl;
  return proto.bucketeer.autoops.ListFlagTriggersResponse.FlagTriggerWithUrl.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bucketeer.autoops.ListFlagTriggersResponse.FlagTriggerWithUrl} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bucketeer.autoops.ListFlagTriggersResponse.FlagTriggerWithUrl}
 */
proto.bucketeer.autoops.ListFlagTriggersResponse.FlagTriggerWithUrl.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_autoops_flag_trigger_pb.FlagTrigger;
      reader.readMessage(value,proto_autoops_flag_trigger_pb.FlagTrigger.deserializeBinaryFromReader);
      msg.setFlagTrigger(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bucketeer.autoops.ListFlagTriggersResponse.FlagTriggerWithUrl.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bucketeer.autoops.ListFlagTriggersResponse.FlagTriggerWithUrl.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bucketeer.autoops.ListFlagTriggersResponse.FlagTriggerWithUrl} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.autoops.ListFlagTriggersResponse.FlagTriggerWithUrl.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFlagTrigger();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_autoops_flag_trigger_pb.FlagTrigger.serializeBinaryToWriter
    );
  }
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional FlagTrigger flag_trigger = 1;
 * @return {?proto.bucketeer.autoops.FlagTrigger}
 */
proto.bucketeer.autoops.ListFlagTriggersResponse.FlagTriggerWithUrl.prototype.getFlagTrigger = function() {
  return /** @type{?proto.bucketeer.autoops.FlagTrigger} */ (
    jspb.Message.getWrapperField(this, proto_autoops_flag_trigger_pb.FlagTrigger, 1));
};


/**
 * @param {?proto.bucketeer.autoops.FlagTrigger|undefined} value
 * @return {!proto.bucketeer.autoops.ListFlagTriggersResponse.FlagTriggerWithUrl} returns this
*/
proto.bucketeer.autoops.ListFlagTriggersResponse.FlagTriggerWithUrl.prototype.setFlagTrigger = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bucketeer.autoops.ListFlagTriggersResponse.FlagTriggerWithUrl} returns this
 */
proto.bucketeer.autoops.ListFlagTriggersResponse.FlagTriggerWithUrl.prototype.clearFlagTrigger = function() {
  return this.setFlagTrigger(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bucketeer.autoops.ListFlagTriggersResponse.FlagTriggerWithUrl.prototype.hasFlagTrigger = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string url = 2;
 * @return {string}
 */
proto.bucketeer.autoops.ListFlagTriggersResponse.FlagTriggerWithUrl.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bucketeer.autoops.ListFlagTriggersResponse.FlagTriggerWithUrl} returns this
 */
proto.bucketeer.autoops.ListFlagTriggersResponse.FlagTriggerWithUrl.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated FlagTriggerWithUrl flag_triggers = 1;
 * @return {!Array<!proto.bucketeer.autoops.ListFlagTriggersResponse.FlagTriggerWithUrl>}
 */
proto.bucketeer.autoops.ListFlagTriggersResponse.prototype.getFlagTriggersList = function() {
  return /** @type{!Array<!proto.bucketeer.autoops.ListFlagTriggersResponse.FlagTriggerWithUrl>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bucketeer.autoops.ListFlagTriggersResponse.FlagTriggerWithUrl, 1));
};


/**
 * @param {!Array<!proto.bucketeer.autoops.ListFlagTriggersResponse.FlagTriggerWithUrl>} value
 * @return {!proto.bucketeer.autoops.ListFlagTriggersResponse} returns this
*/
proto.bucketeer.autoops.ListFlagTriggersResponse.prototype.setFlagTriggersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.bucketeer.autoops.ListFlagTriggersResponse.FlagTriggerWithUrl=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bucketeer.autoops.ListFlagTriggersResponse.FlagTriggerWithUrl}
 */
proto.bucketeer.autoops.ListFlagTriggersResponse.prototype.addFlagTriggers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.bucketeer.autoops.ListFlagTriggersResponse.FlagTriggerWithUrl, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bucketeer.autoops.ListFlagTriggersResponse} returns this
 */
proto.bucketeer.autoops.ListFlagTriggersResponse.prototype.clearFlagTriggersList = function() {
  return this.setFlagTriggersList([]);
};


/**
 * optional string cursor = 2;
 * @return {string}
 */
proto.bucketeer.autoops.ListFlagTriggersResponse.prototype.getCursor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bucketeer.autoops.ListFlagTriggersResponse} returns this
 */
proto.bucketeer.autoops.ListFlagTriggersResponse.prototype.setCursor = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 total_count = 3;
 * @return {number}
 */
proto.bucketeer.autoops.ListFlagTriggersResponse.prototype.getTotalCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bucketeer.autoops.ListFlagTriggersResponse} returns this
 */
proto.bucketeer.autoops.ListFlagTriggersResponse.prototype.setTotalCount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


goog.object.extend(exports, proto.bucketeer.autoops);
