export declare const UserBlockSchema: {
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
        reasonTextId: {
            type: string;
        };
        notes: {
            type: string;
        };
        syncedWithMm2At: {
            description: string;
            type: string;
            format: string;
        };
        mm2Id: {
            description: string;
            type: string;
        };
    };
    required: string[];
};
