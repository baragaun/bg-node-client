import { BaseModel } from './BaseModel.js';
export declare class WalletItem extends BaseModel {
    walletId: string;
    productId: string;
    orderItemId: string;
    vendorId: string;
    name: string;
    price: number;
    balance: number;
    imageSourceFront?: string | null;
    imageSourceBack?: string | null;
    hasBarcode?: boolean | null;
    barcodeFormat?: string | null;
    termsEn?: string | null;
    termsUrl?: string | null;
    instructionsEn?: string | null;
    instructionsUrl?: string | null;
    sortIndex: number;
    archivedAt?: Date | null;
    constructor(attributes?: Partial<WalletItem>);
}
