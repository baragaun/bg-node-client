"use strict";
/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/
Object.defineProperty(exports, "__esModule", { value: true });
exports.BgChannelsUserMetadata = void 0;
class BgChannelsUserMetadata {
    channelCount = 0;
    messagesSentCount = 0;
    unseenMessageCount = 0;
    unrespondedMessageCount = 0;
    invitationsSentCount = 0;
    invitationsReceivedCount = 0;
    rejectedInvitationCount = 0;
    acceptedInvitationCount = 0;
    pendingInvitationCount = 0;
    updatedAt;
    constructor(attributes) {
        if (attributes) {
            if (attributes.channelCount === 0 ||
                (attributes.channelCount &&
                    !isNaN(attributes.channelCount))) {
                this.channelCount = attributes.channelCount;
            }
            if (attributes.messagesSentCount === 0 ||
                (attributes.messagesSentCount &&
                    !isNaN(attributes.messagesSentCount))) {
                this.messagesSentCount = attributes.messagesSentCount;
            }
            if (attributes.unseenMessageCount === 0 ||
                (attributes.unseenMessageCount &&
                    !isNaN(attributes.unseenMessageCount))) {
                this.unseenMessageCount = attributes.unseenMessageCount;
            }
            if (attributes.unrespondedMessageCount === 0 ||
                (attributes.unrespondedMessageCount &&
                    !isNaN(attributes.unrespondedMessageCount))) {
                this.unrespondedMessageCount = attributes.unrespondedMessageCount;
            }
            if (attributes.invitationsSentCount === 0 ||
                (attributes.invitationsSentCount &&
                    !isNaN(attributes.invitationsSentCount))) {
                this.invitationsSentCount = attributes.invitationsSentCount;
            }
            if (attributes.invitationsReceivedCount === 0 ||
                (attributes.invitationsReceivedCount &&
                    !isNaN(attributes.invitationsReceivedCount))) {
                this.invitationsReceivedCount = attributes.invitationsReceivedCount;
            }
            if (attributes.rejectedInvitationCount === 0 ||
                (attributes.rejectedInvitationCount &&
                    !isNaN(attributes.rejectedInvitationCount))) {
                this.rejectedInvitationCount = attributes.rejectedInvitationCount;
            }
            if (attributes.acceptedInvitationCount === 0 ||
                (attributes.acceptedInvitationCount &&
                    !isNaN(attributes.acceptedInvitationCount))) {
                this.acceptedInvitationCount = attributes.acceptedInvitationCount;
            }
            if (attributes.pendingInvitationCount === 0 ||
                (attributes.pendingInvitationCount &&
                    !isNaN(attributes.pendingInvitationCount))) {
                this.pendingInvitationCount = attributes.pendingInvitationCount;
            }
            if (attributes.updatedAt) {
                if (attributes.updatedAt instanceof Date) {
                    this.updatedAt = attributes.updatedAt;
                }
                else {
                    this.updatedAt = new Date(attributes.updatedAt);
                }
            }
        }
    }
}
exports.BgChannelsUserMetadata = BgChannelsUserMetadata;
