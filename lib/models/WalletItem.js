import { BaseModel } from './BaseModel.js';
export class WalletItem extends BaseModel {
    walletId = '';
    productId = '';
    orderItemId = '';
    vendorId = '';
    name = '';
    price = 0;
    balance = 0;
    imageSourceFront;
    imageSourceBack;
    hasBarcode;
    barcodeFormat;
    termsEn;
    termsUrl;
    instructionsEn;
    instructionsUrl;
    sortIndex = 0;
    archivedAt;
    // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<
    constructor(attributes) {
        super(attributes);
        if (attributes) {
            // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
            if (attributes.walletId) {
                this.walletId = attributes.walletId;
            }
            if (attributes.productId) {
                this.productId = attributes.productId;
            }
            if (attributes.orderItemId) {
                this.orderItemId = attributes.orderItemId;
            }
            if (attributes.vendorId) {
                this.vendorId = attributes.vendorId;
            }
            if (attributes.name) {
                this.name = attributes.name;
            }
            if (attributes.price === 0 ||
                (attributes.price &&
                    !isNaN(attributes.price))) {
                this.price = attributes.price;
            }
            if (attributes.balance === 0 ||
                (attributes.balance &&
                    !isNaN(attributes.balance))) {
                this.balance = attributes.balance;
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
            if (attributes.sortIndex === 0 ||
                (attributes.sortIndex &&
                    !isNaN(attributes.sortIndex))) {
                this.sortIndex = attributes.sortIndex;
            }
            if (attributes.archivedAt) {
                if (attributes.archivedAt instanceof Date) {
                    this.archivedAt = attributes.archivedAt;
                }
                else {
                    this.archivedAt = new Date(attributes.archivedAt);
                }
            }
            // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
        }
    }
}
//# sourceMappingURL=WalletItem.js.map