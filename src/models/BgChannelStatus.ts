/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/

export class BgChannelStatus {
  // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
  public userId = '';
  public archivedAt?: string | null;
  // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<

  constructor(attributes?: Partial<BgChannelStatus> | null) {
    if (attributes) {
      // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
      if (attributes.userId) {
        this.userId = attributes.userId;
      }
      if (attributes.archivedAt) {
        this.archivedAt = attributes.archivedAt;
      }
      // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
    }
  }
}
