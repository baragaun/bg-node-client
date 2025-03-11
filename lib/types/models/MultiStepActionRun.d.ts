import { SidMultiStepActionProgress } from '../models/SidMultiStepActionProgress.js';
import { MultiStepActionListener } from '../MultiStepActionListener.js';
import { QueryPollingOptions } from '../QueryOptions.js';
export declare class MultiStepActionRun {
    listeners?: MultiStepActionListener[];
    actionId: string;
    pollingStartedAt?: Date;
    pollingFinishedAt?: Date;
    notificationSentOrFailed?: boolean;
    finished?: boolean;
    timedOut?: boolean;
    pollingOptions: QueryPollingOptions;
    actionProgress?: SidMultiStepActionProgress;
    finish(): void;
    setNotificationSentOrFailed(): void;
    notifyListeners(event: 'notificationSentOrFailed' | 'finished'): void;
    constructor(attr: Partial<MultiStepActionRun>);
}
