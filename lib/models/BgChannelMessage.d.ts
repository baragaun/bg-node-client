/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/
import { BaseModel } from './BaseModel.js';
import { ChannelMessageMetadata } from './ChannelMessageMetadata.js';
import { ChannelMessageStatus } from './ChannelMessageStatus.js';
import { ChannelMessageType } from '../enums.js';
export declare class BgChannelMessage extends BaseModel {
    channelId: string;
    replyToMessageId?: string | null;
    channelMessageType?: ChannelMessageType | null;
    messageText?: string | null;
    statuses?: ChannelMessageStatus[] | null;
    metadata?: ChannelMessageMetadata | null;
    editedAt?: string | null;
    suspendedAt?: string | null;
    suspendedBy?: string | null;
    constructor(attributes?: Partial<BgChannelMessage>);
}
