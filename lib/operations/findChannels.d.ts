import { Channel } from '../types/models/Channel.js';
import { ChannelListFilter } from '../types/models/ChannelListFilter.js';
import { QueryResult } from '../types/QueryResult.js';
declare const findChannels: (filter: ChannelListFilter, match: Partial<Channel>, skip: number, limit: number) => Promise<QueryResult<Channel>>;
export default findChannels;
