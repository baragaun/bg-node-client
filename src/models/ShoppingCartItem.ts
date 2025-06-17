import { BaseModel } from './BaseModel.js';

export class ShoppingCartItem extends BaseModel {
  public shoppingCartId = '';
  public productId = '';
  public quantity = 0;
  public price = 0;
  public totalPrice = 0;

  constructor(attributes?: Partial<ShoppingCartItem>) {
    super(attributes);

    if (attributes) {
      if (attributes.shoppingCartId) {
        this.shoppingCartId = attributes.shoppingCartId;
      }
      if (attributes.productId) {
        this.productId = attributes.productId;
      }
      if (
        attributes.quantity === 0 ||
        (
          attributes.quantity &&
          !isNaN(attributes.quantity)
        )
      ) {
        this.quantity = attributes.quantity;
      }
      if (
        attributes.price === 0 ||
        (
          attributes.price &&
          !isNaN(attributes.price)
        )
      ) {
        this.price = attributes.price;
      }
      if (
        attributes.totalPrice === 0 ||
        (
          attributes.totalPrice &&
          !isNaN(attributes.totalPrice)
        )
      ) {
        this.totalPrice = attributes.totalPrice;
      }
    }
  }
}
