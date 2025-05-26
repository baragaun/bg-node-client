export declare const BgChannelStatusSchema: {
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
        archivedAt: {
            type: string;
            format: string;
        };
    };
    required: string[];
};
