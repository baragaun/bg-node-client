import { BaseModel } from './BaseModel.js';

export class PurchaseOrderItem extends BaseModel {
  public orderId = '';
  public productId = '';
  public quantity = 0;
  public price = 0;
  public totalPrice = 0;

  constructor(attributes?: Partial<PurchaseOrderItem>) {
    super(attributes);

    if (attributes) {
      if (attributes.orderId) {
        this.orderId = attributes.orderId;
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
