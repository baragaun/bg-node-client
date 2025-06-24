import { BaseModel } from './BaseModel.js';
export class PurchaseOrder extends BaseModel {
    // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
    userId = '';
    shoppingCartId = '';
    sumItemPrice = 0;
    totalPrice = 0;
    vat = 0;
    paidAt;
    canceledAt;
    refundedAt;
    items = [];
    // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<
    constructor(attributes) {
        super(attributes);
        if (attributes) {
            // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
            if (attributes.userId !== undefined) {
                this.userId = attributes.userId;
            }
            if (attributes.shoppingCartId !== undefined) {
                this.shoppingCartId = attributes.shoppingCartId;
            }
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
//# sourceMappingURL=PurchaseOrder.js.map