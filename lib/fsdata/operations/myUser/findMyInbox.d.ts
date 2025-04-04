import { UserInbox } from '../../../models/UserInbox.js';
import { QueryResult } from '../../../types/QueryResult.js';
declare const findMyInbox: () => Promise<QueryResult<UserInbox>>;
export default findMyInbox;
