import { ChannelMessage } from '../types/models/ChannelMessage.js';
import { MutateChannelResult } from '../types/MutateChannelResult.js';
declare const updateChannelMessage: (changes: Partial<ChannelMessage>) => Promise<MutateChannelResult<ChannelMessage>>;
export default updateChannelMessage;
