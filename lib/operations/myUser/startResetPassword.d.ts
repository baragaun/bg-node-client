import { SidMultiStepActionProgress, UserIdentInput } from '../../fsdata/gql/graphql.js';
import { MutationResult } from '../../types/MutationResult.js';
declare const startPasswordReset: (input: UserIdentInput) => Promise<MutationResult<SidMultiStepActionProgress>>;
export default startPasswordReset;
