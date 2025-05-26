export declare const BgChannelChangedEventSchema: {
    $schema: string;
    $id: string;
    title: string;
    version: number;
    primaryKey: string;
    type: string;
    properties: {
        channelId: {
            type: string;
            maxLength: number;
        };
        invitationId: {
            type: string;
            maxLength: number;
        };
        messageId: {
            type: string;
            maxLength: number;
        };
        participantId: {
            type: string;
            maxLength: number;
        };
        eventType: {
            type: string;
            enum: string[];
            enumType: string;
        };
        requestId: {
            type: string;
            maxLength: number;
        };
    };
    required: string[];
};
