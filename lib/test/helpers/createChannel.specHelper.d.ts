import { BgNodeClient } from '../../BgNodeClient.js';
import { Channel } from '../../models/Channel.js';
export declare const createChannelSpecHelper: (props: Partial<Channel> | undefined, client: BgNodeClient) => Promise<Channel | null>;
