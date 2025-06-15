import { BaseModel } from './BaseModel.js';
export class ShoppingCart extends BaseModel {
    sumItemPrice = 0;
    totalPrice = 0;
    vat = 0;
    items = [];
    constructor(attributes) {
        super(attributes);
        if (attributes) {
            if (attributes.sumItemPrice === 0 ||
                (attributes.sumItemPrice &&
                    !isNaN(attributes.sumItemPrice))) {
                this.sumItemPrice = attributes.sumItemPrice;
            }
            if (attributes.totalPrice === 0 ||
                (attributes.totalPrice &&
                    !isNaN(attributes.totalPrice))) {
                this.totalPrice = attributes.totalPrice;
            }
            if (attributes.vat === 0 ||
                (attributes.vat &&
                    !isNaN(attributes.vat))) {
                this.vat = attributes.vat;
            }
            if (attributes.items !== undefined) {
                this.items = attributes.items;
            }
        }
    }
}
//# sourceMappingURL=ShoppingCart.js.map