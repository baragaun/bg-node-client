import { MutationResult } from '../../types/index.js';
import { MyUser } from '../../types/models/MyUser.js';
import { QueryOptions } from '../../types/QueryOptions.js';
declare const updateMyUser: (myUser: Partial<MyUser>, queryOptions?: QueryOptions) => Promise<MutationResult<MyUser | null>>;
export default updateMyUser;
