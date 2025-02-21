"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelMessage = void 0;
const BaseModel_js_1 = require("./BaseModel.js");
class ChannelMessage extends BaseModel_js_1.BaseModel {
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
                if (attributes.editedAt instanceof Date) {
                    this.editedAt = attributes.editedAt;
                }
                else {
                    this.editedAt = new Date(attributes.editedAt);
                }
            }
            if (attributes.suspendedAt) {
                if (attributes.suspendedAt instanceof Date) {
                    this.suspendedAt = attributes.suspendedAt;
                }
                else {
                    this.suspendedAt = new Date(attributes.suspendedAt);
                }
            }
            if (attributes.suspendedBy) {
                this.suspendedBy = attributes.suspendedBy;
            }
        }
    }
}
exports.ChannelMessage = ChannelMessage;
