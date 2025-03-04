import { ChannelMessage } from '../types/models/ChannelMessage.js';
import { MutationResult } from '../types/MutationResult.js';
declare const createChannelMessage: (attributes: Partial<ChannelMessage>) => Promise<MutationResult<ChannelMessage>>;
export default createChannelMessage;
