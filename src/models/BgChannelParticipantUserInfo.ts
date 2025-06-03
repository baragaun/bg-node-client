export class BgChannelParticipantUserInfo {
  public userHandle?: string | null;
  public firstName?: string | null;
  public lastName?: string | null;
  public avatarUrl?: string | null;

  constructor(attributes?: Partial<BgChannelParticipantUserInfo>) {
    if (attributes) {
      if (attributes.userHandle) {
        this.userHandle = attributes.userHandle;
      }
      if (attributes.firstName) {
        this.firstName = attributes.firstName;
      }
      if (attributes.lastName) {
        this.lastName = attributes.lastName;
      }
      if (attributes.avatarUrl) {
        this.avatarUrl = attributes.avatarUrl;
      }
    }
  }
}
