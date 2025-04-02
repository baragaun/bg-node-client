import { ChannelInvitationDirection as ChannelInvitationDirectionFromClient } from '../../../enums.js';
import { ChannelInvitation } from '../../../models/ChannelInvitation.js';
import { FindObjectsOptions as FindObjectsOptionsFromClient } from '../../../types/FindObjectsOptions.js';
import { QueryResult } from '../../../types/QueryResult.js';
declare const findChannelInvitationsForUser: (userId: string, onlyUnseen: boolean, onlyPending: boolean, direction: ChannelInvitationDirectionFromClient, options: FindObjectsOptionsFromClient) => Promise<QueryResult<ChannelInvitation>>;
export default findChannelInvitationsForUser;
