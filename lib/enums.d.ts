/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/
export declare enum DbType {
    mem = "mem",
    rxdb = "rxdb"
}
export declare enum ModelEventType {
    error = "error",
    warning = "warning",
    info = "info"
}
export declare enum ChannelType {
    unset = "unset",
    test = "test"
}
export declare enum ChannelMessageType {
    unset = "unset",
    test = "test"
}
export declare enum ChannelParticipantRole {
    unset = "unset",
    test = "test"
}
/**
 * Enum representing the type of channel event.
 */
export declare enum ChannelEventType {
    /**
     * A channel message was created.
     */
    messageCreated = "messageCreated",
    /**
     * A channel message was deleted.
     */
    messageDeleted = "messageDeleted",
    /**
     * A channel message was updated.
     * For example, the creator of the message could have changed the message text.
     */
    messageUpdated = "messageUpdated",
    /**
     * A channel message was delivered to the recipient.
     * The channel message was saved into the database.
     */
    messageDelivered = "messageDelivered",
    /**
     * A channel message was seen by the recipient or a participant in a group channel.
     */
    messageSeen = "messageSeen",
    /**
     * A user started typing.
     * We will add support for this at a later time.
     */
    userStartedTyping = "userStartedTyping",
    /**
     * A user stopped typing.
     * We will add support for this at a later time.
     */
    userStoppedTyping = "userStoppedTyping",
    /**
     * A reaction (emoji) was added to a channel message.
     * We will add support for this at a later time.
     */
    reactionToMessageCreated = "reactionToMessageCreated",
    /**
     * A reaction (emoji) was removed from a channel message.
     * We will add support for this at a later time.
     */
    reactionToMessageDeleted = "reactionToMessageDeleted"
}
export declare enum MutationType {
    create = "create",
    update = "update",
    delete = "delete",
    replace = "replace"
}
export declare enum AppEnvironment {
    test = "test",
    development = "development",
    staging = "staging",
    production = "production"
}
export declare enum ChannelInvitationStatus {
    created = "created",
    accepted = "accepted",
    declined = "declined",
    unset = "unset"
}
export declare enum UserRole {
    admin = "admin",
    support = "support",
    staff = "staff",
    qa = "qa",// person is a staff member working in QA
    test = "test"
}
export declare enum AppFeature {
    testFeatures1 = "testFeatures1",
    testFeatures2 = "testFeatures2"
}
export declare enum AuthType {
    none = "none",
    oauth = "oauth",
    token = "token",
    hmac = "hmac",
    saml = "saml"
}
export declare enum UiLanguage {
    ar = "ar",// Arabic
    en = "en",// English
    es = "es",// Spanish
    id = "id",// Indonesian
    ru = "ru",// Russian
    so = "so"
}
export declare enum ModelType {
    Channel = "Channel",
    ChannelInvitation = "ChannelInvitation",
    ChannelMessage = "ChannelMessage",
    ChannelParticipant = "ChannelParticipant",
    MyUser = "MyUser",
    User = "User",
    UserInbox = "UserInbox"
}
export declare enum NotificationMethod {
    auto = "auto",
    email = "email",
    inAppNotification = "inAppNotification",
    off = "off",
    pushNotification = "pushNotification",
    sms = "sms"
}
export declare enum NotificationType {
    accountDeletedConfirmation = "accountDeletedConfirmation",
    channelInvitationAccepted = "channelInvitationAccepted",
    channelInvitationDeclined = "channelInvitationDeclined",
    channelInvitationReceived = "channelInvitationReceived",
    channelMessageReceived = "channelMessageReceived",
    completeProfile = "completeProfile",
    completeSignUp = "completeSignUp",
    matchesRecommendations = "matchesRecommendations",
    newPrivacyRules = "newPrivacyRules",
    newsletter = "newsletter",
    resetPasswordConfirmation = "resetPasswordConfirmation",
    resetPasswordConfirmToken = "resetPasswordConfirmToken",
    sendFirstInvitation = "sendFirstInvitation",
    unset = "unset",
    welcome = "welcome"
}
export declare enum HttpHeaderName {
    authorization = "Authorization",
    contentType = "Content-Type",
    acceptLanguage = "accept-language",
    adminUserId = "x-admin-user-id",
    authType = "x-authorization-auth-type",
    consumer = "x-consumer",
    consumerOs = "x-consumer-os",
    consumerVersion = "x-consumer-version",
    deviceUuid = "x-device",
    forwardedFor = "x-forwarded-for",
    hmacSignature = "x-authorization-content-sha256",
    hmacTimestamp = "x-authorization-timestamp",
    locale = "x-locale",
    pushNotificationToken = "x-pn-token",
    timezone = "x-timezone",
    userId = "x-user-id"
}
export declare enum CachePolicy {
    /**
     * Ignore cache, retrieve data from network.
     */
    network = "network",
    /**
     * Retrieve data from network, if the network is available.
     */
    networkFirst = "network-first",
    /**
     * Retrieve data from cache only.
     */
    cache = "cache",
    /**
     * Retrieve data from cache, if it is available there and not stale.
     */
    cacheFirst = "cache-first"
}
export declare enum UserIdentType {
    any = "any",
    email = "email",
    id = "id",
    inviteCode = "inviteCode",
    oauthProfileUrl = "oauthProfileUrl",
    oauthUserId = "oauthUserId",
    phoneNumber = "phoneNumber",
    userHandle = "userHandle"
}
export declare enum CookieChoiceTextId {
    acceptAll = "acceptAll",
    acceptEssentials = "acceptEssentials",
    aejectAll = "rejectAll"
}
