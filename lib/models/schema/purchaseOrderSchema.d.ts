export declare const PurchaseOrderSchema: {
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
        userId: {
            type: string;
            maxLength: number;
        };
        shoppingCartId: {
            type: string;
            maxLength: number;
        };
        sumItemPrice: {
            type: string;
        };
        totalPrice: {
            type: string;
        };
        vat: {
            type: string;
        };
        paidAt: {
            type: string;
            format: string;
            nullable: boolean;
        };
        canceledAt: {
            type: string;
            format: string;
            nullable: boolean;
        };
        refundedAt: {
            type: string;
            format: string;
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
                    purchaseOrderId: {
                        type: string;
                        maxLength: number;
                    };
                    shoppingCartItemId: {
                        type: string;
                        maxLength: number;
                    };
                    productId: {
                        type: string;
                        maxLength: number;
                    };
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                    quantity: {
                        type: string;
                    };
                    price: {
                        type: string;
                    };
                    totalPrice: {
                        type: string;
                    };
                };
            };
        };
    };
    required: string[];
};
