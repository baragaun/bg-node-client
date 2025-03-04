export declare const BgChannelInboxSchema: {
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
        userId: {
            type: string;
            maxLength: number;
        };
        unseenMessages: {};
        unseenArchivedMessages: {};
        latestMessages: {};
        latestArchivedMessages: {};
        pendingInvitations: {};
        invitations: {};
        itemIdHash: {
            description: string;
            type: string;
        };
    };
    required: string[];
};
