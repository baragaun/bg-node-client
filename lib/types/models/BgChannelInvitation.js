import { ChannelInvitationStatus } from '../enums.js';
import { BaseModel } from './BaseModel.js';
export class BgChannelInvitation extends BaseModel {
    channelId;
    recipientId = '';
    channelName;
    channelTopic;
    messageText;
    declineReasonTextId;
    dismissedFromInboxBySenderAt;
    dismissedFromInboxByRecipientAt;
    readByRecipientAt;
    status = ChannelInvitationStatus.unset;
    suspendedAt;
    suspendedBy;
    userSearchId;
    searchRank;
    constructor(attributes) {
        super(attributes);
        if (attributes) {
            // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
            if (attributes.channelId) {
                this.channelId = attributes.channelId;
            }
            if (attributes.recipientId) {
                this.recipientId = attributes.recipientId;
            }
            if (attributes.channelName) {
                this.channelName = attributes.channelName;
            }
            if (attributes.channelTopic) {
                this.channelTopic = attributes.channelTopic;
            }
            if (attributes.messageText) {
                this.messageText = attributes.messageText;
            }
            if (attributes.declineReasonTextId) {
                this.declineReasonTextId = attributes.declineReasonTextId;
            }
            if (attributes.dismissedFromInboxBySenderAt) {
                if (attributes.dismissedFromInboxBySenderAt instanceof Date) {
                    this.dismissedFromInboxBySenderAt = attributes.dismissedFromInboxBySenderAt;
                }
                else {
                    this.dismissedFromInboxBySenderAt = new Date(attributes.dismissedFromInboxBySenderAt);
                }
            }
            if (attributes.dismissedFromInboxByRecipientAt) {
                if (attributes.dismissedFromInboxByRecipientAt instanceof Date) {
                    this.dismissedFromInboxByRecipientAt = attributes.dismissedFromInboxByRecipientAt;
                }
                else {
                    this.dismissedFromInboxByRecipientAt = new Date(attributes.dismissedFromInboxByRecipientAt);
                }
            }
            if (attributes.readByRecipientAt) {
                if (attributes.readByRecipientAt instanceof Date) {
                    this.readByRecipientAt = attributes.readByRecipientAt;
                }
                else {
                    this.readByRecipientAt = new Date(attributes.readByRecipientAt);
                }
            }
            if (attributes.status) {
                this.status = attributes.status;
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
            if (attributes.userSearchId) {
                this.userSearchId = attributes.userSearchId;
            }
            if (attributes.searchRank === 0 ||
                (attributes.searchRank &&
                    !isNaN(attributes.searchRank))) {
                this.searchRank = attributes.searchRank;
            }
        }
    }
}
//# sourceMappingURL=BgChannelInvitation.js.map