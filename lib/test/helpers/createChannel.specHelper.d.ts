import { BgNodeClient } from '../../BgNodeClient.js';
import { Channel, ChannelWithMessages } from '../../models/Channel.js';
export declare const createChannelSpecHelper: (props: Partial<Channel> | undefined, messageCount: number | undefined, client: BgNodeClient) => Promise<ChannelWithMessages | null>;
