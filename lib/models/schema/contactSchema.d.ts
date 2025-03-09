export declare const ContactSchema: {
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
        userId: {
            type: string;
            maxLength: number;
        };
        channelId: {
            type: string;
            maxLength: number;
        };
        nickname: {
            type: string;
        };
        typeTextIds: {
            type: string;
            items: {
                type: string;
            };
        };
        favorite: {
            type: string;
        };
        notes: {
            type: string;
        };
        archivedAt: {
            type: string;
            format: string;
        };
    };
    required: string[];
};
