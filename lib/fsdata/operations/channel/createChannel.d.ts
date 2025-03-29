import { Channel } from '../../../models/Channel.js';
import { QueryResult } from '../../../types/QueryResult.js';
import { ChannelInput } from '../../gql/graphql.js';
declare const createChannel: (input: ChannelInput) => Promise<QueryResult<Channel>>;
export default createChannel;
