import { FindChannelOptions, FindChannelResult } from '../../types/findChannelTypes.js';
import { QueryOptions } from '../../types/QueryOptions.js';
declare const findChannelById: (id: string, options: FindChannelOptions, queryOptions?: QueryOptions) => Promise<FindChannelResult>;
export default findChannelById;
