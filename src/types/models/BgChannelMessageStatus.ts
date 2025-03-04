/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/

export class BgChannelMessageStatus {
  public userId = '';
  public receivedAt?: string | null;
  public seenAt?: string | null;

  constructor(attributes?: Partial<BgChannelMessageStatus>) {
    if (attributes) {
      if (attributes.userId) {
        this.userId = attributes.userId;
      }
      if (attributes.receivedAt) {
        this.receivedAt = attributes.receivedAt;
      }
      if (attributes.seenAt) {
        this.seenAt = attributes.seenAt;
      }
    }
  }
}
