import { SidMultiStepActionInput } from '../../gql/graphql.js';
import { SidMultiStepActionProgress } from '../../../types/models/SidMultiStepActionProgress.js';
declare const createMultiStepAction: (input: SidMultiStepActionInput) => Promise<SidMultiStepActionProgress>;
export default createMultiStepAction;
