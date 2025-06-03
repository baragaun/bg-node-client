export class BgChannelParticipantUserInfo {
  public userHandle?: string | null;
  public firstName?: string | null;
  public lastName?: string | null;
  public avatarUrl?: string | null;

  constructor(attributes?: Partial<BgChannelParticipantUserInfo>) {
    if (attributes) {
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
    }
  }
}
