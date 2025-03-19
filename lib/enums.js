/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/
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
    MutationType["replace"] = "replace";
})(MutationType || (MutationType = {}));
export var AppEnvironment;
(function (AppEnvironment) {
    AppEnvironment["test"] = "test";
    AppEnvironment["development"] = "development";
    AppEnvironment["staging"] = "staging";
    AppEnvironment["production"] = "production";
})(AppEnvironment || (AppEnvironment = {}));
export var ChannelInvitationStatus;
(function (ChannelInvitationStatus) {
    ChannelInvitationStatus["created"] = "created";
    ChannelInvitationStatus["accepted"] = "accepted";
    ChannelInvitationStatus["declined"] = "declined";
    ChannelInvitationStatus["unset"] = "unset";
})(ChannelInvitationStatus || (ChannelInvitationStatus = {}));
export var ClientInfoStoreType;
(function (ClientInfoStoreType) {
    ClientInfoStoreType["localStorage"] = "localStorage";
    ClientInfoStoreType["db"] = "db";
    ClientInfoStoreType["delegated"] = "delegated";
})(ClientInfoStoreType || (ClientInfoStoreType = {}));
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
    ModelType["MyUser"] = "MyUser";
    ModelType["User"] = "User";
    ModelType["UserInbox"] = "UserInbox";
    ModelType["ClientInfo"] = "ClientInfo";
})(ModelType || (ModelType = {}));
export var NotificationMethod;
(function (NotificationMethod) {
    NotificationMethod["auto"] = "auto";
    NotificationMethod["email"] = "email";
    NotificationMethod["inAppNotification"] = "inAppNotification";
    NotificationMethod["off"] = "off";
    NotificationMethod["pushNotification"] = "pushNotification";
    NotificationMethod["sms"] = "sms";
})(NotificationMethod || (NotificationMethod = {}));
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
export var HttpHeaderName;
(function (HttpHeaderName) {
    HttpHeaderName["authorization"] = "Authorization";
    HttpHeaderName["contentType"] = "Content-Type";
    HttpHeaderName["acceptLanguage"] = "accept-language";
    HttpHeaderName["adminUserId"] = "x-admin-user-id";
    HttpHeaderName["authType"] = "x-authorization-auth-type";
    HttpHeaderName["consumer"] = "x-consumer";
    HttpHeaderName["consumerOs"] = "x-consumer-os";
    HttpHeaderName["consumerVersion"] = "x-consumer-version";
    HttpHeaderName["deviceUuid"] = "x-device";
    HttpHeaderName["forwardedFor"] = "x-forwarded-for";
    HttpHeaderName["hmacSignature"] = "x-authorization-content-sha256";
    HttpHeaderName["hmacTimestamp"] = "x-authorization-timestamp";
    HttpHeaderName["locale"] = "x-locale";
    HttpHeaderName["pushNotificationToken"] = "x-pn-token";
    HttpHeaderName["timezone"] = "x-timezone";
    HttpHeaderName["userId"] = "x-user-id";
})(HttpHeaderName || (HttpHeaderName = {}));
export var CachePolicy;
(function (CachePolicy) {
    /**
     * Ignore cache, retrieve data from network.
     */
    CachePolicy["network"] = "network";
    /**
     * Retrieve data from network, if the network is available.
     */
    CachePolicy["networkFirst"] = "network-first";
    /**
     * Retrieve data from cache only.
     */
    CachePolicy["cache"] = "cache";
    /**
     * Retrieve data from cache, if it is available there and not stale.
     */
    CachePolicy["cacheFirst"] = "cache-first";
})(CachePolicy || (CachePolicy = {}));
export var UserIdentType;
(function (UserIdentType) {
    UserIdentType["any"] = "any";
    UserIdentType["email"] = "email";
    UserIdentType["id"] = "id";
    UserIdentType["inviteCode"] = "inviteCode";
    UserIdentType["oauthProfileUrl"] = "oauthProfileUrl";
    UserIdentType["oauthUserId"] = "oauthUserId";
    UserIdentType["phoneNumber"] = "phoneNumber";
    UserIdentType["userHandle"] = "userHandle";
})(UserIdentType || (UserIdentType = {}));
export var CookieChoiceTextId;
(function (CookieChoiceTextId) {
    CookieChoiceTextId["acceptAll"] = "acceptAll";
    CookieChoiceTextId["acceptEssentials"] = "acceptEssentials";
    CookieChoiceTextId["rejectAll"] = "rejectAll";
})(CookieChoiceTextId || (CookieChoiceTextId = {}));
export var MultiStepActionType;
(function (MultiStepActionType) {
    MultiStepActionType["resetPassword"] = "resetPassword";
    MultiStepActionType["tokenSignIn"] = "tokenSignIn";
    MultiStepActionType["unset"] = "unset";
    MultiStepActionType["updateEmail"] = "updateEmail";
    MultiStepActionType["updatePassword"] = "updatePassword";
    MultiStepActionType["updatePhoneNumber"] = "updatePhoneNumber";
    MultiStepActionType["verifyEmail"] = "verifyEmail";
    MultiStepActionType["verifyPhoneNumber"] = "verifyPhoneNumber";
    MultiStepActionType["verifyPhoneSignupOnSignup"] = "verifyPhoneSignupOnSignup";
})(MultiStepActionType || (MultiStepActionType = {}));
export var MultiStepActionEventType;
(function (MultiStepActionEventType) {
    /** The multi-step action failed.
     * Check `SidMultiStepActionProgress.result` for the reason. */
    MultiStepActionEventType["failed"] = "failed";
    /** The notification (i.e. email) has been sent successfully. */
    MultiStepActionEventType["notificationSent"] = "notificationSent";
    /** The notification (i.e. email) has failed to send. */
    MultiStepActionEventType["notificationFailed"] = "notificationFailed";
    /** The multi-step process has likely ended with an exception.
     * Check `SidMultiStepActionProgress.result` for the reason. */
    MultiStepActionEventType["other"] = "other";
    /** The user supplied password was in correct. */
    MultiStepActionEventType["passwordMismatch"] = "passwordMismatch";
    /** The token has successfully been verified and the process finished. */
    MultiStepActionEventType["success"] = "success";
    /** The action has timed out. */
    MultiStepActionEventType["timedOut"] = "timedOut";
    /** The user has entered an incorrect confirmation token. */
    MultiStepActionEventType["tokenFailed"] = "tokenFailed";
})(MultiStepActionEventType || (MultiStepActionEventType = {}));
export var MultiStepActionStatus;
(function (MultiStepActionStatus) {
    MultiStepActionStatus["created"] = "created";
    MultiStepActionStatus["finished"] = "finished";
    MultiStepActionStatus["started"] = "started";
})(MultiStepActionStatus || (MultiStepActionStatus = {}));
export var MultiStepActionSendNotificationResult;
(function (MultiStepActionSendNotificationResult) {
    MultiStepActionSendNotificationResult["failed"] = "failed";
    MultiStepActionSendNotificationResult["ok"] = "ok";
    MultiStepActionSendNotificationResult["phoneNumberInvalid"] = "phoneNumberInvalid";
})(MultiStepActionSendNotificationResult || (MultiStepActionSendNotificationResult = {}));
export var MultiStepActionResult;
(function (MultiStepActionResult) {
    MultiStepActionResult["confirmTokenMismatch"] = "confirmTokenMismatch";
    MultiStepActionResult["dataValidationFailed"] = "dataValidationFailed";
    MultiStepActionResult["deviceNotFound"] = "deviceNotFound";
    MultiStepActionResult["emailMismatch"] = "emailMismatch";
    MultiStepActionResult["emailNotVerified"] = "emailNotVerified";
    MultiStepActionResult["error"] = "error";
    MultiStepActionResult["expired"] = "expired";
    MultiStepActionResult["invalidEmail"] = "invalidEmail";
    MultiStepActionResult["missingEmail"] = "missingEmail";
    MultiStepActionResult["missingPhoneNumber"] = "missingPhoneNumber";
    MultiStepActionResult["notFound"] = "notFound";
    MultiStepActionResult["ok"] = "ok";
    MultiStepActionResult["passed"] = "passed";
    MultiStepActionResult["passwordMismatch"] = "passwordMismatch";
    MultiStepActionResult["passwordUpdated"] = "passwordUpdated";
    MultiStepActionResult["phoneNumberInvalid"] = "phoneNumberInvalid";
    MultiStepActionResult["phoneNumberMismatch"] = "phoneNumberMismatch";
    MultiStepActionResult["phoneNumberNotVerified"] = "phoneNumberNotVerified";
    MultiStepActionResult["systemError"] = "systemError";
    MultiStepActionResult["unset"] = "unset";
    MultiStepActionResult["userFailedValidation"] = "userFailedValidation";
    MultiStepActionResult["userNotFound"] = "userNotFound";
    MultiStepActionResult["userNotSignedIn"] = "userNotSignedIn";
})(MultiStepActionResult || (MultiStepActionResult = {}));
//# sourceMappingURL=enums.js.map