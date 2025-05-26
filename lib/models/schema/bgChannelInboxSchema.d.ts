export declare const BgChannelInboxSchema: {
    $schema: string;
    $id: string;
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
        };
        metadata: {
            type: string;
        };
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
        unseenMessages: {
            type: string;
        };
        unseenSystemMessages: {
            type: string;
        };
        unseenArchivedMessages: {
            type: string;
        };
        latestMessages: {
            type: string;
        };
        latestArchivedMessages: {
            type: string;
        };
        pendingInvitations: {
            type: string;
        };
        invitations: {
            type: string;
        };
        itemIdHash: {
            type: string;
            description: string;
        };
        channelsExceedMaxCount: {
            type: string;
        };
        invitationsExceedMaxCount: {
            type: string;
        };
    };
    required: string[];
};
