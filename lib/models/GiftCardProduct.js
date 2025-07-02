import { Product } from './Product.js';
import { ProductType } from '../enums.js';
export class GiftCardProduct extends Product {
    // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
    genericGiftCardId;
    isGeneric;
    hasPin;
    termsEn;
    termsUrl;
    instructionsEn;
    instructionsUrl;
    denominations;
    // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<
    constructor(attributes) {
        super(attributes);
        if (attributes) {
            // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
            if (attributes.genericGiftCardId !== undefined) {
                this.genericGiftCardId = attributes.genericGiftCardId;
            }
            if (attributes.isGeneric !== undefined) {
                this.isGeneric = attributes.isGeneric;
            }
            if (attributes.hasPin !== undefined) {
                this.hasPin = attributes.hasPin;
            }
            if (attributes.termsEn !== undefined) {
                this.termsEn = attributes.termsEn;
            }
            if (attributes.termsUrl !== undefined) {
                this.termsUrl = attributes.termsUrl;
            }
            if (attributes.instructionsEn !== undefined) {
                this.instructionsEn = attributes.instructionsEn;
            }
            if (attributes.instructionsUrl !== undefined) {
                this.instructionsUrl = attributes.instructionsUrl;
            }
            if (attributes.denominations !== undefined) {
                this.denominations = attributes.denominations;
            }
            // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
            if (!this.productType || this.productType === ProductType.other) {
                this.productType = ProductType.giftCard;
            }
        }
    }
}
//# sourceMappingURL=GiftCardProduct.js.map