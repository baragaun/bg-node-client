import { SidMultiStepActionProgress } from './models/SidMultiStepActionProgress.js';

export interface MultiStepActionListener {
  id: string;
  onNotificationSentOrFailed: (action: SidMultiStepActionProgress) => void;
  onFinished: (action: SidMultiStepActionProgress) => void;
}
