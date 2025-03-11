import { SidMultiStepActionProgress } from './models/SidMultiStepActionProgress.js';

export interface MultiStepActionListener {
  onNotificationSentOrFailed: (action: SidMultiStepActionProgress) => void;
  onFinished: (action: SidMultiStepActionProgress) => void;
}
