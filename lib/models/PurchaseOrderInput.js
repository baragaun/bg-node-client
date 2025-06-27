export class PurchaseOrderInput {
    // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
    adminNotes;
    canceledAt;
    createdAt;
    createdBy;
    deletedAt;
    deletedBy;
    events;
    id;
    metadata;
    paidAt;
    refundedAt;
    shoppingCartId;
    sumItemPrice;
    totalPrice;
    updatedAt;
    updatedBy;
    userId;
    vat;
    // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<
    constructor(attributes) {
        if (attributes) {
            // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
            if (attributes.adminNotes !== undefined) {
                this.adminNotes = attributes.adminNotes;
            }
            if (attributes.canceledAt !== undefined) {
                this.canceledAt = attributes.canceledAt;
            }
            if (attributes.createdAt !== undefined) {
                this.createdAt = attributes.createdAt;
            }
            if (attributes.createdBy !== undefined) {
                this.createdBy = attributes.createdBy;
            }
            if (attributes.deletedAt !== undefined) {
                this.deletedAt = attributes.deletedAt;
            }
            if (attributes.deletedBy !== undefined) {
                this.deletedBy = attributes.deletedBy;
            }
            if (attributes.events !== undefined) {
                this.events = attributes.events;
            }
            if (attributes.id !== undefined) {
                this.id = attributes.id;
            }
            if (attributes.metadata !== undefined) {
                this.metadata = attributes.metadata;
            }
            if (attributes.paidAt !== undefined) {
                this.paidAt = attributes.paidAt;
            }
            if (attributes.refundedAt !== undefined) {
                this.refundedAt = attributes.refundedAt;
            }
            if (attributes.shoppingCartId !== undefined) {
                this.shoppingCartId = attributes.shoppingCartId;
            }
            if (attributes.sumItemPrice !== undefined) {
                this.sumItemPrice = attributes.sumItemPrice;
            }
            if (attributes.totalPrice !== undefined) {
                this.totalPrice = attributes.totalPrice;
            }
            if (attributes.updatedAt !== undefined) {
                this.updatedAt = attributes.updatedAt;
            }
            if (attributes.updatedBy !== undefined) {
                this.updatedBy = attributes.updatedBy;
            }
            if (attributes.userId !== undefined) {
                this.userId = attributes.userId;
            }
            if (attributes.vat !== undefined) {
                this.vat = attributes.vat;
            }
            // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
        }
    }
}
//# sourceMappingURL=PurchaseOrderInput.js.map