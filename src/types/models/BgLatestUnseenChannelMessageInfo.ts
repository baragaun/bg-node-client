/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/

export class BgLatestUnseenChannelMessageInfo {
  public userId = '';
  public createdAt: Date = new Date();

  constructor(attributes?: Partial<BgLatestUnseenChannelMessageInfo>) {
    if (attributes) {
      if (attributes.userId) {
        this.userId = attributes.userId;
      }
      if (attributes.createdAt) {
        this.createdAt = attributes.createdAt;
      }
    }
  }
}
