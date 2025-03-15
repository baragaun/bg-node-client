import { MultiStepActionEventType } from '../../enums.js';
export class MultiStepActionRun {
    actionId;
    confirmToken;
    listeners = new Map();
    pollingStartedAt;
    pollingFinishedAt;
    notificationSentOrFailed;
    finished;
    timedOut;
    pollingOptions;
    actionProgress;
    /**
     * Add a listener to the run.
     * @param listener
     * @returns id of the listener
     */
    addListener(listener) {
        if (!listener.id) {
            listener.id = crypto.randomUUID();
        }
        this.listeners.set(listener.id, listener);
        return listener.id;
    }
    removeListener(id) {
        this.listeners.delete(id);
    }
    onEventReceived(eventType) {
        if (eventType === MultiStepActionEventType.success ||
            eventType === MultiStepActionEventType.timedOut) {
            this.finished = true;
        }
        this.notifyListeners(eventType);
    }
    notifyListeners(event) {
        for (const listener of this.listeners.values()) {
            listener.onEvent(event, this.actionProgress);
        }
    }
    constructor(attr) {
        if (attr) {
            if (attr.listeners) {
                this.listeners = attr.listeners;
            }
            if (attr.actionId) {
                this.actionId = attr.actionId;
            }
            if (attr.pollingStartedAt) {
                this.pollingStartedAt = attr.pollingStartedAt;
            }
            if (attr.pollingFinishedAt) {
                this.pollingFinishedAt = attr.pollingFinishedAt;
            }
            if (attr.notificationSentOrFailed === true ||
                attr.notificationSentOrFailed === false) {
                this.notificationSentOrFailed = attr.notificationSentOrFailed;
            }
            if (attr.finished === true || attr.finished === false) {
                this.finished = attr.finished;
            }
            if (attr.timedOut === true || attr.timedOut === false) {
                this.timedOut = attr.timedOut;
            }
            if (attr.pollingOptions) {
                this.pollingOptions = attr.pollingOptions;
            }
            if (attr.actionProgress) {
                this.actionProgress = attr.actionProgress;
            }
        }
    }
}
//# sourceMappingURL=MultiStepActionRun.js.map