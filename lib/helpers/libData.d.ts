import { ClientInfoStore } from '../ClientInfoStore.js';
import { MultiStepActionRun } from '../models/MultiStepActionRun.js';
import { NatsClient } from '../nats/NatsClient.js';
import { BgBaseListener } from '../types/BgBaseListener.js';
import { BgNodeClientConfig } from '../types/BgNodeClientConfig.js';
declare const libData: {
    config: () => BgNodeClientConfig;
    clientInfoStore: () => ClientInfoStore;
    close: () => void;
    enableMockMode: () => boolean;
    isInitialized: () => boolean;
    isInMockMode: () => boolean;
    natsClient: () => NatsClient | undefined;
    setNatsClient: (natsClient: NatsClient | undefined) => void;
    getConfig: () => BgNodeClientConfig;
    setConfig: (config: BgNodeClientConfig) => void;
    setClientInfoStore: (clientInfoStore: ClientInfoStore) => void;
    setEnableMockMode: (enable: boolean) => void;
    setInitialized: (isInitialized: boolean) => void;
    allowNetwork: () => boolean;
    isOffline: () => boolean;
    isOnline: () => boolean;
    setIsOnline: (isOnline: boolean) => void;
    /**
     * Subscribe to channel events.
     * @param listener - The listener to be added.
     */
    addListener(listener: BgBaseListener): void;
    listeners: () => BgBaseListener[];
    /**
     * Unsubscribes from channel events.
     * @param id the ID of the listener to be removed.
     */
    removeListener(id: string): void;
    setListeners: (listeners: BgBaseListener[]) => void;
    multiStepActionRuns: () => Map<string, MultiStepActionRun>;
    addMultiStepActionRun: (run: MultiStepActionRun) => void;
    removeMultiStepActionRun: (actionId: string) => void;
    multiStepActionRun: (actionId: string) => MultiStepActionRun | null;
};
export default libData;
