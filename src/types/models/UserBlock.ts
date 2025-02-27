export class UserBlock {
  public userId = ''
  public reasonTextId = ''
  public notes?: string | null
  public adminNotes?: string | null
  public createdAt: Date = new Date()

  public constructor(attributes?: Partial<UserBlock>) {
    if (attributes) {
      if (attributes.userId) {
        this.userId = attributes.userId
      }
      if (attributes.reasonTextId) {
        this.reasonTextId = attributes.reasonTextId
      }
      if (attributes.notes) {
        this.notes = attributes.notes
      }
      if (attributes.adminNotes) {
        this.adminNotes = attributes.adminNotes
      }
      if (attributes.createdAt) {
        this.createdAt = attributes.createdAt
      }
    }
  }
}
