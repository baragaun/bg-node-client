import { Channel } from '../../../models/Channel.js';
import { FindObjectsOptions as FindObjectsOptionsFromClient } from '../../../types/FindObjectsOptions.js';
import { QueryResult } from '../../../types/QueryResult.js';
declare const findMyChannels: (options: FindObjectsOptionsFromClient) => Promise<QueryResult<Channel>>;
export default findMyChannels;
