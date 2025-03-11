import { SidMultiStepActionProgress } from '../../../types/models/SidMultiStepActionProgress.js';
declare const verifyMultiStepActionToken: (actionId: string, confirmToken: string, newPassword?: string) => Promise<SidMultiStepActionProgress>;
export default verifyMultiStepActionToken;
