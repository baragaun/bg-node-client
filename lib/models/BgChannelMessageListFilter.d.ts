import { BaseListFilter } from './BaseListFilter.js';
import { ChannelMessageType } from '../enums.js';
export declare class BgChannelMessageListFilter extends BaseListFilter {
    channelId?: string | null;
    userIds?: string[] | null;
    receiverUserId?: string | null;
    replyToMessageId?: string | null;
    includeChannelMessageType?: ChannelMessageType[] | null;
    received?: boolean | null;
    seen?: boolean | null;
    constructor(attributes?: Partial<BgChannelMessageListFilter>);
}
