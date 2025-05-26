import { BgNodeClient } from '../../BgNodeClient.js';
import { ChannelMessage } from '../../models/ChannelMessage.js';
export declare const createChannelMessageSpecHelper: (props: Partial<ChannelMessage> | undefined, client: BgNodeClient) => Promise<ChannelMessage | null>;
