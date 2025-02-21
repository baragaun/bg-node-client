import { Channel } from '../types/models/Channel.js';
import { MutateChannelResult } from '../types/MutateChannelResult.js';
declare const deleteChannel: (id: string) => Promise<MutateChannelResult<Channel>>;
export default deleteChannel;
