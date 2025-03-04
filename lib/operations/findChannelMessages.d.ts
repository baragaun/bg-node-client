import { ChannelMessage } from '../types/models/ChannelMessage.js';
import { ChannelMessageListFilter } from '../types/models/ChannelMessageListFilter.js';
import { QueryResult } from '../types/QueryResult.js';
declare const findChannelMessages: (filter: ChannelMessageListFilter, match: Partial<ChannelMessage>, skip: number, limit: number) => Promise<QueryResult<ChannelMessage>>;
export default findChannelMessages;
