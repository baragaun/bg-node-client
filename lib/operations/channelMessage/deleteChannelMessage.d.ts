import { ChannelMessage } from '../../models/ChannelMessage.js';
import { MutationResult } from '../../types/MutationResult.js';
declare const deleteChannelMessage: (id: string) => Promise<MutationResult<ChannelMessage>>;
export default deleteChannelMessage;
