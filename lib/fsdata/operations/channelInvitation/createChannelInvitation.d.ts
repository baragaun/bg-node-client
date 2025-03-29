import { ChannelInvitation } from '../../../models/ChannelInvitation.js';
import { QueryResult } from '../../../types/QueryResult.js';
import { ChannelInvitationInput } from '../../gql/graphql.js';
declare const createChannelInvitation: (input: ChannelInvitationInput) => Promise<QueryResult<ChannelInvitation>>;
export default createChannelInvitation;
