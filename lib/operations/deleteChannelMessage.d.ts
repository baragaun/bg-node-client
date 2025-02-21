import { ChannelMessage } from '../types/models/ChannelMessage.js';
import { MutateChannelResult } from '../types/MutateChannelResult.js';
declare const deleteChannelMessage: (id: string) => Promise<MutateChannelResult<ChannelMessage>>;
export default deleteChannelMessage;
