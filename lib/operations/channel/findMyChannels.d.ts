import { Channel } from '../../models/Channel.js';
import { FindObjectsOptions } from '../../types/FindObjectsOptions.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';
declare const findMyChannels: (options: FindObjectsOptions, queryOptions?: QueryOptions) => Promise<QueryResult<Channel>>;
export default findMyChannels;
