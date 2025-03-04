import { BgChannelMessage } from './BgChannelMessage.js';
import { ChannelMessageMetadata } from './ChannelMessageMetadata.js';
export declare class ChannelMessage extends BgChannelMessage {
    metadata?: ChannelMessageMetadata | null;
    constructor(attributes?: Partial<ChannelMessage>);
}
