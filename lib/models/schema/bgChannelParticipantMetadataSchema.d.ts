export declare const BgChannelParticipantMetadataSchema: {
    $schema: string;
    $id: string;
    title: string;
    version: number;
    primaryKey: string;
    type: string;
    properties: {
        userHandle: {
            type: string;
        };
        firstName: {
            type: string;
        };
        lastName: {
            type: string;
        };
        avatarUrl: {
            type: string;
        };
        sentMessageCount: {
            type: string;
        };
        unseenMessageCount: {
            type: string;
        };
        unseenSystemMessageCount: {
            type: string;
        };
    };
    required: string[];
};
