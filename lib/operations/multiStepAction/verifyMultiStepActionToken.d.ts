import { SidMultiStepActionProgress } from '../../models/SidMultiStepActionProgress.js';
import { QueryResult } from '../../types/QueryResult.js';
declare const verifyMultiStepActionToken: (actionId: string, confirmToken: string, newPassword?: string) => Promise<QueryResult<SidMultiStepActionProgress>>;
export default verifyMultiStepActionToken;
