import { BaseModel } from './BaseModel.js';
import { BgChannelStatus } from './BgChannelStatus.js';
import { ChannelMetadata } from './ChannelMetadata.js';
import { ChannelType } from '../enums.js';
export declare class BgChannel extends BaseModel {
    name?: string | null;
    topic?: string | null;
    description?: string | null;
    tags?: string[] | null;
    channelType: ChannelType;
    statuses?: BgChannelStatus[] | null;
    userIds?: string[] | null;
    otherUserId?: string | null;
    maxSeq: number;
    lastLiveSeq: number;
    metadata?: ChannelMetadata | null;
    syncedToAnalyticsAt?: string | null;
    pausedAt?: string | null;
    pausedBy?: string | null;
    suspendedAt?: string | null;
    suspendedBy?: string | null;
    lockedAt?: string | null;
    lockedBy?: string | null;
    archivedAt?: string | null;
    archivedBy?: string | null;
    constructor(attributes?: Partial<BgChannel>);
    static get searchFields(): string[];
}
