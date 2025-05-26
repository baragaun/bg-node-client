export declare const BgChannelInboxItemInvitationSchema: {
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
        messageText: {
            type: string;
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
        createdAt: {
            type: string;
            format: string;
        };
        createdBy: {
            type: string;
            maxLength: number;
        };
        recipientId: {
            type: string;
            maxLength: number;
        };
    };
    required: string[];
};
