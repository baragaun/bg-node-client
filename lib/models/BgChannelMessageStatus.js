/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/
export class BgChannelMessageStatus {
    // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
    userId = '';
    receivedAt;
    seenAt;
    // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<
    constructor(attributes) {
        if (attributes) {
            // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
            if (attributes.userId) {
                this.userId = attributes.userId;
            }
            if (attributes.receivedAt) {
                this.receivedAt = attributes.receivedAt;
            }
            if (attributes.seenAt) {
                this.seenAt = attributes.seenAt;
            }
            // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
        }
    }
}
//# sourceMappingURL=BgChannelMessageStatus.js.map