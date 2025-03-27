import { Channel } from '../../models/Channel.js';
import { MutationResult } from '../../types/MutationResult.js';
declare const createChannel: (props: Partial<Channel>) => Promise<MutationResult<Channel>>;
export default createChannel;
