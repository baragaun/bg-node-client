import { BgNodeClient } from '../../BgNodeClient.js';
import { ChannelMessage } from '../../models/ChannelMessage.js';
export declare const updateChannelMessageSpecHelper: (changes: Partial<ChannelMessage>, client: BgNodeClient) => Promise<ChannelMessage | null>;
