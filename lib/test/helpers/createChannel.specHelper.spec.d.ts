import { Channel } from '../../models/Channel.js';
import { BgNodeClient } from '../../BgNodeClient.js';
export declare const createChannelSpecHelper: (props: Partial<Channel>, client: BgNodeClient) => Promise<Channel | null>;
