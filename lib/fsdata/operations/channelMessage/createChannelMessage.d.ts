import { ChannelMessage } from '../../../models/ChannelMessage.js';
import { MutationResult } from '../../../types/MutationResult.js';
import { ChannelMessageInput } from '../../gql/graphql.js';
declare const createChannelMessage: (input: ChannelMessageInput) => Promise<MutationResult<ChannelMessage>>;
export default createChannelMessage;
