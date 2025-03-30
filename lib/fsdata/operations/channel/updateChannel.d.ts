import { Channel } from '../../../models/Channel.js';
import { QueryOptions } from '../../../types/QueryOptions.js';
import { QueryResult } from '../../../types/QueryResult.js';
declare const updateChannel: (changes: Partial<Channel>, queryOptions?: QueryOptions<Channel>) => Promise<QueryResult<Channel>>;
export default updateChannel;
