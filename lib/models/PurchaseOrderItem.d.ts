import { BaseModel } from './BaseModel.js';
export declare class PurchaseOrderItem extends BaseModel {
    orderId: string;
    productId: string;
    quantity: number;
    price: number;
    totalPrice: number;
    constructor(attributes?: Partial<PurchaseOrderItem>);
}
