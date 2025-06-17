import { BaseModel } from './BaseModel.js';
export class ShoppingCartItem extends BaseModel {
    shoppingCartId = '';
    productId = '';
    quantity = 0;
    price = 0;
    totalPrice = 0;
    constructor(attributes) {
        super(attributes);
        if (attributes) {
            if (attributes.shoppingCartId) {
                this.shoppingCartId = attributes.shoppingCartId;
            }
            if (attributes.productId) {
                this.productId = attributes.productId;
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
        }
    }
}
//# sourceMappingURL=ShoppingCartItem.js.map