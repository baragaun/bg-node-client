import { MultiStepActionProgressResult } from '../../types/MultiStepActionProgressResult.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';
declare const getMultiStepActionProgress: (actionId: string, confirmToken: string | undefined, queryOptions: QueryOptions) => Promise<QueryResult<MultiStepActionProgressResult>>;
export default getMultiStepActionProgress;
