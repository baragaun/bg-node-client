import { MutationResult } from '../../types/MutationResult.js';
import { SidMultiStepActionProgress } from '../../types/models/SidMultiStepActionProgress.js';
import { VerifyMultiStepActionTokenInput } from '../../types/models/VerifyMultiStepActionTokenInput.js';
declare const verifyMultiStepActionToken: (input: VerifyMultiStepActionTokenInput) => Promise<MutationResult<SidMultiStepActionProgress>>;
export default verifyMultiStepActionToken;
