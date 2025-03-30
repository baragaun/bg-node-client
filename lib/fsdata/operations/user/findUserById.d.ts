import { User } from '../../../models/User.js';
import { FindObjectsOptions as FindObjectsOptionsFromClient } from '../../../types/FindObjectsOptions.js';
import { QueryResult } from '../../../types/QueryResult.js';
declare const findUserById: (userId: string, options: FindObjectsOptionsFromClient) => Promise<QueryResult<User>>;
export default findUserById;
