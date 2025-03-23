import { ChannelParticipant } from '../../models/ChannelParticipant.js';
import { MutationResult } from '../../types/MutationResult.js';
declare const createChannelParticipant: (attributes: Partial<ChannelParticipant>) => Promise<MutationResult<ChannelParticipant>>;
export default createChannelParticipant;
