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
                if (attributes.receivedAt instanceof Date) {
                    this.receivedAt = attributes.receivedAt;
                }
                else {
                    this.receivedAt = new Date(attributes.receivedAt);
                }
            }
            if (attributes.seenAt) {
                if (attributes.seenAt instanceof Date) {
                    this.seenAt = attributes.seenAt;
                }
                else {
                    this.seenAt = new Date(attributes.seenAt);
                }
            }
        }
    }
}
//# sourceMappingURL=BgChannelMessageStatus.js.map