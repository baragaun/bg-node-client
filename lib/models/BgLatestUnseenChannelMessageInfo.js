/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/
export class BgLatestUnseenChannelMessageInfo {
    // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
    userId = '';
    createdAt = new Date();
    // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<
    constructor(attributes) {
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
//# sourceMappingURL=BgLatestUnseenChannelMessageInfo.js.map