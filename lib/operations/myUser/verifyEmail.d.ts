import { SidMultiStepActionProgress } from '../../types/models/SidMultiStepActionProgress.js';
import { MutationResult } from '../../types/MutationResult.js';
declare const verifyEmail: (userId: string, email: string) => Promise<MutationResult<SidMultiStepActionProgress>>;
export default verifyEmail;
