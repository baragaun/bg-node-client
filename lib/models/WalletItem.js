import { BaseModel } from './BaseModel.js';
export class WalletItem extends BaseModel {
    walletId = '';
    productId = '';
    orderItemId = '';
    vendorId = '';
    name = '';
    price = 0;
    initialBalance = 0;
    balance = 0;
    code;
    hasBarcode;
    barcodeFormat;
    pin;
    source;
    imageSourceFront;
    imageSourceBack;
    referenceUrl;
    termsEn;
    termsUrl;
    instructionsEn;
    instructionsUrl;
    sortIndex = 0;
    issuedAt;
    expiresAt;
    balanceUpdatedAt;
    archivedAt;
    constructor(attributes) {
        super(attributes);
        if (attributes) {
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
            if (attributes.initialBalance === 0 ||
                (attributes.initialBalance &&
                    !isNaN(attributes.initialBalance))) {
                this.initialBalance = attributes.initialBalance;
            }
            if (attributes.balance === 0 ||
                (attributes.balance &&
                    !isNaN(attributes.balance))) {
                this.balance = attributes.balance;
            }
            if (attributes.code) {
                this.code = attributes.code;
            }
            if (attributes.hasBarcode !== undefined) {
                this.hasBarcode = attributes.hasBarcode;
            }
            if (attributes.barcodeFormat) {
                this.barcodeFormat = attributes.barcodeFormat;
            }
            if (attributes.pin) {
                this.pin = attributes.pin;
            }
            if (attributes.source) {
                this.source = attributes.source;
            }
            if (attributes.imageSourceFront) {
                this.imageSourceFront = attributes.imageSourceFront;
            }
            if (attributes.imageSourceBack) {
                this.imageSourceBack = attributes.imageSourceBack;
            }
            if (attributes.referenceUrl) {
                this.referenceUrl = attributes.referenceUrl;
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
            if (attributes.issuedAt) {
                if (attributes.issuedAt instanceof Date) {
                    this.issuedAt = attributes.issuedAt;
                }
                else {
                    this.issuedAt = new Date(attributes.issuedAt);
                }
            }
            if (attributes.expiresAt) {
                if (attributes.expiresAt instanceof Date) {
                    this.expiresAt = attributes.expiresAt;
                }
                else {
                    this.expiresAt = new Date(attributes.expiresAt);
                }
            }
            if (attributes.balanceUpdatedAt) {
                if (attributes.balanceUpdatedAt instanceof Date) {
                    this.balanceUpdatedAt = attributes.balanceUpdatedAt;
                }
                else {
                    this.balanceUpdatedAt = new Date(attributes.balanceUpdatedAt);
                }
            }
            if (attributes.archivedAt) {
                if (attributes.archivedAt instanceof Date) {
                    this.archivedAt = attributes.archivedAt;
                }
                else {
                    this.archivedAt = new Date(attributes.archivedAt);
                }
            }
        }
    }
}
//# sourceMappingURL=WalletItem.js.map