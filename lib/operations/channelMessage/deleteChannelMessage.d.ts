import { ChannelMessage } from '../../models/ChannelMessage.js';
import { QueryResult } from '../../types/QueryResult.js';
declare const deleteChannelMessage: (id: string) => Promise<QueryResult<ChannelMessage>>;
export default deleteChannelMessage;
