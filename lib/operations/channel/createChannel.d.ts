import { Channel } from '../../types/models/Channel.js';
import { MutationResult } from '../../types/MutationResult.js';
declare const createChannel: (attributes: Partial<Channel>) => Promise<MutationResult<Channel>>;
export default createChannel;
