/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/

export class BgChannelStatus {
  public userId = ''

  public archivedAt?: Date | null

  constructor(attributes?: Partial<BgChannelStatus> | null) {
    if (attributes) {
      if (attributes.userId) {
        this.userId = attributes.userId
      }
      if (attributes.archivedAt) {
        if (attributes.archivedAt instanceof Date) {
          this.archivedAt = attributes.archivedAt
        } else {
          this.archivedAt = new Date(attributes.archivedAt)
        }
      }
    }
  }
}
