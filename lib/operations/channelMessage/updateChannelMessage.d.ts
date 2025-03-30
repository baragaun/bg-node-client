import { ChannelMessage } from '../../models/ChannelMessage.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';
declare const updateChannelMessage: (changes: Partial<ChannelMessage>, queryOptions?: QueryOptions) => Promise<QueryResult<ChannelMessage>>;
export default updateChannelMessage;
