export declare const BgChannelInboxItemMessageSchema: {
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
        senderUserHandle: {
            type: string;
        };
        senderFirstName: {
            type: string;
        };
        senderLastName: {
            type: string;
        };
        senderAvatarUrl: {
            type: string;
        };
        seenAt: {
            type: string;
            format: string;
        };
        isArchived: {
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
        userIds: {
            type: string;
            items: {
                type: string;
            };
            maxLength: number;
        };
    };
    required: string[];
};
