import { MultiStepActionRun } from '../models/MultiStepActionRun.js';
import { BgDataListener } from '../types/BgDataListener.js';
import { BgNodeClientConfig } from '../types/BgNodeClientConfig.js';
declare const libData: {
    isInitialized: () => boolean;
    setInitialized: (isInitialized: boolean) => void;
    close: () => void;
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
     * @param id the ID of the listener to be removed.
     */
    removeListener(id: string): void;
    multiStepActionRuns: () => Map<string, MultiStepActionRun>;
    addMultiStepActionRun: (run: MultiStepActionRun) => void;
    removeMultiStepActionRun: (actionId: string) => void;
    multiStepActionRun: (actionId: string) => MultiStepActionRun | null;
};
export default libData;
