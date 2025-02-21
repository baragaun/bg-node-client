import { BaseModel } from './BaseModel.js';
import { User } from './User.js';
import { BgChannelStatus } from './BgChannelStatus.js';
import { ChannelMessage } from '../../../lib/types/models/ChannelMessage.js';
import { ChannelMetadata } from './ChannelMetadata.js';
import { ChannelParticipant } from './ChannelParticipant.js';
import { ChannelType } from '../enums.js';
export declare class Channel extends BaseModel {
    name?: string | null;
    topic?: string | null;
    description?: string | null;
    tags?: string[] | null;
    channelType: ChannelType;
    statuses?: BgChannelStatus[] | null;
    userIds?: string[] | null;
    metadata?: ChannelMetadata | null;
    pausedAt?: Date | null;
    pausedBy?: string | null;
    suspendedAt?: Date | null;
    suspendedBy?: string | null;
    lockedAt?: Date | null;
    lockedBy?: string | null;
    archivedAt?: Date | null;
    archivedBy?: string | null;
    messages?: ChannelMessage[];
    participants?: ChannelParticipant[];
    users?: User[];
    constructor(attributes?: Partial<Channel>);
}
