import { ChannelInvitationDirection } from '../../enums.js';
import { ChannelInvitation } from '../../models/ChannelInvitation.js';
import { FindObjectsOptions } from '../../types/FindObjectsOptions.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';
declare const findChannelInvitationsForUser: (userId: string, onlyUnseen: boolean, onlyPending: boolean, direction: ChannelInvitationDirection, options: FindObjectsOptions, queryOptions?: QueryOptions) => Promise<QueryResult<ChannelInvitation>>;
export default findChannelInvitationsForUser;
