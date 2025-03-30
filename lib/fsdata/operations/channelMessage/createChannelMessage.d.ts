import { ChannelMessage } from '../../../models/ChannelMessage.js';
import { QueryResult } from '../../../types/QueryResult.js';
import { ChannelMessageInput } from '../../gql/graphql.js';
declare const createChannelMessage: (input: ChannelMessageInput) => Promise<QueryResult<ChannelMessage>>;
export default createChannelMessage;
