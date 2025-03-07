/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/
import { ChannelParticipantRole } from '../../enums.js';
import { BaseModel } from './BaseModel.js';
export declare class BgChannelParticipant extends BaseModel {
    channelId: string;
    userId: string;
    invitedBy?: string | null;
    channelName?: string | null;
    role?: ChannelParticipantRole | null;
    suspendedAt?: string | null;
    suspendedBy?: string | null;
    constructor(attributes?: Partial<BgChannelParticipant>);
}
