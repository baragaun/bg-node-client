import { Channel } from '../../models/Channel.js';
import { ChannelListFilter } from '../../models/ChannelListFilter.js';
import { ChannelListItem } from '../../types/ChannelListItem.js';
import { ChannelMessageScope } from '../../types/ChannelMessageScope.js';
import { FindObjectsOptions } from '../../types/FindObjectsOptions.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';
declare const findMyChannels: (filter?: ChannelListFilter, match?: Partial<Channel>, options?: FindObjectsOptions, scope?: ChannelMessageScope, queryOptions?: QueryOptions) => Promise<QueryResult<ChannelListItem>>;
export default findMyChannels;
