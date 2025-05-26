export declare const BgChannelMessageStatusSchema: {
    $schema: string;
    $id: string;
    title: string;
    version: number;
    primaryKey: string;
    type: string;
    properties: {
        userId: {
            type: string;
            maxLength: number;
        };
        isInArchivedChannel: {
            type: string;
        };
        receivedAt: {
            type: string;
            format: string;
        };
        seenAt: {
            type: string;
            format: string;
        };
    };
    required: string[];
};
