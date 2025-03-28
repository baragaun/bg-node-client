import { Channel } from '../../../models/Channel.js';
import { FindObjectsOptions as FindObjectsOptionsFromClient } from '../../../types/FindObjectsOptions.js';
import { QueryResult } from '../../../types/QueryResult.js';
import { ChannelListFilter } from '../../gql/graphql.js';
declare const findChannels: (filter: ChannelListFilter | undefined, match: Partial<Channel> | undefined, options: FindObjectsOptionsFromClient) => Promise<QueryResult<Channel>>;
export default findChannels;
