import { ChannelType } from '../enums.js';
import { BaseModel } from './BaseModel.js';
import { BgChannelStatus } from './BgChannelStatus.js';
import { ChannelMetadata } from './ChannelMetadata.js';
import { ChannelParticipant } from './ChannelParticipant.js';
export declare class BgChannel extends BaseModel {
    name?: string | null;
    topic?: string | null;
    description?: string | null;
    tags?: string[] | null;
    channelType: ChannelType;
    statuses?: BgChannelStatus[] | null;
    userIds?: string[] | null;
    metadata?: ChannelMetadata | null;
    pausedAt?: string | null;
    pausedBy?: string | null;
    suspendedAt?: string | null;
    suspendedBy?: string | null;
    lockedAt?: string | null;
    lockedBy?: string | null;
    archivedAt?: string | null;
    archivedBy?: string | null;
    participants?: ChannelParticipant[];
    constructor(attributes?: Partial<BgChannel>);
}
