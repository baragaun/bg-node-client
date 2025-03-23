import { ChannelParticipant } from '../../models/ChannelParticipant.js';
import { ChannelParticipantListFilter } from '../../models/ChannelParticipantListFilter.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';
declare const findChannelParticipants: (filter: ChannelParticipantListFilter, match: Partial<ChannelParticipant>, skip: number, limit: number, queryOptions?: QueryOptions) => Promise<QueryResult<ChannelParticipant>>;
export default findChannelParticipants;
