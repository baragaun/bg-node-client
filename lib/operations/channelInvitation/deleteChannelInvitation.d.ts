import { ChannelInvitation } from '../../models/ChannelInvitation.js';
import { QueryResult } from '../../types/QueryResult.js';
declare const deleteChannelInvitation: (id: string) => Promise<QueryResult<ChannelInvitation>>;
export default deleteChannelInvitation;
