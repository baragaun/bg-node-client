/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/
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
    delete = "delete"
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
