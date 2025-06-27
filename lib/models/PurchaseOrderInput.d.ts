export declare class PurchaseOrderInput {
    adminNotes?: string;
    canceledAt?: string;
    createdAt?: string;
    createdBy?: string;
    deletedAt?: string;
    deletedBy?: string;
    events?: any[];
    id?: string;
    metadata?: any;
    paidAt?: string;
    refundedAt?: string;
    shoppingCartId?: string;
    sumItemPrice?: number;
    totalPrice?: number;
    updatedAt?: string;
    updatedBy?: string;
    userId?: string;
    vat?: number;
    constructor(attributes?: Partial<PurchaseOrderInput>);
}
