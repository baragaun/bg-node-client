import { BaseModel } from './BaseModel.js';
import { ChannelInvitationStatus } from '../enums.js';
export class BgChannelInvitation extends BaseModel {
    // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
    channelId;
    recipientId = '';
    channelName;
    channelTopic;
    messageText;
    autoAccept;
    declineReasonTextId;
    dismissedFromInboxBySenderAt;
    dismissedFromInboxByRecipientAt;
    readByRecipientAt;
    status = ChannelInvitationStatus.unset;
    suspendedAt;
    suspendedBy;
    userSearchId;
    searchRank;
    // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<
    constructor(attributes) {
        super(attributes);
        if (attributes) {
            // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
            if (attributes.channelId !== undefined) {
                this.channelId = attributes.channelId;
            }
            if (attributes.recipientId !== undefined) {
                this.recipientId = attributes.recipientId;
            }
            if (attributes.channelName !== undefined) {
                this.channelName = attributes.channelName;
            }
            if (attributes.channelTopic !== undefined) {
                this.channelTopic = attributes.channelTopic;
            }
            if (attributes.messageText !== undefined) {
                this.messageText = attributes.messageText;
            }
            if (attributes.autoAccept !== undefined) {
                this.autoAccept = attributes.autoAccept;
            }
            if (attributes.declineReasonTextId !== undefined) {
                this.declineReasonTextId = attributes.declineReasonTextId;
            }
            if (attributes.dismissedFromInboxBySenderAt !== undefined && attributes.dismissedFromInboxBySenderAt !== '') {
                this.dismissedFromInboxBySenderAt = attributes.dismissedFromInboxBySenderAt;
            }
            if (attributes.dismissedFromInboxByRecipientAt !== undefined && attributes.dismissedFromInboxByRecipientAt !== '') {
                this.dismissedFromInboxByRecipientAt = attributes.dismissedFromInboxByRecipientAt;
            }
            if (attributes.readByRecipientAt !== undefined && attributes.readByRecipientAt !== '') {
                this.readByRecipientAt = attributes.readByRecipientAt;
            }
            if (attributes.status !== undefined) {
                this.status = attributes.status;
            }
            if (attributes.suspendedAt !== undefined && attributes.suspendedAt !== '') {
                this.suspendedAt = attributes.suspendedAt;
            }
            if (attributes.suspendedBy !== undefined) {
                this.suspendedBy = attributes.suspendedBy;
            }
            if (attributes.userSearchId !== undefined) {
                this.userSearchId = attributes.userSearchId;
            }
            if (attributes.searchRank === null ||
                attributes.searchRank === 0 ||
                (attributes.searchRank &&
                    !isNaN(attributes.searchRank))) {
                this.searchRank = attributes.searchRank;
            }
            // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
        }
    }
    static get searchFields() {
        return ['messageText'];
    }
}
//# sourceMappingURL=BgChannelInvitation.js.map