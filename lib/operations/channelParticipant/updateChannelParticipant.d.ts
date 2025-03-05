import { ChannelParticipant } from '../../types/models/ChannelParticipant.js';
import { MutationResult } from '../../types/MutationResult.js';
declare const updateChannelParticipant: (changes: Partial<ChannelParticipant>) => Promise<MutationResult<ChannelParticipant>>;
export default updateChannelParticipant;
