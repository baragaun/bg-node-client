import { BaseModel } from './BaseModel.js';
import { PurchaseOrderItem } from './PurchaseOrderItem.js';

export class PurchaseOrder extends BaseModel {
  // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
  public userId = '';
  public shoppingCartId = '';
  public sumItemPrice = 0;
  public totalPrice = 0;
  public vat = 0;
  public paidAt?: string | null;
  public canceledAt?: string | null;
  public refundedAt?: string | null;
  public items: PurchaseOrderItem[] = [];
  // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<

  constructor(attributes?: Partial<PurchaseOrder>) {
    super(attributes);

    if (attributes) {
      // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
      if (attributes.userId !== undefined) {
        this.userId = attributes.userId;
      }
      if (attributes.shoppingCartId !== undefined) {
        this.shoppingCartId = attributes.shoppingCartId;
      }
      if (
        attributes.sumItemPrice === null ||
        attributes.sumItemPrice === 0 ||
        (
          attributes.sumItemPrice &&
          !isNaN(attributes.sumItemPrice)
        )
      ) {
        this.sumItemPrice = attributes.sumItemPrice;
      }
      if (
        attributes.totalPrice === null ||
        attributes.totalPrice === 0 ||
        (
          attributes.totalPrice &&
          !isNaN(attributes.totalPrice)
        )
      ) {
        this.totalPrice = attributes.totalPrice;
      }
      if (
        attributes.vat === null ||
        attributes.vat === 0 ||
        (
          attributes.vat &&
          !isNaN(attributes.vat)
        )
      ) {
        this.vat = attributes.vat;
      }
      if (attributes.paidAt !== undefined && attributes.paidAt !== '') {
        this.paidAt = attributes.paidAt;
      }
      if (attributes.canceledAt !== undefined && attributes.canceledAt !== '') {
        this.canceledAt = attributes.canceledAt;
      }
      if (attributes.refundedAt !== undefined && attributes.refundedAt !== '') {
        this.refundedAt = attributes.refundedAt;
      }
      if (attributes.items !== undefined) {
        this.items = attributes.items;
      }
      // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
    }
  }
}
