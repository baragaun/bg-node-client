/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/
export var DbType;
(function (DbType) {
    DbType["mem"] = "mem";
    DbType["rxdb"] = "rxdb";
})(DbType || (DbType = {}));
export var ModelEventType;
(function (ModelEventType) {
    ModelEventType["error"] = "error";
    ModelEventType["warning"] = "warning";
    ModelEventType["info"] = "info";
})(ModelEventType || (ModelEventType = {}));
export var ChannelType;
(function (ChannelType) {
    ChannelType["unset"] = "unset";
    ChannelType["test"] = "test";
})(ChannelType || (ChannelType = {}));
export var ChannelMessageType;
(function (ChannelMessageType) {
    ChannelMessageType["unset"] = "unset";
    ChannelMessageType["test"] = "test";
})(ChannelMessageType || (ChannelMessageType = {}));
export var ChannelParticipantRole;
(function (ChannelParticipantRole) {
    ChannelParticipantRole["unset"] = "unset";
    ChannelParticipantRole["test"] = "test";
})(ChannelParticipantRole || (ChannelParticipantRole = {}));
/**
 * Enum representing the type of channel event.
 */
export var ChannelEventType;
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
})(ChannelEventType || (ChannelEventType = {}));
export var MutationType;
(function (MutationType) {
    MutationType["create"] = "create";
    MutationType["update"] = "update";
    MutationType["delete"] = "delete";
})(MutationType || (MutationType = {}));
export var UserRole;
(function (UserRole) {
    UserRole["admin"] = "admin";
    UserRole["support"] = "support";
    UserRole["staff"] = "staff";
    UserRole["qa"] = "qa";
    UserRole["test"] = "test";
})(UserRole || (UserRole = {}));
export var AppFeature;
(function (AppFeature) {
    AppFeature["testFeatures1"] = "testFeatures1";
    AppFeature["testFeatures2"] = "testFeatures2";
})(AppFeature || (AppFeature = {}));
export var AuthType;
(function (AuthType) {
    AuthType["none"] = "none";
    AuthType["oauth"] = "oauth";
    AuthType["token"] = "token";
    AuthType["hmac"] = "hmac";
    AuthType["saml"] = "saml";
})(AuthType || (AuthType = {}));
export var UiLanguage;
(function (UiLanguage) {
    UiLanguage["ar"] = "ar";
    UiLanguage["en"] = "en";
    UiLanguage["es"] = "es";
    UiLanguage["id"] = "id";
    UiLanguage["ru"] = "ru";
    UiLanguage["so"] = "so";
})(UiLanguage || (UiLanguage = {}));
export var ModelType;
(function (ModelType) {
    ModelType["Channel"] = "Channel";
    ModelType["ChannelInvitation"] = "ChannelInvitation";
    ModelType["ChannelMessage"] = "ChannelMessage";
    ModelType["ChannelParticipant"] = "ChannelParticipant";
    ModelType["User"] = "User";
})(ModelType || (ModelType = {}));
export var NotificationType;
(function (NotificationType) {
    NotificationType["accountDeletedConfirmation"] = "accountDeletedConfirmation";
    NotificationType["channelInvitationAccepted"] = "channelInvitationAccepted";
    NotificationType["channelInvitationDeclined"] = "channelInvitationDeclined";
    NotificationType["channelInvitationReceived"] = "channelInvitationReceived";
    NotificationType["channelMessageReceived"] = "channelMessageReceived";
    NotificationType["completeProfile"] = "completeProfile";
    NotificationType["completeSignUp"] = "completeSignUp";
    NotificationType["matchesRecommendations"] = "matchesRecommendations";
    NotificationType["newPrivacyRules"] = "newPrivacyRules";
    NotificationType["newsletter"] = "newsletter";
    NotificationType["resetPasswordConfirmation"] = "resetPasswordConfirmation";
    NotificationType["resetPasswordConfirmToken"] = "resetPasswordConfirmToken";
    NotificationType["sendFirstInvitation"] = "sendFirstInvitation";
    NotificationType["unset"] = "unset";
    NotificationType["welcome"] = "welcome";
})(NotificationType || (NotificationType = {}));
//# sourceMappingURL=enums.js.map