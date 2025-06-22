/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/
import { BaseModel } from './BaseModel.js';
export class BgChannelMessage extends BaseModel {
    // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
    channelId = '';
    replyToMessageId;
    channelMessageType;
    messageText;
    statuses;
    editedAt;
    suspendedAt;
    suspendedBy;
    // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<
    constructor(attributes) {
        super(attributes);
        if (attributes) {
            // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
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
            // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
        }
    }
    static get searchFields() {
        return ['messageText'];
    }
}
//# sourceMappingURL=BgChannelMessage.js.map