import { ChannelInvitation } from '../../../models/ChannelInvitation.js';
import { QueryOptions } from '../../../types/QueryOptions.js';
import { QueryResult } from '../../../types/QueryResult.js';
declare const acceptChannelInvitation: (channelInvitationId: string, queryOptions?: QueryOptions<ChannelInvitation>) => Promise<QueryResult<ChannelInvitation>>;
export default acceptChannelInvitation;
