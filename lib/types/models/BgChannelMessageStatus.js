/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/
export class BgChannelMessageStatus {
    userId = '';
    receivedAt;
    seenAt;
    constructor(attributes) {
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
//# sourceMappingURL=BgChannelMessageStatus.js.map