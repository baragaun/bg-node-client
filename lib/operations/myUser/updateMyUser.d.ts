import { MyUser } from '../../models/MyUser.js';
import { MyUserChanges } from '../../models/MyUserChanges.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';
declare const updateMyUser: (changes: Partial<MyUserChanges>, queryOptions?: QueryOptions) => Promise<QueryResult<MyUser>>;
export default updateMyUser;
