import { DeclineChannelInvitationReasonTextId as DeclineChannelInvitationReasonTextIdFromClient } from '../../enums.js';
import { ChannelInvitation } from '../../models/ChannelInvitation.js';
import { QueryResult } from '../../types/QueryResult.js';
declare const declineChannelInvitation: (id: string, reasonTextId: DeclineChannelInvitationReasonTextIdFromClient) => Promise<QueryResult<ChannelInvitation>>;
export default declineChannelInvitation;
