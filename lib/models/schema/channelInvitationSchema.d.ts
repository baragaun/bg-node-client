export declare const ChannelInvitationSchema: {
    title: string;
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
            nullable: boolean;
        };
        metadata: {
            type: string;
            properties: {
                updatedAt: {
                    type: string;
                    format: string;
                    nullable: boolean;
                };
            };
            nullable: boolean;
        };
        createdAt: {
            type: string;
            format: string;
        };
        createdBy: {
            type: string;
            maxLength: number;
            nullable: boolean;
        };
        updatedAt: {
            type: string;
            format: string;
            nullable: boolean;
        };
        updatedBy: {
            type: string;
            maxLength: number;
            nullable: boolean;
        };
        deletedAt: {
            type: string;
            format: string;
            nullable: boolean;
        };
        deletedBy: {
            type: string;
            maxLength: number;
            nullable: boolean;
        };
        channelId: {
            type: string;
            maxLength: number;
            nullable: boolean;
        };
        recipientId: {
            type: string;
            maxLength: number;
        };
        channelName: {
            type: string;
            nullable: boolean;
        };
        channelTopic: {
            type: string;
            nullable: boolean;
        };
        messageText: {
            type: string;
            nullable: boolean;
        };
        autoAccept: {
            type: string;
            description: string;
            nullable: boolean;
        };
        declineReasonTextId: {
            type: string;
            nullable: boolean;
        };
        dismissedFromInboxBySenderAt: {
            type: string;
            format: string;
            nullable: boolean;
        };
        dismissedFromInboxByRecipientAt: {
            type: string;
            format: string;
            nullable: boolean;
        };
        readByRecipientAt: {
            type: string;
            format: string;
            nullable: boolean;
        };
        status: {
            type: string;
            enum: string[];
        };
        syncedToAnalyticsAt: {
            type: string;
            format: string;
            nullable: boolean;
        };
        suspendedAt: {
            type: string;
            format: string;
            nullable: boolean;
        };
        suspendedBy: {
            type: string;
            maxLength: number;
            nullable: boolean;
        };
        userSearchId: {
            type: string;
            maxLength: number;
            nullable: boolean;
        };
        searchRank: {
            type: string;
            nullable: boolean;
        };
    };
    required: string[];
};
