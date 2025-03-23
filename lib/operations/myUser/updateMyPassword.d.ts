import { MyUser } from '../../models/MyUser.js';
import { MutationResult } from '../../types/MutationResult.js';
import { QueryOptions } from '../../types/QueryOptions.js';
declare const updateMyPassword: (oldPassword: string, newPassword: string, queryOptions?: QueryOptions) => Promise<MutationResult<MyUser>>;
export default updateMyPassword;
