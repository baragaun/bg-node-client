import { ChannelInvitation } from '../../models/ChannelInvitation.js';
import { QueryResult } from '../../types/QueryResult.js';
declare const updateChannelInvitation: (changes: Partial<ChannelInvitation>) => Promise<QueryResult<ChannelInvitation>>;
export default updateChannelInvitation;
