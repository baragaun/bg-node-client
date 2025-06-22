export class BgChannelParticipantUserInfo {
  // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
  public userHandle?: string | null;
  public firstName?: string | null;
  public lastName?: string | null;
  public avatarUrl?: string | null;
  // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<

  constructor(attributes?: Partial<BgChannelParticipantUserInfo>) {
    if (attributes) {
      // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
      if (attributes.userHandle !== undefined) {
        this.userHandle = attributes.userHandle;
      }
      if (attributes.firstName !== undefined) {
        this.firstName = attributes.firstName;
      }
      if (attributes.lastName !== undefined) {
        this.lastName = attributes.lastName;
      }
      if (attributes.avatarUrl !== undefined) {
        this.avatarUrl = attributes.avatarUrl;
      }
      // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
    }
  }
}
