import { MyUser } from '../../models/MyUser.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';
declare const updateMyPassword: (oldPassword: string, newPassword: string, queryOptions?: QueryOptions) => Promise<QueryResult<MyUser>>;
export default updateMyPassword;
