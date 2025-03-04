/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/
export declare class BgChannelsUserMetadata {
    channelCount: number;
    messagesSentCount: number;
    unseenMessageCount: number;
    unrespondedMessageCount: number;
    invitationsSentCount: number;
    invitationsReceivedCount: number;
    rejectedInvitationCount: number;
    acceptedInvitationCount: number;
    pendingInvitationCount: number;
    updatedAt?: string | null;
    constructor(attributes?: Partial<BgChannelsUserMetadata>);
}
