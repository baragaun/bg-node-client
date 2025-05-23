import { Channel } from '../../../models/Channel.js';
import { FindObjectsOptions as FindObjectsOptionsFromClient } from '../../../types/FindObjectsOptions.js';
import { QueryResult } from '../../../types/QueryResult.js';
import { ChannelListFilter } from '../../gql/graphql.js';
declare const findMyChannels: (filter: ChannelListFilter | null | undefined, match: Partial<Channel> | null | undefined, options: FindObjectsOptionsFromClient) => Promise<QueryResult<Channel>>;
export default findMyChannels;
