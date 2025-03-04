import { ChannelInvitation } from '../types/models/ChannelInvitation.js';
import { MutationResult } from '../types/MutationResult.js';
declare const updateChannelInvitation: (changes: Partial<ChannelInvitation>) => Promise<MutationResult<ChannelInvitation>>;
export default updateChannelInvitation;
