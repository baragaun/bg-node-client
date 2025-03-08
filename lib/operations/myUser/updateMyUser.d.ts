import { MyUser } from '../../types/models/MyUser.js';
import { QueryOptions } from '../../types/QueryOptions.js';
declare const updateMyUser: (myUser: MyUser, queryOptions?: QueryOptions) => Promise<MyUser | null>;
export default updateMyUser;
