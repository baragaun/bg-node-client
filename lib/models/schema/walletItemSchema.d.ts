export declare const WalletItemSchema: {
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
        walletId: {
            type: string;
            maxLength: number;
        };
        productId: {
            type: string;
            maxLength: number;
        };
        orderItemId: {
            type: string;
            maxLength: number;
        };
        vendorId: {
            type: string;
            maxLength: number;
        };
        name: {
            type: string;
        };
        price: {
            type: string;
        };
        balance: {
            type: string;
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
        sortIndex: {
            type: string;
        };
        archivedAt: {
            type: string;
            format: string;
            nullable: boolean;
        };
    };
    required: string[];
};
