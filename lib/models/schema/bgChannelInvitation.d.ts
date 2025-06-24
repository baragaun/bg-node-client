export declare const BgChannelInvitationSchema: {
    title: string;
    version: number;
    primaryKey: string;
    type: string;
    properties: {
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
