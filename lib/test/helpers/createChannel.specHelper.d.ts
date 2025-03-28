import { BgNodeClient } from '../../BgNodeClient.js';
import { Channel } from '../../models/Channel.js';
export declare const createChannelSpecHelper: (props: Partial<Channel>, client: BgNodeClient) => Promise<Channel | null>;
