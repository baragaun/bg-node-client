import { BgNodeClient } from '../../../BgNodeClient.js';
import { Channel } from '../../../models/Channel.js';
export declare const updateChannelSpecHelper: (changes: Partial<Channel>, client: BgNodeClient) => Promise<Channel | null>;
