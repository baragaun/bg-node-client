import { SidMultiStepActionProgress } from '../../types/models/SidMultiStepActionProgress.js';
declare const getMultiStepActionProgress: (actionId: string, confirmToken: string | undefined) => Promise<SidMultiStepActionProgress | null>;
export default getMultiStepActionProgress;
