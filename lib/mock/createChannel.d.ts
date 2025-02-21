import { Channel } from '../types/models/Channel.js';
import { MutateChannelResult } from '../types/MutateChannelResult.js';
declare const createChannel: (attributes: Partial<Channel>) => Promise<MutateChannelResult<Channel>>;
export default createChannel;
