export declare const BgChannelsUserMetadataSchema: {
    $schema: string;
    $id: string;
    title: string;
    version: number;
    primaryKey: string;
    type: string;
    properties: {
        channelCount: {
            type: string;
        };
        messagesSentCount: {
            type: string;
        };
        unseenMessageCount: {
            type: string;
        };
        unrespondedMessageCount: {
            type: string;
        };
        invitationsSentCount: {
            type: string;
        };
        invitationsReceivedCount: {
            type: string;
        };
        rejectedInvitationCount: {
            type: string;
        };
        acceptedInvitationCount: {
            type: string;
        };
        pendingInvitationCount: {
            type: string;
        };
        updatedAt: {
            type: string;
            format: string;
        };
    };
    required: string[];
};
