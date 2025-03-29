import { Channel } from '../../models/Channel.js';
import { QueryResult } from '../../types/QueryResult.js';
declare const updateChannel: (changes: Partial<Channel>) => Promise<QueryResult<Channel>>;
export default updateChannel;
