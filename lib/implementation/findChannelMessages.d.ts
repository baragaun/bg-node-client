import { ChannelMessage } from '../types/models/ChannelMessage';
declare const findChannelMessages: (channelId: string, skip: number, limit: number) => Promise<ChannelMessage[]>;
export default findChannelMessages;
