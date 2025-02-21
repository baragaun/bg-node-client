import { ChannelMessage } from '../types/models/ChannelMessage.js';
import { ChannelMessageFilter } from '../types/ChannelMessageFilter.js';
declare const findChannelMessages: (filter: ChannelMessageFilter, skip: number, limit: number) => Promise<ChannelMessage[]>;
export default findChannelMessages;
