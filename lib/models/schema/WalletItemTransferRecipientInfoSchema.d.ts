export declare const WalletItemTransferRecipientInfoSchema: {
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
        walletItem: {
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
                brandId: {
                    type: string;
                    maxLength: number;
                };
                productType: {
                    type: string;
                    enum: string[];
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
                transferStartedAt: {
                    type: string;
                    format: string;
                    nullable: boolean;
                };
                transferAcceptedAt: {
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
        walletItemTransfer: {
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
                walletItemId: {
                    type: string;
                    maxLength: number;
                };
                notificationId: {
                    type: string;
                    maxLength: number;
                    nullable: boolean;
                };
                recipientEmail: {
                    type: string;
                    nullable: boolean;
                };
                recipientPhoneNumber: {
                    type: string;
                    nullable: boolean;
                };
                recipientFullName: {
                    type: string;
                    nullable: boolean;
                };
                subjectText: {
                    type: string;
                    nullable: boolean;
                };
                messageText: {
                    type: string;
                    nullable: boolean;
                };
                transferSlug: {
                    type: string;
                    nullable: boolean;
                };
                transferSecret: {
                    type: string;
                    nullable: boolean;
                };
                passwordHash: {
                    type: string;
                    nullable: boolean;
                };
                sendMethod: {
                    type: string;
                    description: string;
                    nullable: boolean;
                };
                sendPlatform: {
                    type: string;
                    description: string;
                    nullable: boolean;
                };
                showOnline: {
                    type: string;
                    description: string;
                };
                sentAt: {
                    type: string;
                    description: string;
                    format: string;
                    nullable: boolean;
                };
                acceptedAt: {
                    type: string;
                    description: string;
                    format: string;
                    nullable: boolean;
                };
                declinedAt: {
                    type: string;
                    description: string;
                    format: string;
                    nullable: boolean;
                };
                canceledAt: {
                    type: string;
                    description: string;
                    format: string;
                    nullable: boolean;
                };
                archivedAt: {
                    type: string;
                    description: string;
                    format: string;
                    nullable: boolean;
                };
            };
        };
        brand: {
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
                name: {
                    type: string;
                };
                importId: {
                    type: string;
                };
                imageSource: {
                    type: string;
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
                balanceLookupUri: {
                    type: string;
                    nullable: boolean;
                };
                listed: {
                    type: string;
                    nullable: boolean;
                };
                logoImageSource: {
                    type: string;
                    nullable: boolean;
                };
                description: {
                    type: string;
                    nullable: boolean;
                };
                alias1: {
                    type: string;
                    nullable: boolean;
                };
                alias2: {
                    type: string;
                    nullable: boolean;
                };
                alias3: {
                    type: string;
                    nullable: boolean;
                };
            };
            nullable: boolean;
        };
        product: {
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
                    enum: string[];
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
            nullable: boolean;
        };
    };
    required: string[];
};
