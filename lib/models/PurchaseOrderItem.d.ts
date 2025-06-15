import { BaseModel } from './BaseModel.js';
export declare class PurchaseOrderItem extends BaseModel {
    orderId: string;
    productId: string;
    count: number;
    price: number;
    totalPrice: number;
    constructor(attributes?: Partial<PurchaseOrderItem>);
}
