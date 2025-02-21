import { Channel } from '../types/models/Channel.js';
import { ChannelFilter } from '../types/ChannelFilter.js';
declare const findChannels: (filter: ChannelFilter, skip: number, limit: number) => Promise<Channel[]>;
export default findChannels;
