import { Channel } from '../../../models/Channel.js';
import { QueryResult } from '../../../types/QueryResult.js';
declare const createChannel: (props: Partial<Channel>) => Promise<QueryResult<Channel>>;
export default createChannel;
