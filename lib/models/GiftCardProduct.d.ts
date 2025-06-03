import { BaseModel } from './BaseModel.js';
import { GiftCardDenomination } from './GiftCardDenomination.js';
export declare class GiftCardProduct extends BaseModel {
    importId: string;
    vendorId: string;
    genericGiftCardId: string;
    vendorImportId: string;
    isGeneric?: boolean | null;
    imageSourceFront?: string | null;
    imageSourceBack?: string | null;
    hasBarcode?: boolean | null;
    barcodeFormat?: string | null;
    hasPin?: boolean | null;
    termsEn?: string | null;
    termsUrl?: string | null;
    instructionsEn?: string | null;
    instructionsUrl?: string | null;
    denominations?: GiftCardDenomination[] | null;
    constructor(attributes?: Partial<GiftCardProduct>);
}
