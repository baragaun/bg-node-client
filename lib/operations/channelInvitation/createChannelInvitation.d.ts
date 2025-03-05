import { ChannelInvitation } from '../../types/models/ChannelInvitation.js';
import { MutationResult } from '../../types/MutationResult.js';
declare const createChannelInvitation: (attributes: Partial<ChannelInvitation>) => Promise<MutationResult<ChannelInvitation>>;
export default createChannelInvitation;
