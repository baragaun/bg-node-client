import { ChannelParticipant } from '../../models/ChannelParticipant.js';
import { QueryResult } from '../../types/QueryResult.js';
declare const deleteChannelParticipant: (id: string) => Promise<QueryResult<ChannelParticipant>>;
export default deleteChannelParticipant;
