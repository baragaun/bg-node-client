import { SidMultiStepActionProgress } from '../../types/models/SidMultiStepActionProgress.js';
import { MutationResult } from '../../types/MutationResult.js';
declare const resetPassword: (userIdent: string) => Promise<MutationResult<SidMultiStepActionProgress>>;
export default resetPassword;
