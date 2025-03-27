import { MyUser } from '../../../models/MyUser.js';
import { MutationResult } from '../../../types/MutationResult.js';
import { QueryOptions } from '../../../types/QueryOptions.js';
declare const blockUserForMe: (userId: string, reasonTextId: string | undefined, notes: string | undefined, queryOptions?: QueryOptions) => Promise<MutationResult<MyUser>>;
export default blockUserForMe;
