export const WalletItemTransferRecipientInfoSchema = {
    title: 'WalletItemTransferRecipientInfo',
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
        walletItem: {
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
                productType: {
                    type: 'string',
                    enum: ['giftCard', 'other'],
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
                transferStartedAt: {
                    type: 'string',
                    format: 'date-time',
                    nullable: true,
                },
                transferAcceptedAt: {
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
        },
        walletItemTransfer: {
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
                walletItemId: {
                    type: 'string',
                    maxLength: 32,
                },
                notificationId: {
                    type: 'string',
                    maxLength: 32,
                    nullable: true,
                },
                recipientEmail: {
                    type: 'string',
                    nullable: true,
                },
                recipientPhoneNumber: {
                    type: 'string',
                    nullable: true,
                },
                recipientFullName: {
                    type: 'string',
                    nullable: true,
                },
                subjectText: {
                    type: 'string',
                    nullable: true,
                },
                messageText: {
                    type: 'string',
                    nullable: true,
                },
                transferSlug: {
                    type: 'string',
                    nullable: true,
                },
                transferSecret: {
                    type: 'string',
                    nullable: true,
                },
                passwordHash: {
                    type: 'string',
                    nullable: true,
                },
                sendMethod: {
                    type: 'string',
                    description: 'email | phoneNumber | link',
                    nullable: true,
                },
                sendPlatform: {
                    type: 'string',
                    description: 'i.e. WhatsApp, Signal, ...',
                    nullable: true,
                },
                sentAt: {
                    type: 'string',
                    description: 'Date this transfer was sent',
                    format: 'date-time',
                    nullable: true,
                },
                acceptedAt: {
                    type: 'string',
                    description: 'The recipient accepted this transfer',
                    format: 'date-time',
                    nullable: true,
                },
                declinedAt: {
                    type: 'string',
                    description: 'The recipient declined this transfer',
                    format: 'date-time',
                    nullable: true,
                },
                canceledAt: {
                    type: 'string',
                    description: 'The sender canceled this transfer',
                    format: 'date-time',
                    nullable: true,
                },
                archivedAt: {
                    type: 'string',
                    description: 'The sender archived this transfer',
                    format: 'date-time',
                    nullable: true,
                },
            },
        },
        brand: {
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
                name: {
                    type: 'string',
                },
                importId: {
                    type: 'string',
                },
                imageSource: {
                    type: 'string',
                    nullable: true,
                },
                slug: {
                    type: 'string',
                    nullable: true,
                },
                url: {
                    type: 'string',
                    nullable: true,
                },
                balanceLookupUri: {
                    type: 'string',
                    nullable: true,
                },
                listed: {
                    type: 'boolean',
                    nullable: true,
                },
                logoImageSource: {
                    type: 'string',
                    nullable: true,
                },
                description: {
                    type: 'string',
                    nullable: true,
                },
                alias1: {
                    type: 'string',
                    nullable: true,
                },
                alias2: {
                    type: 'string',
                    nullable: true,
                },
                alias3: {
                    type: 'string',
                    nullable: true,
                },
            },
            nullable: true,
        },
        product: {
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
                importId: {
                    type: 'string',
                },
                brandId: {
                    type: 'string',
                    maxLength: 32,
                },
                brandImportId: {
                    type: 'string',
                    nullable: true,
                },
                name: {
                    type: 'string',
                },
                description: {
                    type: 'string',
                    nullable: true,
                },
                productType: {
                    type: 'string',
                    enum: ['giftCard', 'other'],
                },
                categories: {
                    type: 'array',
                    items: {
                        type: 'string',
                        maxLength: 32,
                    },
                    nullable: true,
                },
                slug: {
                    type: 'string',
                    nullable: true,
                },
                url: {
                    type: 'string',
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
                genericGiftCardId: {
                    type: 'string',
                    maxLength: 32,
                    nullable: true,
                },
                isGeneric: {
                    type: 'boolean',
                    nullable: true,
                },
                hasPin: {
                    type: 'boolean',
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
                denominations: {
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            amount: {
                                type: 'integer',
                            },
                            enabled: {
                                type: 'boolean',
                            },
                        },
                    },
                    nullable: true,
                },
            },
            nullable: true,
        },
        secretCheck: {
            type: 'string',
            nullable: true,
        },
    },
    required: ['id'],
};
//# sourceMappingURL=WalletItemTransferRecipientInfoSchema.js.map