import { SidMultiStepActionProgress } from '../models/SidMultiStepActionProgress.js';
import { MultiStepActionListener } from '../MultiStepActionListener.js';
import { QueryPollingOptions } from '../QueryOptions.js';

export class MultiStepActionRun {
  public listeners?: MultiStepActionListener[];
  public actionId: string;
  public pollingStartedAt?: Date;
  public pollingFinishedAt?: Date;
  public notificationSentOrFailed?: boolean;
  public finished?: boolean;
  public timedOut?: boolean;
  public pollingOptions: QueryPollingOptions;
  public actionProgress?: SidMultiStepActionProgress;

  public finish(): void {
    this.finished = true;
    this.notifyListeners('finished');
  }

  public setNotificationSentOrFailed(): void {
    this.notificationSentOrFailed = true;
    this.notifyListeners('notificationSentOrFailed');
  }

  public notifyListeners(event: 'notificationSentOrFailed' | 'finished'): void {
    if (this.listeners) {
      for (const listener of this.listeners) {
        if (event === 'notificationSentOrFailed') {
          listener.onNotificationSentOrFailed(this.actionProgress!);
        } else if (event === 'finished') {
          listener.onFinished(this.actionProgress!);
        }
      }
    }
  }

  public constructor(attr: Partial<MultiStepActionRun>) {
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
