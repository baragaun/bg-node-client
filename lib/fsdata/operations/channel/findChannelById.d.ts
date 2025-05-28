import { Channel } from '../../../models/Channel.js';
import { QueryResult } from '../../../types/QueryResult.js';
declare const findChannelById: (channelId: string) => Promise<QueryResult<Channel>>;
export default findChannelById;
