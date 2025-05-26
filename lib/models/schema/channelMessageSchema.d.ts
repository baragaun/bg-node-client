export declare const ChannelMessageSchema: {
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
        replyToMessageId: {
            type: string;
            maxLength: number;
        };
        channelMessageType: {
            type: string;
            enum: string[];
            enumType: string;
        };
        messageText: {
            type: string;
        };
        statuses: {
            type: string;
        };
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
