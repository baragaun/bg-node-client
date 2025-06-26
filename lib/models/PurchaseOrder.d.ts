import { BaseModel } from './BaseModel.js';
import { PurchaseOrderItem } from './PurchaseOrderItem.js';
export declare class PurchaseOrder extends BaseModel {
    userId: string;
    shoppingCartId: string;
    sumItemPrice: number;
    totalPrice: number;
    vat: number;
    paidAt?: string | null;
    canceledAt?: string | null;
    refundedAt?: string | null;
    items?: PurchaseOrderItem[];
    constructor(attributes?: Partial<PurchaseOrder>);
}
