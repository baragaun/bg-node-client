import { BgListenerTopic } from '../enums.js';
/**
 * Interface representing a listener for events.
 */
export interface BgBaseListener {
    id: string;
    topic: BgListenerTopic;
    onChangeOnline?: (isOffline: boolean) => void | Promise<void>;
}
