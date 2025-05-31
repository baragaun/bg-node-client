import { ChannelMessage } from '../../../models/ChannelMessage.js';
import { ChannelMessageListFilter as ChannelMessageListFilterFromClient } from '../../../models/ChannelMessageListFilter.js';
import { FindObjectsOptions as FindObjectsOptionsFromClient } from '../../../types/FindObjectsOptions.js';
import { QueryResult } from '../../../types/QueryResult.js';
declare const findChannelMessages: (filter: ChannelMessageListFilterFromClient | undefined, match: Partial<ChannelMessage> | undefined, options: FindObjectsOptionsFromClient) => Promise<QueryResult<ChannelMessage>>;
export default findChannelMessages;
