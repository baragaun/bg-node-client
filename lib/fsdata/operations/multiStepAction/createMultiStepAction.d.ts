import { SidMultiStepActionProgress } from '../../../models/SidMultiStepActionProgress.js';
import { QueryResult } from '../../../types/QueryResult.js';
import { SidMultiStepActionInput } from '../../gql/graphql.js';
declare const createMultiStepAction: (input: SidMultiStepActionInput) => Promise<QueryResult<SidMultiStepActionProgress>>;
export default createMultiStepAction;
