import { GiftCardDenomination } from './GiftCardDenomination.js';
import { Product } from './Product.js';
export declare class GiftCardProduct extends Product {
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
