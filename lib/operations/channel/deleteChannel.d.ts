import { Channel } from '../../models/Channel.js';
import { QueryResult } from '../../types/QueryResult.js';
declare const deleteChannel: (id: string) => Promise<QueryResult<Channel>>;
export default deleteChannel;
