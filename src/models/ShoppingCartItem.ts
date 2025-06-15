import { BaseModel } from './BaseModel.js';

export class ShoppingCartItem extends BaseModel {
  public shoppingCartId = '';
  public productId = '';
  public count = 0;
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
        attributes.count === 0 ||
        (
          attributes.count &&
          !isNaN(attributes.count)
        )
      ) {
        this.count = attributes.count;
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
