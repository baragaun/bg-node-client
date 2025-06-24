import { BgChannel } from './BgChannel.js';
import { ChannelMessage } from './ChannelMessage.js';
export declare class Channel extends BgChannel {
    constructor(attributes?: Partial<Channel>);
    static get searchFields(): string[];
}
export declare class ChannelWithMessages extends Channel {
    messages?: ChannelMessage[] | null;
    constructor(attributes?: Partial<ChannelWithMessages>);
}
