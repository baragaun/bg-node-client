import { BaseModel } from './BaseModel.js';
import { ChannelMessageMetadata } from './ChannelMessageMetadata.js';
import { ChannelMessageStatus } from './ChannelMessageStatus.js';
import { ChannelMessageType } from '../enums.js';
export declare class ChannelMessage extends BaseModel {
    channelId: string;
    replyToMessageId?: string | null;
    channelMessageType?: ChannelMessageType | null;
    messageText?: string | null;
    statuses?: ChannelMessageStatus[] | null;
    metadata?: ChannelMessageMetadata | null;
    editedAt?: Date | null;
    suspendedAt?: Date | null;
    suspendedBy?: string | null;
    constructor(attributes?: Partial<ChannelMessage>);
}
