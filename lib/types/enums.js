"use strict";
/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/
Object.defineProperty(exports, "__esModule", { value: true });
exports.MutationType = exports.ChannelEventType = exports.ChannelParticipantRole = exports.ChannelMessageType = exports.ChannelType = exports.ModelEventType = void 0;
var ModelEventType;
(function (ModelEventType) {
    ModelEventType["error"] = "error";
    ModelEventType["warning"] = "warning";
    ModelEventType["info"] = "info";
})(ModelEventType || (exports.ModelEventType = ModelEventType = {}));
var ChannelType;
(function (ChannelType) {
    ChannelType["unset"] = "unset";
    ChannelType["test"] = "test";
})(ChannelType || (exports.ChannelType = ChannelType = {}));
var ChannelMessageType;
(function (ChannelMessageType) {
    ChannelMessageType["unset"] = "unset";
    ChannelMessageType["test"] = "test";
})(ChannelMessageType || (exports.ChannelMessageType = ChannelMessageType = {}));
var ChannelParticipantRole;
(function (ChannelParticipantRole) {
    ChannelParticipantRole["unset"] = "unset";
    ChannelParticipantRole["test"] = "test";
})(ChannelParticipantRole || (exports.ChannelParticipantRole = ChannelParticipantRole = {}));
/**
 * Enum representing the type of channel event.
 */
var ChannelEventType;
(function (ChannelEventType) {
    /**
     * A channel message was created.
     */
    ChannelEventType["messageCreated"] = "messageCreated";
    /**
     * A channel message was deleted.
     */
    ChannelEventType["messageDeleted"] = "messageDeleted";
    /**
     * A channel message was updated.
     * For example, the creator of the message could have changed the message text.
     */
    ChannelEventType["messageUpdated"] = "messageUpdated";
    /**
     * A channel message was delivered to the recipient.
     * The channel message was saved into the database.
     */
    ChannelEventType["messageDelivered"] = "messageDelivered";
    /**
     * A channel message was seen by the recipient or a participant in a group channel.
     */
    ChannelEventType["messageSeen"] = "messageSeen";
    /**
     * A user started typing.
     * We will add support for this at a later time.
     */
    ChannelEventType["userStartedTyping"] = "userStartedTyping";
    /**
     * A user stopped typing.
     * We will add support for this at a later time.
     */
    ChannelEventType["userStoppedTyping"] = "userStoppedTyping";
    /**
     * A reaction (emoji) was added to a channel message.
     * We will add support for this at a later time.
     */
    ChannelEventType["reactionToMessageCreated"] = "reactionToMessageCreated";
    /**
     * A reaction (emoji) was removed from a channel message.
     * We will add support for this at a later time.
     */
    ChannelEventType["reactionToMessageDeleted"] = "reactionToMessageDeleted";
})(ChannelEventType || (exports.ChannelEventType = ChannelEventType = {}));
var MutationType;
(function (MutationType) {
    MutationType["create"] = "create";
    MutationType["update"] = "update";
    MutationType["delete"] = "delete";
})(MutationType || (exports.MutationType = MutationType = {}));
