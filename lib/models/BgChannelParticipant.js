import { BaseModel } from './BaseModel.js';
import { BgChannelParticipantUserInfo } from './BgChannelParticipantUserInfo.js';
export class BgChannelParticipant extends BaseModel {
    channelId = '';
    userId = '';
    userInfo;
    invitedBy;
    channelName;
    role;
    suspendedAt;
    suspendedBy;
    constructor(attributes) {
        super(attributes);
        if (attributes) {
            if (attributes.channelId) {
                this.channelId = attributes.channelId;
            }
            if (attributes.userId) {
                this.userId = attributes.userId;
            }
            if (attributes.userInfo) {
                this.userInfo = new BgChannelParticipantUserInfo(attributes.userInfo);
            }
            if (attributes.invitedBy) {
                this.invitedBy = attributes.invitedBy;
            }
            if (attributes.channelName) {
                this.channelName = attributes.channelName;
            }
            if (attributes.role) {
                this.role = attributes.role;
            }
            if (attributes.suspendedAt) {
                if (attributes.suspendedAt instanceof Date) {
                    this.suspendedAt = attributes.suspendedAt;
                }
                else {
                    this.suspendedAt = new Date(attributes.suspendedAt);
                }
            }
            if (attributes.suspendedBy) {
                this.suspendedBy = attributes.suspendedBy;
            }
        }
    }
}
//# sourceMappingURL=BgChannelParticipant.js.map