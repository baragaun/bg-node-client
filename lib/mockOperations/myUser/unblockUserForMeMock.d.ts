import { MyUser } from '../../models/MyUser.js';
import { QueryResult } from '../../types/QueryResult.js';
declare const unblockUserForMeMock: (userId: string) => Promise<QueryResult<MyUser>>;
export default unblockUserForMeMock;
