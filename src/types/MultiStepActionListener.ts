import { MultiStepActionEventType } from '../enums.js';
import { SidMultiStepActionProgress } from '../models/SidMultiStepActionProgress.js';

/** A listener for multi-step action (MultiStepAction) events. */
export interface MultiStepActionListener {
  /** A unique identifier for this listener.
   * Use it to remove the listener again later. */
  id: string;

  /** Called when an event has occurred. */
  onEvent: (
    eventType: MultiStepActionEventType,
    action: SidMultiStepActionProgress,
  ) => void | Promise<void>;
}
