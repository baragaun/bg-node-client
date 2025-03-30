import { MyUser } from '../../models/MyUser.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';
declare const unblockUserForMe: (userId: string, queryOptions?: QueryOptions) => Promise<QueryResult<MyUser>>;
export default unblockUserForMe;
