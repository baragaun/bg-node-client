/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/
import { BaseModel } from './BaseModel.js';
export class BgChannelMessage extends BaseModel {
    channelId = '';
    replyToMessageId;
    channelMessageType;
    messageText;
    statuses;
    editedAt;
    suspendedAt;
    suspendedBy;
    constructor(attributes) {
        super(attributes);
        if (attributes) {
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
            if (attributes.statuses) {
                this.statuses = attributes.statuses;
            }
            if (attributes.metadata) {
                this.metadata = attributes.metadata;
            }
            if (attributes.editedAt) {
                this.editedAt = attributes.editedAt;
            }
            if (attributes.suspendedAt) {
                this.suspendedAt = attributes.suspendedAt;
            }
            if (attributes.suspendedBy) {
                this.suspendedBy = attributes.suspendedBy;
            }
        }
    }
    static get searchFields() {
        return ['messageText'];
    }
}
//# sourceMappingURL=BgChannelMessage.js.map