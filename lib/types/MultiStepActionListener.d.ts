import { SidMultiStepActionProgress } from './models/SidMultiStepActionProgress.js';
export interface MultiStepActionListener {
    id: string;
    onNotificationSentOrFailed: (action: SidMultiStepActionProgress) => void | Promise<void>;
    onFinished: (action: SidMultiStepActionProgress) => void | Promise<void>;
}
