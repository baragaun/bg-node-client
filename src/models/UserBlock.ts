export class UserBlock {
  // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
  public userId = '';
  public reasonTextId = '';
  public notes?: string | null;
  public adminNotes?: string | null;
  public createdAt: Date = new Date();
  // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<

  public constructor(attributes?: Partial<UserBlock>) {
    if (attributes) {
      // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
      if (attributes.userId) {
        this.userId = attributes.userId;
      }
      if (attributes.reasonTextId) {
        this.reasonTextId = attributes.reasonTextId;
      }
      if (attributes.notes) {
        this.notes = attributes.notes;
      }
      if (attributes.adminNotes) {
        this.adminNotes = attributes.adminNotes;
      }
      if (attributes.createdAt) {
        this.createdAt = attributes.createdAt;
      }
      // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
    }
  }
}
