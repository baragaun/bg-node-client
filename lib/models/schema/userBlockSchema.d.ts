export declare const UserBlockSchema: {
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
        userId: {
            type: string;
            maxLength: number;
        };
        reasonTextId: {
            type: string;
        };
        notes: {
            type: string;
        };
        syncedToAnalyticsAt: {
            type: string;
            format: string;
        };
        syncedWithMm2At: {
            type: string;
            description: string;
            format: string;
        };
        mm2Id: {
            type: string;
            description: string;
        };
    };
    required: string[];
};
