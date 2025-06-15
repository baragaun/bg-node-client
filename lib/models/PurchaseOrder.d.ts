import { BaseModel } from './BaseModel.js';
export declare class PurchaseOrder extends BaseModel {
    userId: string;
    sumItemPrice: number;
    totalPrice: number;
    vat: number;
    paidAt?: Date | null;
    canceledAt?: Date | null;
    refundedAt?: Date | null;
    constructor(attributes?: Partial<PurchaseOrder>);
}
