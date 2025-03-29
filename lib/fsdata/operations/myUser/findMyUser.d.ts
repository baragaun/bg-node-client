import { MyUser } from '../../../models/MyUser.js';
import { QueryResult } from '../../../types/QueryResult.js';
declare const findMyUser: () => Promise<QueryResult<MyUser>>;
export default findMyUser;
