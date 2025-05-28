import { ChannelParticipant } from '../../../models/ChannelParticipant.js';
import { FindObjectsOptions as FindObjectsOptionsFromClient } from '../../../types/FindObjectsOptions.js';
import { QueryResult } from '../../../types/QueryResult.js';
import { ChannelParticipantInput, ChannelParticipantListFilter } from '../../gql/graphql.js';
declare const findChannelParticipants: (filter: ChannelParticipantListFilter | undefined, match: ChannelParticipantInput | undefined, options: FindObjectsOptionsFromClient) => Promise<QueryResult<ChannelParticipant>>;
export default findChannelParticipants;
