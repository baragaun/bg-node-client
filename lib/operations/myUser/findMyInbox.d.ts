import { UserInbox } from '../../models/UserInbox.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';
declare const findMyInbox: (queryOptions?: QueryOptions) => Promise<QueryResult<UserInbox>>;
export default findMyInbox;
