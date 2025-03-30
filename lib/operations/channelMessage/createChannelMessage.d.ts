import { ChannelMessage } from '../../models/ChannelMessage.js';
import { QueryResult } from '../../types/QueryResult.js';
declare const createChannelMessage: (attributes: Partial<ChannelMessage>) => Promise<QueryResult<ChannelMessage>>;
export default createChannelMessage;
