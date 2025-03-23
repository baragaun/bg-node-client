import { ChannelParticipant } from '../../models/ChannelParticipant.js';
import { MutationResult } from '../../types/MutationResult.js';
declare const deleteChannelParticipant: (id: string) => Promise<MutationResult<ChannelParticipant>>;
export default deleteChannelParticipant;
