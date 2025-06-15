import { BaseModel } from './BaseModel.js';
import { ShoppingCartItem } from './ShoppingCartItem.js';

export class ShoppingCart extends BaseModel {
  public sumItemPrice = 0;
  public totalPrice = 0;
  public vat = 0;
  public items: ShoppingCartItem[] = [];

  constructor(attributes?: Partial<ShoppingCart>) {
    super(attributes);

    if (attributes) {
      if (
        attributes.sumItemPrice === 0 ||
        (
          attributes.sumItemPrice &&
          !isNaN(attributes.sumItemPrice)
        )
      ) {
        this.sumItemPrice = attributes.sumItemPrice;
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
      if (
        attributes.vat === 0 ||
        (
          attributes.vat &&
          !isNaN(attributes.vat)
        )
      ) {
        this.vat = attributes.vat;
      }
      if (attributes.items !== undefined) {
        this.items = attributes.items;
      }
    }
  }
}
