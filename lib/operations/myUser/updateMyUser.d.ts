import { MutationResult } from '../../types/index.js';
import { MyUser } from '../../types/models/MyUser.js';
import { QueryOptions } from '../../types/QueryOptions.js';
declare const updateMyUser: (changes: Partial<MyUser>, queryOptions?: QueryOptions) => Promise<MutationResult<MyUser>>;
export default updateMyUser;
