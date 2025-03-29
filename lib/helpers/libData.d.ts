import { MultiStepActionRun } from '../models/MultiStepActionRun.js';
import { BgBaseListener } from '../types/BgBaseListener.js';
import { BgNodeClientConfig } from '../types/BgNodeClientConfig.js';
declare const libData: {
    isInitialized: () => boolean;
    setInitialized: (isInitialized: boolean) => void;
    close: () => void;
    config: () => BgNodeClientConfig;
    listeners: () => BgBaseListener[];
    setConfig: (config: BgNodeClientConfig) => void;
    setListeners: (listeners: BgBaseListener[]) => void;
    /**
     * Subscribe to channel events.
     * @param listener - The listener to be added.
     */
    addListener(listener: BgBaseListener): void;
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
