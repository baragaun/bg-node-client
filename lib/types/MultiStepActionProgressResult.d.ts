import { MultiStepActionRun } from '../models/MultiStepActionRun.js';
import { SidMultiStepActionProgress } from '../models/SidMultiStepActionProgress.js';
export interface MultiStepActionProgressResult {
    id?: string;
    run?: MultiStepActionRun;
    actionProgress?: SidMultiStepActionProgress;
    error?: string;
    createdAt?: string;
}
