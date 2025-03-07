import { SidMultiStepActionInput, SidMultiStepActionProgress } from '../../fsdata/gql/graphql.js';
import { MutationResult } from '../../types/MutationResult.js';
declare const createMultiStepAction: (input: SidMultiStepActionInput) => Promise<MutationResult<SidMultiStepActionProgress>>;
export default createMultiStepAction;
