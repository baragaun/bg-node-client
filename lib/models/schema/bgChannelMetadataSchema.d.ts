export declare const BgChannelMetadataSchema: {
    $schema: string;
    $id: string;
    title: string;
    version: number;
    primaryKey: string;
    type: string;
    properties: {
        unseenMessageInfo: {
            type: string;
            items: {
                type: string;
            };
            properties: {
                userId: {
                    type: string;
                    maxLength: number;
                };
                createdAt: {
                    type: string;
                    format: string;
                };
            };
        };
    };
    required: string[];
};
