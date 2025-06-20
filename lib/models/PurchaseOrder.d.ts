import { BaseModel } from './BaseModel.js';
import { PurchaseOrderItem } from './PurchaseOrderItem.js';
export declare class PurchaseOrder extends BaseModel {
    userId: string;
    shoppingCartId: string;
    sumItemPrice: number;
    totalPrice: number;
    vat: number;
    paidAt?: Date | null;
    canceledAt?: Date | null;
    refundedAt?: Date | null;
    items: PurchaseOrderItem[];
    constructor(attributes?: Partial<PurchaseOrder>);
}
