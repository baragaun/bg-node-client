import { MultiStepActionEventType } from '../../enums.js';
import { SidMultiStepActionProgress } from '../models/SidMultiStepActionProgress.js';
import { MultiStepActionListener } from '../MultiStepActionListener.js';
import { QueryPollingOptions } from '../QueryOptions.js';

export class MultiStepActionRun {
  public actionId: string;
  public confirmToken?: string;
  public listeners = new Map<string, MultiStepActionListener>();
  public pollingStartedAt?: Date;
  public pollingFinishedAt?: Date;
  public notificationSentOrFailed?: boolean;
  public finished?: boolean;
  public timedOut?: boolean;
  public pollingOptions: QueryPollingOptions;
  public actionProgress?: SidMultiStepActionProgress;
  public abortRequested?: boolean;

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
      if (
        attr.notificationSentOrFailed === true ||
        attr.notificationSentOrFailed === false
      ) {
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

  /**
   * Add a listener to the run.
   * @param listener
   * @returns id of the listener
   */
  public addListener(listener: MultiStepActionListener): string {
    if (!listener.id) {
      listener.id = crypto.randomUUID();
    }
    this.listeners.set(listener.id, listener);

    return listener.id;
  }

  public removeListener(id: string): void {
    this.listeners.delete(id);
  }

  public onEventReceived(eventType: MultiStepActionEventType): void {
    if (
      eventType === MultiStepActionEventType.success ||
      eventType === MultiStepActionEventType.timedOut
    ) {
      this.finished = true;
    }
    this.notifyListeners(eventType);
  }

  public notifyListeners(event: MultiStepActionEventType): void {
    for (const listener of this.listeners.values()) {
      listener.onEvent(event, this.actionProgress!);
    }
  }

  public abort(): void {
    this.abortRequested = true;
  }

  public isStopped(): boolean {
    return !!this.abortRequested;
  }
}
