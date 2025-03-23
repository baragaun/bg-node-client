import { Model } from './Model.js';
export class ClientInfo extends Model {
    myUserId;
    authToken;
    myUserDeviceUuid;
    signedOutUserId;
    localContentStatus;
    remoteContentStatus;
    constructor(attributes) {
        super(attributes);
        if (!this.id) {
            this.id = 'default';
        }
        if (attributes) {
            if (attributes.myUserId) {
                this.myUserId = attributes.myUserId;
            }
            if (attributes.authToken) {
                this.authToken = attributes.authToken;
            }
            if (attributes.myUserDeviceUuid) {
                this.myUserDeviceUuid = attributes.myUserDeviceUuid;
            }
            if (attributes.signedOutUserId) {
                this.signedOutUserId = attributes.signedOutUserId;
            }
            if (attributes.localContentStatus) {
                this.localContentStatus = attributes.localContentStatus;
            }
            if (attributes.remoteContentStatus) {
                this.remoteContentStatus = attributes.remoteContentStatus;
            }
        }
    }
    static createDeviceUuid() {
        return crypto.randomUUID().replaceAll('-', '');
    }
}
//# sourceMappingURL=ClientInfo.js.map