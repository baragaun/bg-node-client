import { ChannelInvitation } from '../../models/ChannelInvitation.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';
declare const updateChannelInvitation: (changes: Partial<ChannelInvitation>, queryOptions?: QueryOptions) => Promise<QueryResult<ChannelInvitation>>;
export default updateChannelInvitation;
