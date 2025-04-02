import { ChannelInvitation } from '../../models/ChannelInvitation.js';
import { QueryResult } from '../../types/QueryResult.js';
declare const createChannelInvitation: (props: Partial<ChannelInvitation>) => Promise<QueryResult<ChannelInvitation>>;
export default createChannelInvitation;
