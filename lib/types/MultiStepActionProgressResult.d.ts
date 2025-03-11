import { Model } from './models/Model.js';
import { MultiStepActionRun } from './models/MultiStepActionRun.js';
import { SidMultiStepActionProgress } from './models/SidMultiStepActionProgress.js';
export interface MultiStepActionProgressResult extends Model {
    run?: MultiStepActionRun;
    actionProgress?: SidMultiStepActionProgress;
    error?: string;
}
