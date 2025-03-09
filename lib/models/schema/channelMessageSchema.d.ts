export declare const ChannelMessageSchema: {
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
        replyToMessageId: {
            type: string;
            maxLength: number;
        };
        channelMessageType: {};
        messageText: {
            type: string;
        };
        statuses: {};
        editedAt: {
            type: string;
            format: string;
        };
        suspendedAt: {
            type: string;
            format: string;
        };
        suspendedBy: {
            type: string;
            maxLength: number;
        };
        mm2ConversationId: {
            description: string;
            type: string;
        };
        mm2Id: {
            description: string;
            type: string;
        };
        syncedWithMm2At: {
            description: string;
            type: string;
            format: string;
        };
    };
    required: string[];
};
