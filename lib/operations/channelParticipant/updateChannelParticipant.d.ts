import { ChannelParticipant } from '../../models/ChannelParticipant.js';
import { QueryResult } from '../../types/QueryResult.js';
declare const updateChannelParticipant: (changes: Partial<ChannelParticipant>) => Promise<QueryResult<ChannelParticipant>>;
export default updateChannelParticipant;
