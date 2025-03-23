import { Channel } from '../../models/Channel.js';
import { MutationResult } from '../../types/MutationResult.js';
declare const updateChannel: (changes: Partial<Channel>) => Promise<MutationResult<Channel>>;
export default updateChannel;
