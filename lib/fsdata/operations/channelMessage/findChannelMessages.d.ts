import { ChannelMessage } from '../../../models/ChannelMessage.js';
import { FindObjectsOptions as FindObjectsOptionsFromClient } from '../../../types/FindObjectsOptions.js';
import { QueryResult } from '../../../types/QueryResult.js';
import { ChannelInput, ChannelListFilter } from '../../gql/graphql.js';
declare const findChannelMessages: (filter: ChannelListFilter | undefined, match: ChannelInput | undefined, options: FindObjectsOptionsFromClient) => Promise<QueryResult<ChannelMessage>>;
export default findChannelMessages;
