/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/

export class BgChannelStatus {
  public userId = '';

  public archivedAt?: string | null;

  constructor(attributes?: Partial<BgChannelStatus> | null) {
    if (attributes) {
      if (attributes.userId) {
        this.userId = attributes.userId;
      }
      if (attributes.archivedAt) {
        this.archivedAt = attributes.archivedAt;
      }
    }
  }
}
