import { Channel } from '../../types/models/Channel.js';
import { MutationResult } from '../../types/MutationResult.js';
declare const deleteChannel: (id: string) => Promise<MutationResult<Channel>>;
export default deleteChannel;
