import { ChannelMessage } from '../types/models/ChannelMessage.js';
import { MutateChannelResult } from '../types/MutateChannelResult.js';
declare const createChannelMessage: (channelMessage: Partial<ChannelMessage>) => Promise<MutateChannelResult<ChannelMessage>>;
export default createChannelMessage;
