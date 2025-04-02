import { ChannelInvitation } from '../../../models/ChannelInvitation.js';
import { ChannelInvitationListFilter } from '../../../models/ChannelInvitationListFilter.js';
import { FindObjectsOptions as FindObjectsOptionsFromClient } from '../../../types/FindObjectsOptions.js';
import { QueryResult } from '../../../types/QueryResult.js';
declare const findChannelInvitations: (_filter: ChannelInvitationListFilter, _match: Partial<ChannelInvitation>, _options: FindObjectsOptionsFromClient) => Promise<QueryResult<ChannelInvitation>>;
export default findChannelInvitations;
