import { DeclineChannelInvitationReasonTextId as DeclineChannelInvitationReasonTextIdFromClient } from '../../../enums.js';
import { MutationResult } from '../../../types/MutationResult.js';
declare const declineChannelInvitation: (channelInvitationId: string, reasonTextId: DeclineChannelInvitationReasonTextIdFromClient) => Promise<MutationResult<void>>;
export default declineChannelInvitation;
