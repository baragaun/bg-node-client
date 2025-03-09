import { SidMultiStepActionProgress } from '../../fsdata/gql/graphql.js';
import { MutationResult } from '../../types/MutationResult.js';
declare const startTokenSignIn: (email: string) => Promise<MutationResult<SidMultiStepActionProgress>>;
export default startTokenSignIn;
