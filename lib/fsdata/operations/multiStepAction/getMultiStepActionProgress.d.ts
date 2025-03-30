import { SidMultiStepActionProgress } from '../../../models/SidMultiStepActionProgress.js';
import { QueryResult } from '../../../types/QueryResult.js';
declare const getMultiStepActionProgress: (actionId: string, confirmToken: string | undefined) => Promise<QueryResult<SidMultiStepActionProgress>>;
export default getMultiStepActionProgress;
