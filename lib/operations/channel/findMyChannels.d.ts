import { Channel } from '../../models/Channel.js';
import { ChannelListFilter } from '../../models/ChannelListFilter.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';
declare const findMyChannels: (filter: ChannelListFilter, match: Partial<Channel>, skip: number, limit: number, queryOptions?: QueryOptions) => Promise<QueryResult<Channel>>;
export default findMyChannels;
