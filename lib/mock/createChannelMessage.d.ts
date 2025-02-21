import { ChannelMessage } from '../types/models/ChannelMessage.js';
import { MutateChannelResult } from '../types/MutateChannelResult.js';
declare const createChannelMessage: (attributes: Partial<ChannelMessage>) => Promise<MutateChannelResult<ChannelMessage>>;
export default createChannelMessage;
