import { BarcodeType } from '../enums.js';
import { BaseModel } from './BaseModel.js';
export declare class PurchaseOrderItem extends BaseModel {
    purchaseOrderId: string;
    shoppingCartItemId: string;
    productId: string;
    vendorId: string;
    quantity: number;
    price: number;
    totalPrice: number;
    balance: number;
    code?: string | null;
    hasBarcode?: boolean | null;
    barcodeFormat?: BarcodeType | null;
    pin?: string | null;
    constructor(attributes?: Partial<PurchaseOrderItem>);
}
