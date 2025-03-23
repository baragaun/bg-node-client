import { MyUser } from '../../models/MyUser.js';
import { MutationResult } from '../../types/MutationResult.js';
import { QueryOptions } from '../../types/QueryOptions.js';
declare const updateMyUser: (changes: Partial<MyUser>, queryOptions?: QueryOptions) => Promise<MutationResult<MyUser>>;
export default updateMyUser;
