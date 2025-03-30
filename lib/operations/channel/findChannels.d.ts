import { Channel } from '../../models/Channel.js';
import { ChannelListFilter } from '../../models/ChannelListFilter.js';
import { FindObjectsOptions } from '../../types/FindObjectsOptions.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';
declare const findChannels: (filter: ChannelListFilter, match: Partial<Channel>, options: FindObjectsOptions, queryOptions?: QueryOptions) => Promise<QueryResult<Channel>>;
export default findChannels;
