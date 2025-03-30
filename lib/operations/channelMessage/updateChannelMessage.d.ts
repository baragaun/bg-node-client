import { ChannelMessage } from '../../models/ChannelMessage.js';
import { QueryResult } from '../../types/QueryResult.js';
declare const updateChannelMessage: (changes: Partial<ChannelMessage>) => Promise<QueryResult<ChannelMessage>>;
export default updateChannelMessage;
