import { Channel } from '../../../models/Channel.js';
import { ChannelListFilter as ChannelListFilterFromClient } from '../../../models/ChannelListFilter.js';
import { FindObjectsOptions as FindObjectsOptionsFromClient } from '../../../types/FindObjectsOptions.js';
import { QueryResult } from '../../../types/QueryResult.js';
declare const findMyChannels: (filter: ChannelListFilterFromClient | null | undefined, match: Partial<Channel> | null | undefined, options: FindObjectsOptionsFromClient) => Promise<QueryResult<Channel>>;
export default findMyChannels;
