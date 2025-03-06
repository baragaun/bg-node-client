import { ChannelMessage } from '../../types/models/ChannelMessage.js';
import { ChannelMessageListFilter } from '../../types/models/ChannelMessageListFilter.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';
declare const findChannelMessages: (filter: ChannelMessageListFilter, match: Partial<ChannelMessage>, skip: number, limit: number, queryOptions?: QueryOptions) => Promise<QueryResult<ChannelMessage>>;
export default findChannelMessages;
