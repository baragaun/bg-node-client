import { DeclineChannelInvitationReasonTextId as DeclineChannelInvitationReasonTextIdFromClient } from '../../../enums.js';
import { QueryResult } from '../../../types/QueryResult.js';
declare const declineChannelInvitation: (channelInvitationId: string, reasonTextId: DeclineChannelInvitationReasonTextIdFromClient) => Promise<QueryResult<void>>;
export default declineChannelInvitation;
