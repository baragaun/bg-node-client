export class BgChannelParticipantUserInfo {
    userHandle;
    firstName;
    lastName;
    avatarUrl;
    constructor(attributes) {
        if (attributes) {
            if (attributes.userHandle) {
                this.userHandle = attributes.userHandle;
            }
            if (attributes.firstName) {
                this.firstName = attributes.firstName;
            }
            if (attributes.lastName) {
                this.lastName = attributes.lastName;
            }
            if (attributes.avatarUrl) {
                this.avatarUrl = attributes.avatarUrl;
            }
        }
    }
}
//# sourceMappingURL=BgChannelParticipantUserInfo.js.map