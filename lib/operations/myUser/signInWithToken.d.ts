import { MutationResult } from '../../types/MutationResult.js';
import { SidMultiStepActionProgress } from '../../types/models/SidMultiStepActionProgress.js';
declare const signInWithToken: (email: string) => Promise<MutationResult<SidMultiStepActionProgress>>;
export default signInWithToken;
