import { BaseModel } from './BaseModel.js';
import { ChannelInvitationStatus } from '../enums.js';
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
                this.dismissedFromInboxBySenderAt =
                    attributes.dismissedFromInboxBySenderAt;
            }
            if (attributes.dismissedFromInboxByRecipientAt) {
                this.dismissedFromInboxByRecipientAt =
                    attributes.dismissedFromInboxByRecipientAt;
            }
            if (attributes.readByRecipientAt) {
                this.readByRecipientAt = attributes.readByRecipientAt;
            }
            if (attributes.status) {
                this.status = attributes.status;
            }
            if (attributes.suspendedAt) {
                this.suspendedAt = attributes.suspendedAt;
            }
            if (attributes.suspendedBy) {
                this.suspendedBy = attributes.suspendedBy;
            }
            if (attributes.userSearchId) {
                this.userSearchId = attributes.userSearchId;
            }
            if (attributes.searchRank === 0 ||
                (attributes.searchRank && !isNaN(attributes.searchRank))) {
                this.searchRank = attributes.searchRank;
            }
        }
    }
    static get searchFields() {
        return ['messageText'];
    }
}
//# sourceMappingURL=BgChannelInvitation.js.map