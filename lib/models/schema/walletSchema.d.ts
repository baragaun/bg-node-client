export declare const WalletSchema: {
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
        items: {
            type: string;
            items: {
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
                    purchaseOrderItemId: {
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
                    initialBalance: {
                        type: string;
                    };
                    balance: {
                        type: string;
                    };
                    code: {
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
                    pin: {
                        type: string;
                        nullable: boolean;
                    };
                    source: {
                        type: string;
                        enum: string[];
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
                    referenceUrl: {
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
                    issuedAt: {
                        type: string;
                        format: string;
                        nullable: boolean;
                    };
                    expiresAt: {
                        type: string;
                        format: string;
                        nullable: boolean;
                    };
                    balanceUpdatedAt: {
                        type: string;
                        format: string;
                        nullable: boolean;
                    };
                    archivedAt: {
                        type: string;
                        format: string;
                        nullable: boolean;
                    };
                };
            };
        };
    };
    required: string[];
};
