import { BaseModel } from './BaseModel.js';
export declare class PurchaseOrderItem extends BaseModel {
    purchaseOrderId: string;
    shoppingCartItemId: string;
    productId: string;
    vendorId: string;
    quantity: number;
    price: number;
    totalPrice: number;
    constructor(attributes?: Partial<PurchaseOrderItem>);
}
