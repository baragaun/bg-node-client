import { Model } from './Model.js';
export class ClientInfo extends Model {
    // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
    myUserId;
    authToken;
    myUserDeviceUuid;
    signedOutUserId;
    localContentStatus;
    remoteContentStatus;
    sessionStartedAt;
    sessionEndedAt;
    // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<
    constructor(attributes) {
        super(attributes);
        if (!this.id) {
            this.id = 'default';
        }
        if (attributes) {
            // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
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
            if (attributes.sessionStartedAt) {
                this.sessionStartedAt = attributes.sessionStartedAt;
            }
            if (attributes.sessionEndedAt) {
                this.sessionEndedAt = attributes.sessionEndedAt;
            }
            // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
        }
        if (!this.myUserDeviceUuid) {
            this.myUserDeviceUuid = ClientInfo.createDeviceUuid();
        }
    }
    get isSignedIn() {
        return !!(this.myUserId && this.myUserDeviceUuid && this.authToken);
    }
    get isSessionActive() {
        return this.isSignedIn && !!this.sessionStartedAt && !this.sessionEndedAt;
    }
    static createDeviceUuid() {
        return crypto.randomUUID().replaceAll('-', '');
    }
}
//# sourceMappingURL=ClientInfo.js.map