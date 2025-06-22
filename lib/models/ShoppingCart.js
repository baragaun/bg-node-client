import { BaseModel } from './BaseModel.js';
export class ShoppingCart extends BaseModel {
    // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
    sumItemPrice = 0;
    totalPrice = 0;
    vat = 0;
    items = [];
    // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<
    constructor(attributes) {
        super(attributes);
        if (attributes) {
            // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
            if (attributes.sumItemPrice === null ||
                attributes.sumItemPrice === 0 ||
                (attributes.sumItemPrice &&
                    !isNaN(attributes.sumItemPrice))) {
                this.sumItemPrice = attributes.sumItemPrice;
            }
            if (attributes.totalPrice === null ||
                attributes.totalPrice === 0 ||
                (attributes.totalPrice &&
                    !isNaN(attributes.totalPrice))) {
                this.totalPrice = attributes.totalPrice;
            }
            if (attributes.vat === null ||
                attributes.vat === 0 ||
                (attributes.vat &&
                    !isNaN(attributes.vat))) {
                this.vat = attributes.vat;
            }
            if (attributes.items !== undefined) {
                this.items = attributes.items;
            }
            // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
        }
    }
}
//# sourceMappingURL=ShoppingCart.js.map