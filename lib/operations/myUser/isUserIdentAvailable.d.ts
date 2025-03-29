import { UserIdentType as UserIdentTypeFromClient } from '../../enums.js';
import { QueryResult } from '../../types/QueryResult.js';
declare const isUserIdentAvailable: (userIdent: string, identType: UserIdentTypeFromClient) => Promise<QueryResult<boolean>>;
export default isUserIdentAvailable;
