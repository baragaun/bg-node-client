import { Channel } from '../../models/Channel.js';
import { BgNodeClient } from '../../BgNodeClient.js';
export declare const updateChannelSpecHelper: (changes: Partial<Channel>, client: BgNodeClient) => Promise<Channel | null>;
