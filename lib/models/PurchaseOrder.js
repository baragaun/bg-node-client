import { BaseModel } from './BaseModel.js';
export class PurchaseOrder extends BaseModel {
    userId = '';
    sumItemPrice = 0;
    totalPrice = 0;
    vat = 0;
    paidAt;
    canceledAt;
    refundedAt;
    constructor(attributes) {
        super(attributes);
        if (attributes) {
            if (attributes.userId) {
                this.userId = attributes.userId;
            }
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
            if (attributes.paidAt) {
                if (attributes.paidAt instanceof Date) {
                    this.paidAt = attributes.paidAt;
                }
                else {
                    this.paidAt = new Date(attributes.paidAt);
                }
            }
            if (attributes.canceledAt) {
                if (attributes.canceledAt instanceof Date) {
                    this.canceledAt = attributes.canceledAt;
                }
                else {
                    this.canceledAt = new Date(attributes.canceledAt);
                }
            }
            if (attributes.refundedAt) {
                if (attributes.refundedAt instanceof Date) {
                    this.refundedAt = attributes.refundedAt;
                }
                else {
                    this.refundedAt = new Date(attributes.refundedAt);
                }
            }
        }
    }
}
//# sourceMappingURL=PurchaseOrder.js.map