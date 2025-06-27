export class PurchaseOrderInput {
  // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
  public adminNotes?: string;
  public canceledAt?: string;
  public createdAt?: string;
  public createdBy?: string;
  public deletedAt?: string;
  public deletedBy?: string;
  public events?: any[];
  public id?: string;
  public metadata?: any;
  public paidAt?: string;
  public refundedAt?: string;
  public shoppingCartId?: string;
  public sumItemPrice?: number;
  public totalPrice?: number;
  public updatedAt?: string;
  public updatedBy?: string;
  public userId?: string;
  public vat?: number;
  // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<

  constructor(attributes?: Partial<PurchaseOrderInput>) {
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