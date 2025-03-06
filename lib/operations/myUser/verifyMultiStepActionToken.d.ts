import { SidMultiStepActionProgress, VerifyMultiStepActionTokenInput } from '../../fsdata/gql/graphql.js';
import { MutationResult } from '../../types/MutationResult.js';
declare const verifyMultiStepActionToken: (input: VerifyMultiStepActionTokenInput) => Promise<MutationResult<SidMultiStepActionProgress>>;
export default verifyMultiStepActionToken;
