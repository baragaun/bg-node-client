import { ChannelMessage } from '../../models/ChannelMessage.js';
import { ChannelMessageListFilter } from '../../models/ChannelMessageListFilter.js';
import { FindObjectsOptions } from '../../types/FindObjectsOptions.js';
import { MangoQueryTypes } from '../../types/mangoQuery.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';
declare const findChannelMessages: (filter: ChannelMessageListFilter | null | undefined, match: Partial<ChannelMessage> | null | undefined, selector: MangoQueryTypes<ChannelMessage> | null | undefined, options: FindObjectsOptions, queryOptions?: QueryOptions) => Promise<QueryResult<ChannelMessage>>;
export default findChannelMessages;
