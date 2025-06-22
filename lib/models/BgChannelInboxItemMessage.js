export class BgChannelInboxItemMessage {
    // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
    id = '';
    channelId = '';
    replyToMessageId;
    channelMessageType;
    messageText;
    senderUserHandle;
    senderFirstName;
    senderLastName;
    senderAvatarUrl;
    seenAt;
    isArchived;
    createdAt = new Date();
    createdBy;
    updatedAt;
    updatedBy;
    userIds;
    // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<
    constructor(attributes) {
        if (attributes) {
            // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
            if (attributes.id) {
                this.id = attributes.id;
            }
            if (attributes.channelId) {
                this.channelId = attributes.channelId;
            }
            if (attributes.replyToMessageId) {
                this.replyToMessageId = attributes.replyToMessageId;
            }
            if (attributes.channelMessageType) {
                this.channelMessageType = attributes.channelMessageType;
            }
            if (attributes.messageText) {
                this.messageText = attributes.messageText;
            }
            if (attributes.senderUserHandle) {
                this.senderUserHandle = attributes.senderUserHandle;
            }
            if (attributes.senderFirstName) {
                this.senderFirstName = attributes.senderFirstName;
            }
            if (attributes.senderLastName) {
                this.senderLastName = attributes.senderLastName;
            }
            if (attributes.senderAvatarUrl) {
                this.senderAvatarUrl = attributes.senderAvatarUrl;
            }
            if (attributes.seenAt) {
                this.seenAt = attributes.seenAt;
            }
            if (attributes.isArchived === true || attributes.isArchived === false) {
                this.isArchived = attributes.isArchived;
            }
            if (attributes.createdAt) {
                this.createdAt = attributes.createdAt;
            }
            if (attributes.createdBy) {
                this.createdBy = attributes.createdBy;
            }
            if (attributes.updatedAt) {
                this.updatedAt = attributes.updatedAt;
            }
            if (attributes.updatedBy) {
                this.updatedBy = attributes.updatedBy;
            }
            if (attributes.userIds) {
                this.userIds = attributes.userIds;
            }
            // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
        }
    }
}
//# sourceMappingURL=BgChannelInboxItemMessage.js.map