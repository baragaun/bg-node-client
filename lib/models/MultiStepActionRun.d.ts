import { MultiStepActionEventType } from '../enums.js';
import { SidMultiStepActionProgress } from '../models/SidMultiStepActionProgress.js';
import { MultiStepActionListener } from '../types/MultiStepActionListener.js';
import { QueryPollingOptions } from '../types/QueryOptions.js';
export declare class MultiStepActionRun {
    actionId: string;
    confirmToken?: string;
    listeners: Map<string, MultiStepActionListener>;
    pollingStartedAt?: Date;
    pollingFinishedAt?: Date;
    notificationSentOrFailed?: boolean;
    finished?: boolean;
    timedOut?: boolean;
    pollingOptions: QueryPollingOptions;
    actionProgress?: SidMultiStepActionProgress;
    abortRequested?: boolean;
    constructor(attr: Partial<MultiStepActionRun>);
    /**
     * Add a listener to the run.
     * @param listener
     * @returns id of the listener
     */
    addListener(listener: MultiStepActionListener): string;
    removeListener(id: string): void;
    onEventReceived(eventType: MultiStepActionEventType): void;
    notifyListeners(event: MultiStepActionEventType): void;
    abort(): void;
    isStopped(): boolean;
}
