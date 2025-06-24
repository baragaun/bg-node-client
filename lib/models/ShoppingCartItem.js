import { BaseModel } from './BaseModel.js';
export class ShoppingCartItem extends BaseModel {
    // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
    shoppingCartId = '';
    productId = '';
    quantity = 0;
    price = 0;
    totalPrice = 0;
    // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<
    constructor(attributes) {
        super(attributes);
        if (attributes) {
            // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
            if (attributes.shoppingCartId !== undefined) {
                this.shoppingCartId = attributes.shoppingCartId;
            }
            if (attributes.productId !== undefined) {
                this.productId = attributes.productId;
            }
            if (attributes.quantity === null ||
                attributes.quantity === 0 ||
                (attributes.quantity &&
                    !isNaN(attributes.quantity))) {
                this.quantity = attributes.quantity;
            }
            if (attributes.price === null ||
                attributes.price === 0 ||
                (attributes.price &&
                    !isNaN(attributes.price))) {
                this.price = attributes.price;
            }
            if (attributes.totalPrice === null ||
                attributes.totalPrice === 0 ||
                (attributes.totalPrice &&
                    !isNaN(attributes.totalPrice))) {
                this.totalPrice = attributes.totalPrice;
            }
            // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
        }
    }
}
//# sourceMappingURL=ShoppingCartItem.js.map