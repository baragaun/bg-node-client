export declare const GiftCardProductSchema: {
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
        brandId: {
            type: string;
            maxLength: number;
        };
        brandImportId: {
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
        productType: {
            type: string;
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
            enum: string[];
            nullable: boolean;
        };
        genericGiftCardId: {
            type: string;
            maxLength: number;
            nullable: boolean;
        };
        isGeneric: {
            type: string;
            nullable: boolean;
        };
        hasPin: {
            type: string;
            nullable: boolean;
        };
        termsEn: {
            type: string;
            nullable: boolean;
        };
        termsUrl: {
            type: string;
            nullable: boolean;
        };
        instructionsEn: {
            type: string;
            nullable: boolean;
        };
        instructionsUrl: {
            type: string;
            nullable: boolean;
        };
        denominations: {
            type: string;
            items: {
                type: string;
                properties: {
                    amount: {
                        type: string;
                    };
                    enabled: {
                        type: string;
                    };
                };
            };
            nullable: boolean;
        };
    };
    required: string[];
};
