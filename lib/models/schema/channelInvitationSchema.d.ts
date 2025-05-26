export declare const ChannelInvitationSchema: {
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
        autoAccept: {
            type: string;
            description: string;
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
        status: {
            type: string;
            enum: string[];
            enumType: string;
        };
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
        mm2ConversationId: {
            type: string;
            description: string;
        };
        mm2Id: {
            type: string;
            description: string;
        };
        syncedWithMm2At: {
            type: string;
            description: string;
            format: string;
        };
    };
    required: string[];
};
