import { MyUser } from '../../types/models/MyUser.js';
import { QueryOptions } from '../../types/QueryOptions.js';
declare const findMyUser: (queryOptions: QueryOptions) => Promise<MyUser | null>;
export default findMyUser;
