/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/
import { BaseModel } from './BaseModel.js';
import { BgChannelStatus } from './BgChannelStatus.js';
import { ChannelMessage } from './ChannelMessage.js';
import { ChannelMetadata } from './ChannelMetadata.js';
import { ChannelParticipant } from './ChannelParticipant.js';
import { ChannelType } from '../enums.js';
export declare class BgChannel extends BaseModel {
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
    constructor(attributes?: Partial<BgChannel>);
}
