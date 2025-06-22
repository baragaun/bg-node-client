export declare const UploadedAssetSchema: {
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
            nullable: boolean;
        };
        metadata: {
            type: string;
            properties: {
                updatedAt: {
                    type: string;
                    format: string;
                    nullable: boolean;
                };
            };
            nullable: boolean;
        };
        createdAt: {
            type: string;
            format: string;
        };
        createdBy: {
            type: string;
            maxLength: number;
            nullable: boolean;
        };
        updatedAt: {
            type: string;
            format: string;
            nullable: boolean;
        };
        updatedBy: {
            type: string;
            maxLength: number;
            nullable: boolean;
        };
        deletedAt: {
            type: string;
            format: string;
            nullable: boolean;
        };
        deletedBy: {
            type: string;
            maxLength: number;
            nullable: boolean;
        };
        ownerId: {
            type: string;
            maxLength: number;
        };
        ownerModelType: {
            type: string;
            enum: string[];
        };
        assetType: {
            type: string;
            enum: string[];
        };
        hostingService: {
            type: string;
            enum: string[];
        };
        url: {
            type: string;
            nullable: boolean;
        };
        path: {
            type: string;
            nullable: boolean;
        };
        s3Bucket: {
            type: string;
            nullable: boolean;
        };
        s3Key: {
            type: string;
            nullable: boolean;
        };
        mimeType: {
            type: string;
            nullable: boolean;
        };
        uploadUrl: {
            type: string;
            nullable: boolean;
        };
        uploadUrlExpiresAt: {
            type: string;
            format: string;
            nullable: boolean;
        };
        uploadedAt: {
            type: string;
            format: string;
            nullable: boolean;
        };
        expiresAt: {
            type: string;
            format: string;
            nullable: boolean;
        };
    };
    required: string[];
};
