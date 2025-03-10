import { SidMultiStepActionProgress } from '../../fsdata/gql/graphql.js';
import { MutationResult } from '../../types/MutationResult.js';
declare const signInWithToken: (email: string) => Promise<MutationResult<SidMultiStepActionProgress>>;
export default signInWithToken;
