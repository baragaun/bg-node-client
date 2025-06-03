import { BaseModel } from './BaseModel.js';
import { BgChannelParticipantUserInfo } from './BgChannelParticipantUserInfo.js';
import { ChannelParticipantRole } from '../enums.js';
export declare class BgChannelParticipant extends BaseModel {
    channelId: string;
    userId: string;
    userInfo?: BgChannelParticipantUserInfo | null;
    invitedBy?: string | null;
    channelName?: string | null;
    role?: ChannelParticipantRole | null;
    suspendedAt?: Date | null;
    suspendedBy?: string | null;
    constructor(attributes?: Partial<BgChannelParticipant>);
}
