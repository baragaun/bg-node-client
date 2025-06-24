/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/

export class BgLatestUnseenChannelMessageInfo {
  // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
  public userId = '';
  public createdAt: Date = new Date();
  // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<

  constructor(attributes?: Partial<BgLatestUnseenChannelMessageInfo>) {
    if (attributes) {
      // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
      if (attributes.userId) {
        this.userId = attributes.userId;
      }
      if (attributes.createdAt) {
        this.createdAt = attributes.createdAt;
      }
      // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
    }
  }
}
