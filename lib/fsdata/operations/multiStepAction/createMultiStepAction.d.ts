import { SidMultiStepActionInput, SidMultiStepActionProgress } from '../../gql/graphql.js';
declare const createMultiStepAction: (input: SidMultiStepActionInput) => Promise<SidMultiStepActionProgress>;
export default createMultiStepAction;
