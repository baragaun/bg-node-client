import { ChannelParticipant } from '../../models/ChannelParticipant.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';
declare const updateChannelParticipant: (changes: Partial<ChannelParticipant>, queryOptions?: QueryOptions) => Promise<QueryResult<ChannelParticipant>>;
export default updateChannelParticipant;
