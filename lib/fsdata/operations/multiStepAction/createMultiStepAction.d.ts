import { SidMultiStepActionProgress } from '../../../types/models/SidMultiStepActionProgress.js';
import { SidMultiStepActionInput } from '../../gql/graphql.js';
declare const createMultiStepAction: (input: SidMultiStepActionInput) => Promise<SidMultiStepActionProgress>;
export default createMultiStepAction;
