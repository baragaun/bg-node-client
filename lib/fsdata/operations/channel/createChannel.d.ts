import { Channel } from '../../../models/Channel.js';
import { MutationResult } from '../../../types/MutationResult.js';
import { ChannelInput } from '../../gql/graphql.js';
declare const createChannel: (input: ChannelInput) => Promise<MutationResult<Channel>>;
export default createChannel;
