import { Channel } from '../../../models/Channel.js';
import { ChannelListFilter as ChannelListFilterFromClient } from '../../../models/ChannelListFilter.js';
import { FindObjectsOptions } from '../../../types/FindObjectsOptions.js';
import { QueryResult } from '../../../types/QueryResult.js';
declare const findChannels: (filter: ChannelListFilterFromClient | null | undefined, match: Partial<Channel> | null | undefined, options: FindObjectsOptions) => Promise<QueryResult<Channel>>;
export default findChannels;
