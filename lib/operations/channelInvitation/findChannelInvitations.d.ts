import { ChannelInvitation } from '../../models/ChannelInvitation.js';
import { ChannelInvitationListFilter } from '../../models/ChannelInvitationListFilter.js';
import { FindObjectsOptions } from '../../types/FindObjectsOptions.js';
import { MangoQueryTypes } from '../../types/mangoQuery.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';
declare const findChannelInvitationsForUser: (filter: ChannelInvitationListFilter, match: Partial<ChannelInvitation>, selector: MangoQueryTypes<ChannelInvitation> | null | undefined, options: FindObjectsOptions, queryOptions?: QueryOptions) => Promise<QueryResult<ChannelInvitation>>;
export default findChannelInvitationsForUser;
