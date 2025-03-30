import { BgListenerTopic } from '../enums.js';

/**
 * Interface representing a listener for channel events.
 */
export interface BgBaseListener {
  id: string;
  topic: BgListenerTopic;

  onChangeOnline?: (isOffline: boolean) => void | Promise<void>;
}
