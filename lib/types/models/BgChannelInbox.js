export class BgChannelInbox {
    userId = '';
    unseenMessages;
    unseenArchivedMessages;
    latestMessages;
    latestArchivedMessages;
    pendingInvitations;
    invitations;
    updatedAt;
    updatedBy;
    constructor(attributes) {
        if (attributes) {
            if (attributes.userId) {
                this.userId = attributes.userId;
            }
            if (attributes.unseenMessages) {
                this.unseenMessages = attributes.unseenMessages;
            }
            if (attributes.unseenArchivedMessages) {
                this.unseenArchivedMessages = attributes.unseenArchivedMessages;
            }
            if (attributes.latestMessages) {
                this.latestMessages = attributes.latestMessages;
            }
            if (attributes.latestArchivedMessages) {
                this.latestArchivedMessages = attributes.latestArchivedMessages;
            }
            if (attributes.pendingInvitations) {
                this.pendingInvitations = attributes.pendingInvitations;
            }
            if (attributes.invitations) {
                this.invitations = attributes.invitations;
            }
            if (attributes.updatedAt) {
                if (attributes.updatedAt instanceof Date) {
                    this.updatedAt = attributes.updatedAt;
                }
                else {
                    this.updatedAt = new Date(attributes.updatedAt);
                }
            }
            if (attributes.updatedBy) {
                this.updatedBy = attributes.updatedBy;
            }
        }
    }
}
//# sourceMappingURL=BgChannelInbox.js.map