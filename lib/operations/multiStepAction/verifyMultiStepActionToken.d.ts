import { SidMultiStepActionProgress } from '../../models/SidMultiStepActionProgress.js';
import { MutationResult } from '../../types/MutationResult.js';
declare const verifyMultiStepActionToken: (actionId: string, confirmToken: string, newPassword?: string) => Promise<MutationResult<SidMultiStepActionProgress>>;
export default verifyMultiStepActionToken;
