import { SidMultiStepActionProgress } from '../../fsdata/gql/graphql.js';
import { MutationResult } from '../../types/MutationResult.js';
declare const startVerifyEmail: (userId: string, email: string) => Promise<MutationResult<SidMultiStepActionProgress>>;
export default startVerifyEmail;
