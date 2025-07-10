import { Channel } from '../../../models/Channel.js';
import { FindObjectsOptions } from '../../../types/FindObjectsOptions.js';
import { QueryResult } from '../../../types/QueryResult.js';
declare const findMyChannels: (options: FindObjectsOptions) => Promise<QueryResult<Channel>>;
export default findMyChannels;
