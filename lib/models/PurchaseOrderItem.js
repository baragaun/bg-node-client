import { BaseModel } from './BaseModel.js';
export class PurchaseOrderItem extends BaseModel {
    purchaseOrderId = '';
    shoppingCartItemId = '';
    productId = '';
    vendorId = '';
    quantity = 0;
    price = 0;
    totalPrice = 0;
    balance = 0;
    code;
    hasBarcode;
    barcodeFormat;
    pin;
    constructor(attributes) {
        super(attributes);
        if (attributes) {
            if (attributes.purchaseOrderId) {
                this.purchaseOrderId = attributes.purchaseOrderId;
            }
            if (attributes.shoppingCartItemId) {
                this.shoppingCartItemId = attributes.shoppingCartItemId;
            }
            if (attributes.productId) {
                this.productId = attributes.productId;
            }
            if (attributes.vendorId) {
                this.vendorId = attributes.vendorId;
            }
            if (attributes.quantity === 0 ||
                (attributes.quantity &&
                    !isNaN(attributes.quantity))) {
                this.quantity = attributes.quantity;
            }
            if (attributes.price === 0 ||
                (attributes.price &&
                    !isNaN(attributes.price))) {
                this.price = attributes.price;
            }
            if (attributes.totalPrice === 0 ||
                (attributes.totalPrice &&
                    !isNaN(attributes.totalPrice))) {
                this.totalPrice = attributes.totalPrice;
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
        }
    }
}
//# sourceMappingURL=PurchaseOrderItem.js.map