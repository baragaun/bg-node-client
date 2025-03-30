import { MyUser } from '../../models/MyUser.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';
declare const blockUserForMe: (userId: string, reasonTextId: string | undefined, notes: string | undefined, queryOptions?: QueryOptions) => Promise<QueryResult<MyUser>>;
export default blockUserForMe;
