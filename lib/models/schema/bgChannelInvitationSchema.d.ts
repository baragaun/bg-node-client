export declare const BgChannelInvitationSchema: {
    version: number;
    primaryKey: string;
    type: string;
    properties: {
        id: {
            type: string;
            maxLength: number;
        };
        adminNotes: {
            type: string;
        };
        metadata: {};
        createdAt: {
            type: string;
            format: string;
        };
        createdBy: {
            type: string;
            maxLength: number;
        };
        updatedAt: {
            type: string;
            format: string;
        };
        updatedBy: {
            type: string;
            maxLength: number;
        };
        deletedAt: {
            type: string;
            format: string;
        };
        deletedBy: {
            type: string;
            maxLength: number;
        };
        channelId: {
            type: string;
            maxLength: number;
        };
        recipientId: {
            type: string;
            maxLength: number;
        };
        channelName: {
            type: string;
        };
        channelTopic: {
            type: string;
        };
        messageText: {
            type: string;
        };
        declineReasonTextId: {
            type: string;
        };
        dismissedFromInboxBySenderAt: {
            type: string;
            format: string;
        };
        dismissedFromInboxByRecipientAt: {
            type: string;
            format: string;
        };
        readByRecipientAt: {
            type: string;
            format: string;
        };
        status: {};
        suspendedAt: {
            type: string;
            format: string;
        };
        suspendedBy: {
            type: string;
            maxLength: number;
        };
        userSearchId: {
            type: string;
            maxLength: number;
        };
        searchRank: {
            type: string;
        };
    };
    required: string[];
};
