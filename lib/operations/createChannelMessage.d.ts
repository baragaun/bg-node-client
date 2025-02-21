import { ChannelMessage } from '../types/models/ChannelMessage.js';
import { MutateChannelResult } from '../types/MutateChannelResult.js';
import { User } from '../types/models/User.js';
declare const createChannelMessage: (channelMessage: Partial<ChannelMessage>, sender?: User) => Promise<MutateChannelResult<ChannelMessage>>;
export default createChannelMessage;
