import { ChannelInvitation } from '../../models/ChannelInvitation.js';
import { MutationResult } from '../../types/MutationResult.js';
declare const deleteChannelInvitation: (id: string) => Promise<MutationResult<ChannelInvitation>>;
export default deleteChannelInvitation;
