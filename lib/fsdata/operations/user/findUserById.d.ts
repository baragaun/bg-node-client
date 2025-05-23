import { User } from '../../../models/User.js';
import { QueryResult } from '../../../types/QueryResult.js';
declare const findUserById: (userId: string) => Promise<QueryResult<User>>;
export default findUserById;
