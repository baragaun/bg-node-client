import { BaseModel } from './BaseModel.js';
import { GiftCardDenomination } from './GiftCardDenomination.js';
export declare class GiftCardProduct extends BaseModel {
    genericGiftCardId?: string | null;
    isGeneric?: boolean | null;
    hasPin?: boolean | null;
    termsEn?: string | null;
    termsUrl?: string | null;
    instructionsEn?: string | null;
    instructionsUrl?: string | null;
    denominations?: GiftCardDenomination[] | null;
    constructor(attributes?: Partial<GiftCardProduct>);
}
