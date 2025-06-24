export declare const ProductSchema: {
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
        importId: {
            type: string;
        };
        vendorId: {
            type: string;
            maxLength: number;
        };
        vendorImportId: {
            type: string;
            nullable: boolean;
        };
        name: {
            type: string;
        };
        description: {
            type: string;
            nullable: boolean;
        };
        categories: {
            type: string;
            items: {
                type: string;
                maxLength: number;
            };
            nullable: boolean;
        };
        slug: {
            type: string;
            nullable: boolean;
        };
        url: {
            type: string;
            nullable: boolean;
        };
        imageSourceFront: {
            type: string;
            nullable: boolean;
        };
        imageSourceBack: {
            type: string;
            nullable: boolean;
        };
        hasBarcode: {
            type: string;
            nullable: boolean;
        };
        barcodeFormat: {
            type: string;
            nullable: boolean;
        };
    };
    required: string[];
};
