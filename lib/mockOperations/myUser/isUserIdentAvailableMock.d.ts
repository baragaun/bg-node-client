import { UserIdentType as UserIdentTypeFromClient } from '../../enums.js';
import { QueryResult } from '../../types/QueryResult.js';
declare const isUserIdentAvailableMock: (userIdent: string, _identType: UserIdentTypeFromClient) => Promise<QueryResult<boolean>>;
export default isUserIdentAvailableMock;
