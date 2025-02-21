import { Channel } from '../types/models/Channel.js';
import { MutateChannelResult } from '../types/MutateChannelResult.js';
declare const updateChannel: (changes: Partial<Channel>) => Promise<MutateChannelResult<Channel>>;
export default updateChannel;
