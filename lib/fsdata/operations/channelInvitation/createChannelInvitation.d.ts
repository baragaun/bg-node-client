import { ChannelInvitation } from '../../../models/ChannelInvitation.js';
import { MutationResult } from '../../../types/MutationResult.js';
import { ChannelInvitationInput } from '../../gql/graphql.js';
declare const createChannelInvitation: (input: ChannelInvitationInput) => Promise<MutationResult<ChannelInvitation>>;
export default createChannelInvitation;
