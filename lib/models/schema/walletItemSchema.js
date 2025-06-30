export const WalletItemSchema = {
    title: 'WalletItem',
    version: 0,
    primaryKey: 'id',
    type: 'object',
    properties: {
        id: {
            type: 'string',
            maxLength: 32,
        },
        adminNotes: {
            type: 'string',
            nullable: true,
        },
        metadata: {
            type: 'object',
            properties: {
                updatedAt: {
                    type: 'string',
                    format: 'date-time',
                    nullable: true,
                },
            },
            nullable: true,
        },
        createdAt: {
            type: 'string',
            format: 'date-time',
        },
        createdBy: {
            type: 'string',
            maxLength: 32,
            nullable: true,
        },
        updatedAt: {
            type: 'string',
            format: 'date-time',
            nullable: true,
        },
        updatedBy: {
            type: 'string',
            maxLength: 32,
            nullable: true,
        },
        deletedAt: {
            type: 'string',
            format: 'date-time',
            nullable: true,
        },
        deletedBy: {
            type: 'string',
            maxLength: 32,
            nullable: true,
        },
        walletId: {
            type: 'string',
            maxLength: 32,
        },
        productId: {
            type: 'string',
            maxLength: 32,
        },
        purchaseOrderItemId: {
            type: 'string',
            maxLength: 32,
        },
        brandId: {
            type: 'string',
            maxLength: 32,
        },
        name: {
            type: 'string',
        },
        price: {
            type: 'integer',
        },
        initialBalance: {
            type: 'integer',
        },
        balance: {
            type: 'integer',
        },
        code: {
            type: 'string',
            nullable: true,
        },
        hasBarcode: {
            type: 'boolean',
            nullable: true,
        },
        barcodeFormat: {
            type: 'string',
            enum: [
                'TYPE_39',
                'TYPE_128',
                'CODE_25',
                'ITF',
                'I125',
                'UPC_A',
                'UPC_E',
                'EAN_13',
                'EAN_8',
                'QR_CODE',
                'PDF417',
                'DATA_MATRIX',
                null,
            ],
            nullable: true,
        },
        pin: {
            type: 'string',
            nullable: true,
        },
        source: {
            type: 'WalletItemSource',
            nullable: true,
        },
        imageSourceFront: {
            type: 'string',
            nullable: true,
        },
        imageSourceBack: {
            type: 'string',
            nullable: true,
        },
        referenceUrl: {
            type: 'string',
            nullable: true,
        },
        termsEn: {
            type: 'string',
            nullable: true,
        },
        termsUrl: {
            type: 'string',
            nullable: true,
        },
        instructionsEn: {
            type: 'string',
            nullable: true,
        },
        instructionsUrl: {
            type: 'string',
            nullable: true,
        },
        sortIndex: {
            type: 'integer',
        },
        issuedAt: {
            type: 'string',
            format: 'date-time',
            nullable: true,
        },
        expiresAt: {
            type: 'string',
            format: 'date-time',
            nullable: true,
        },
        balanceUpdatedAt: {
            type: 'string',
            format: 'date-time',
            nullable: true,
        },
        archivedAt: {
            type: 'string',
            format: 'date-time',
            nullable: true,
        },
    },
    required: ['id'],
};
//# sourceMappingURL=walletItemSchema.js.map