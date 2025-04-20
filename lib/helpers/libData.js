// import * as nats from '@nats-io/nats-core';
import logger from './logger.js';
let _isInitialized = false;
let _isOnline = false;
let _config;
let _clientInfoStore;
let _listeners = [];
const _multiStepActionRuns = new Map();
let _natsClient;
// let _natsConnection: nats.NatsConnection;
const libData = {
    config: () => _config,
    clientInfoStore: () => _clientInfoStore,
    close: () => {
        _isInitialized = false;
        _config = undefined;
        _listeners = [];
        _multiStepActionRuns.clear();
    },
    enableMockMode: () => _config.enableMockMode,
    isInitialized: () => _isInitialized &&
        !!_config &&
        !!_config.fsdata &&
        (!!_config.fsdata.url || _config.enableMockMode),
    isInMockMode: () => {
        return _config.enableMockMode;
    },
    natsClient: () => _natsClient,
    setNatsClient: (natsClient) => {
        _natsClient = natsClient;
    },
    // natsConnection: (): nats.NatsConnection => _natsConnection,
    // setNatsConnection: (natsConnection: nats.NatsConnection): void => {
    //   _natsConnection = natsConnection;
    // },
    getConfig: () => _config,
    setConfig: (config) => {
        _config = config;
    },
    setClientInfoStore: (clientInfoStore) => {
        _clientInfoStore = clientInfoStore;
    },
    setEnableMockMode: (enable) => {
        _config.enableMockMode = enable;
        if (enable) {
            _isOnline = false;
        }
    },
    setInitialized: (isInitialized) => {
        _isInitialized = isInitialized;
    },
    //////////////////////////////////////////////////////////////////////////////////////////////////
    // Network Status:
    allowNetwork: () => _isOnline && !_config.enableMockMode,
    isOffline: () => !_isOnline,
    isOnline: () => _isOnline,
    setIsOnline: (isOnline) => {
        _isOnline = isOnline;
        for (const listener of libData.listeners()) {
            if (typeof listener.onChangeOnline === 'function') {
                const response = listener.onChangeOnline(isOnline);
                if (response && typeof response.then === 'function') {
                    response.catch((error) => {
                        logger.error('setIsOnline: listener onChangeOnline failed.', { error });
                    });
                }
            }
        }
    },
    //////////////////////////////////////////////////////////////////////////////////////////////////
    // Listeners:
    /**
     * Subscribe to channel events.
     * @param listener - The listener to be added.
     */
    addListener(listener) {
        if (_listeners.some((l) => l.id === listener.id)) {
            throw new Error(`Listener with id ${listener.id} already exists.`);
        }
        _listeners.push(listener);
    },
    listeners: () => _listeners,
    /**
     * Unsubscribes from channel events.
     * @param id the ID of the listener to be removed.
     */
    removeListener(id) {
        const index = _listeners.findIndex((l) => l.id === id);
        if (index > -1) {
            _listeners.splice(index, 1);
        }
    },
    setListeners: (listeners) => {
        _listeners = listeners;
    },
    //////////////////////////////////////////////////////////////////////////////////////////////////
    // MultiStepActionRun helpers
    multiStepActionRuns: () => _multiStepActionRuns,
    addMultiStepActionRun: (run) => {
        _multiStepActionRuns.set(run.actionId, run);
    },
    removeMultiStepActionRun: (actionId) => {
        logger.debug('removeMultiStepActionRun called.', { actionId });
        _multiStepActionRuns.delete(actionId);
    },
    multiStepActionRun: (actionId) => _multiStepActionRuns.get(actionId),
};
export default libData;
//# sourceMappingURL=libData.js.map