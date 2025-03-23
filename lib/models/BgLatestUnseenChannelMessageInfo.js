/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/
export class BgLatestUnseenChannelMessageInfo {
    userId = '';
    createdAt = new Date();
    constructor(attributes) {
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
//# sourceMappingURL=BgLatestUnseenChannelMessageInfo.js.map