import { Channel } from '../../types/models/Channel.js';
import { ChannelListFilter } from '../../types/models/ChannelListFilter.js';
import { QueryResult } from '../../types/QueryResult.js';
import { QueryOptions } from '../../types/QueryOptions.js';
declare const findChannels: (filter: ChannelListFilter, match: Partial<Channel>, skip: number, limit: number, queryOptions?: QueryOptions) => Promise<QueryResult<Channel>>;
export default findChannels;
