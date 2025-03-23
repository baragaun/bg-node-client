import { ChannelMessage } from '../../models/ChannelMessage.js';
import { MutationResult } from '../../types/MutationResult.js';
declare const updateChannelMessage: (changes: Partial<ChannelMessage>) => Promise<MutationResult<ChannelMessage>>;
export default updateChannelMessage;
