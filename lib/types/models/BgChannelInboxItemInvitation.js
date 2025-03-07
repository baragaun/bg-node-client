import { ChannelInvitationStatus } from '../../enums.js';
export class BgChannelInboxItemInvitation {
    id = '';
    channelId;
    messageText;
    readByRecipientAt;
    status = ChannelInvitationStatus.unset;
    createdAt = new Date();
    createdBy;
    recipientId;
    constructor(attributes) {
        if (attributes) {
            if (attributes.id) {
                this.id = attributes.id;
            }
            if (attributes.channelId) {
                this.channelId = attributes.channelId;
            }
            if (attributes.messageText) {
                this.messageText = attributes.messageText;
            }
            if (attributes.readByRecipientAt) {
                this.readByRecipientAt = attributes.readByRecipientAt;
            }
            if (attributes.status) {
                this.status = attributes.status;
            }
            if (attributes.createdAt) {
                this.createdAt = attributes.createdAt;
            }
            if (attributes.createdBy) {
                this.createdBy = attributes.createdBy;
            }
            if (attributes.recipientId) {
                this.recipientId = attributes.recipientId;
            }
        }
    }
}
//# sourceMappingURL=BgChannelInboxItemInvitation.js.map