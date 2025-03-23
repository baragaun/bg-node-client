import { ChannelInvitation } from '../../models/ChannelInvitation.js';
import { ChannelInvitationListFilter } from '../../models/ChannelInvitationListFilter.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';
declare const findChannelInvitations: (filter: ChannelInvitationListFilter, match: Partial<ChannelInvitation>, skip: number, limit: number, queryOptions?: QueryOptions) => Promise<QueryResult<ChannelInvitation>>;
export default findChannelInvitations;
