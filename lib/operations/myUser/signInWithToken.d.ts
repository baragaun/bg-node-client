import { MultiStepActionProgressResult } from '../../types/MultiStepActionProgressResult.js';
import { MutationResult } from '../../types/MutationResult.js';
import { QueryOptions } from '../../types/QueryOptions.js';
declare const signInWithToken: (userIdent: string, queryOptions?: QueryOptions) => Promise<MutationResult<MultiStepActionProgressResult>>;
export default signInWithToken;
