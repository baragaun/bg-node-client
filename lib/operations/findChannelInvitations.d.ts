import { ChannelInvitation } from '../types/models/ChannelInvitation.js';
import { ChannelInvitationListFilter } from '../types/models/ChannelInvitationListFilter.js';
import { QueryResult } from '../types/QueryResult.js';
declare const findChannelInvitations: (filter: ChannelInvitationListFilter, match: Partial<ChannelInvitation>, skip: number, limit: number) => Promise<QueryResult<ChannelInvitation>>;
export default findChannelInvitations;
