/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/
export class BgChannelStatus {
    userId = '';
    archivedAt;
    constructor(attributes) {
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
//# sourceMappingURL=BgChannelStatus.js.map