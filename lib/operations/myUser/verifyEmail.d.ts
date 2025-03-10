import { MutationResult } from '../../types/MutationResult.js';
import { SidMultiStepActionProgress } from '../../types/models/SidMultiStepActionProgress.js';
declare const verifyEmail: (userId: string, email: string) => Promise<MutationResult<SidMultiStepActionProgress>>;
export default verifyEmail;
