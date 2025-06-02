import { BaseModel } from './BaseModel.js';
export class GiftCardProduct extends BaseModel {
    importId = '';
    vendorId = '';
    genericGiftCardId = '';
    vendorImportId = '';
    isGeneric;
    imageSourceFront;
    imageSourceBack;
    hasBarcode;
    barcodeFormat;
    hasPin;
    termsEn;
    termsUrl;
    instructionsEn;
    instructionsUrl;
    denominations;
    constructor(attributes) {
        super(attributes);
        if (attributes) {
            if (attributes.importId) {
                this.importId = attributes.importId;
            }
            if (attributes.vendorId) {
                this.vendorId = attributes.vendorId;
            }
            if (attributes.genericGiftCardId) {
                this.genericGiftCardId = attributes.genericGiftCardId;
            }
            if (attributes.vendorImportId) {
                this.vendorImportId = attributes.vendorImportId;
            }
            if (attributes.isGeneric !== undefined) {
                this.isGeneric = attributes.isGeneric;
            }
            if (attributes.imageSourceFront) {
                this.imageSourceFront = attributes.imageSourceFront;
            }
            if (attributes.imageSourceBack) {
                this.imageSourceBack = attributes.imageSourceBack;
            }
            if (attributes.hasBarcode !== undefined) {
                this.hasBarcode = attributes.hasBarcode;
            }
            if (attributes.barcodeFormat) {
                this.barcodeFormat = attributes.barcodeFormat;
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