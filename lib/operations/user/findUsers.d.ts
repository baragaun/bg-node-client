import { User } from '../../models/User.js';
import { UserListFilter } from '../../models/UserListFilter.js';
import { FindObjectsOptions } from '../../types/FindObjectsOptions.js';
import { MangoQueryTypes } from '../../types/mangoQuery.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';
declare const findUsers: (filter: UserListFilter | null | undefined, match: Partial<User> | null | undefined, selector: MangoQueryTypes<User> | null | undefined, options: FindObjectsOptions, queryOptions?: QueryOptions) => Promise<QueryResult<User>>;
export default findUsers;
