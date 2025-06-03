export class BgChannelParticipantUserInfo {
    userHandle;
    firstName;
    lastName;
    avatarUrl;
    constructor(attributes) {
        if (attributes) {
            if (attributes.userHandle !== undefined) {
                this.userHandle = attributes.userHandle;
            }
            if (attributes.firstName !== undefined) {
                this.firstName = attributes.firstName;
            }
            if (attributes.lastName !== undefined) {
                this.lastName = attributes.lastName;
            }
            if (attributes.avatarUrl !== undefined) {
                this.avatarUrl = attributes.avatarUrl;
            }
        }
    }
}
//# sourceMappingURL=BgChannelParticipantUserInfo.js.map