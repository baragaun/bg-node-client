import { ChannelParticipant } from '../../models/ChannelParticipant.js';
import { QueryResult } from '../../types/QueryResult.js';
declare const createChannelParticipant: (attributes: Partial<ChannelParticipant>) => Promise<QueryResult<ChannelParticipant>>;
export default createChannelParticipant;
