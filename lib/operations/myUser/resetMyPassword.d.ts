import { MultiStepActionProgressResult } from '../../types/MultiStepActionProgressResult.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';
declare const resetMyPassword: (userIdent: string, queryOptions: QueryOptions) => Promise<QueryResult<MultiStepActionProgressResult>>;
export default resetMyPassword;
