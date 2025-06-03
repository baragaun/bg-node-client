import { Product } from './Product.js';
export class GiftCardProduct extends Product {
    genericGiftCardId;
    isGeneric;
    hasPin;
    termsEn;
    termsUrl;
    instructionsEn;
    instructionsUrl;
    denominations;
    constructor(attributes) {
        super(attributes);
        if (attributes) {
            if (attributes.genericGiftCardId) {
                this.genericGiftCardId = attributes.genericGiftCardId;
            }
            if (attributes.isGeneric !== undefined) {
                this.isGeneric = attributes.isGeneric;
            }
            if (attributes.hasPin !== undefined) {
                this.hasPin = attributes.hasPin;
            }
            if (attributes.termsEn) {
                this.termsEn = attributes.termsEn;
            }
            if (attributes.termsUrl) {
                this.termsUrl = attributes.termsUrl;
            }
            if (attributes.instructionsEn) {
                this.instructionsEn = attributes.instructionsEn;
            }
            if (attributes.instructionsUrl) {
                this.instructionsUrl = attributes.instructionsUrl;
            }
            if (attributes.denominations) {
                this.denominations = attributes.denominations;
            }
        }
    }
}
//# sourceMappingURL=GiftCardProduct.js.map