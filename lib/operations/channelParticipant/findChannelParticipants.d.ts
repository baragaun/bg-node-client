import { ChannelParticipant } from '../../models/ChannelParticipant.js';
import { ChannelParticipantListFilter } from '../../models/ChannelParticipantListFilter.js';
import { FindObjectsOptions } from '../../types/FindObjectsOptions.js';
import { MangoQueryTypes } from '../../types/mangoQuery.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';
declare const findChannelParticipants: (filter: ChannelParticipantListFilter, match: Partial<ChannelParticipant>, selector: MangoQueryTypes<ChannelParticipant> | null | undefined, options: FindObjectsOptions, queryOptions?: QueryOptions) => Promise<QueryResult<ChannelParticipant>>;
export default findChannelParticipants;
