import { BgDataListener } from '../types/BgDataListener.js';
import { BgNodeClientConfig } from '../types/BgNodeClientConfig.js';
declare const data: {
    config: () => BgNodeClientConfig;
    listeners: () => BgDataListener[];
    setConfig: (config: BgNodeClientConfig) => void;
    setListeners: (listeners: BgDataListener[]) => void;
    /**
     * Subscribe to channel events.
     * @param listener - The listener to be added.
     */
    addListener(listener: BgDataListener): void;
    /**
     * Unsubscribes from channel events.
     * @param listener - The listener to be removed.
     */
    removeListener(id: string): void;
};
export default data;
