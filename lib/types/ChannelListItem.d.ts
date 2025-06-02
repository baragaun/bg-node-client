import { Channel } from '../models/Channel.js';
import { ChannelMessage } from '../models/ChannelMessage.js';
import { ChannelParticipant } from '../models/ChannelParticipant.js';
export declare class ChannelListItem extends Channel {
    participants?: ChannelParticipant[];
    latestMessage?: ChannelMessage;
    constructor(attributes?: Partial<ChannelListItem>);
}
