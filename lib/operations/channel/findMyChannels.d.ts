import { Channel } from '../../models/Channel.js';
import { ChannelListFilter } from '../../models/ChannelListFilter.js';
import { FindObjectsOptions } from '../../types/FindObjectsOptions.js';
import { MangoQueryTypes } from '../../types/mangoQuery.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';
declare const findMyChannels: (filter: ChannelListFilter | null | undefined, match: Partial<Channel> | null | undefined, selector: MangoQueryTypes<Channel> | null | undefined, options: FindObjectsOptions, queryOptions?: QueryOptions) => Promise<QueryResult<Channel>>;
export default findMyChannels;
