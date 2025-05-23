import { User } from '../../models/User.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';
declare const findUserById: (id: string, queryOptions?: QueryOptions) => Promise<QueryResult<User>>;
export default findUserById;
