import { MyUser } from '../../models/MyUser.js';
import { QueryResult } from '../../types/QueryResult.js';
declare const blockUserForMeMock: (userId: string, reasonTextId: string | undefined, notes: string | undefined) => Promise<QueryResult<MyUser>>;
export default blockUserForMeMock;
