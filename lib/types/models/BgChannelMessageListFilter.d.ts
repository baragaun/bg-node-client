import { ChannelMessageType } from '../enums.js';
import { BaseListFilter } from './BaseListFilter.js';
export declare class BgChannelMessageListFilter extends BaseListFilter {
    channelId?: string | null;
    receiverUserId?: string | null;
    replyToMessageId?: string | null;
    includeChannelMessageType?: ChannelMessageType[] | null;
    received?: boolean | null;
    seen?: boolean | null;
    constructor(attributes?: Partial<BgChannelMessageListFilter>);
}
