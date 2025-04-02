import { ChannelInvitation } from '../../models/ChannelInvitation.js';
import { ChannelInvitationListFilter } from '../../models/ChannelInvitationListFilter.js';
import { FindObjectsOptions } from '../../types/FindObjectsOptions.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';
declare const findChannelInvitationsForUser: (filter: ChannelInvitationListFilter, match: Partial<ChannelInvitation>, options: FindObjectsOptions, queryOptions?: QueryOptions) => Promise<QueryResult<ChannelInvitation>>;
export default findChannelInvitationsForUser;
