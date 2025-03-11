export class MultiStepActionRun {
    listeners;
    actionId;
    pollingStartedAt;
    pollingFinishedAt;
    notificationSentOrFailed;
    finished;
    timedOut;
    pollingOptions;
    actionProgress;
    finish() {
        this.finished = true;
        this.notifyListeners('finished');
    }
    setNotificationSentOrFailed() {
        this.notificationSentOrFailed = true;
        this.notifyListeners('notificationSentOrFailed');
    }
    notifyListeners(event) {
        if (this.listeners) {
            for (const listener of this.listeners) {
                if (event === 'notificationSentOrFailed') {
                    listener.onNotificationSentOrFailed(this.actionProgress);
                }
                else if (event === 'finished') {
                    listener.onFinished(this.actionProgress);
                }
            }
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
            if (attr.notificationSentOrFailed === true || attr.notificationSentOrFailed === false) {
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