import { BgNodeClient } from '../../../BgNodeClient.js';
import { Channel, ChannelWithMessages } from '../../../models/Channel.js';
export declare const createMultipleChannelSpecHelper: (specs: {
    props: Partial<Channel>;
    messageCount?: number;
}[], client: BgNodeClient) => Promise<ChannelWithMessages[]>;
