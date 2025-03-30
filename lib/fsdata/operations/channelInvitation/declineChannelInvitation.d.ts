import { DeclineChannelInvitationReasonTextId as DeclineChannelInvitationReasonTextIdFromClient } from '../../../enums.js';
import { ChannelInvitation } from '../../../models/ChannelInvitation.js';
import { QueryOptions } from '../../../types/QueryOptions.js';
import { QueryResult } from '../../../types/QueryResult.js';
declare const declineChannelInvitation: (channelInvitationId: string, reasonTextId: DeclineChannelInvitationReasonTextIdFromClient, queryOptions?: QueryOptions<ChannelInvitation>) => Promise<QueryResult<ChannelInvitation>>;
export default declineChannelInvitation;
