import logger from './logger.js';
let _isInitialized = false;
let _isOffline = false;
let _config;
let _clientInfoStore;
let _listeners = [];
const _multiStepActionRuns = new Map();
const libData = {
    isInitialized: () => _isInitialized &&
        !!_config &&
        !!_config.fsdata &&
        !!_config.fsdata.url,
    setInitialized: (isInitialized) => {
        _isInitialized = isInitialized;
    },
    close: () => {
        _isInitialized = false;
        _config = undefined;
        _listeners = [];
        _multiStepActionRuns.clear();
    },
    config: () => _config,
    clientInfoStore: () => _clientInfoStore,
    isOffline: () => _isOffline,
    isOnline: () => !_isOffline,
    listeners: () => _listeners,
    setConfig: (config) => {
        _config = config;
        if (config.setOffline) {
            _isOffline = true;
        }
    },
    setIsOffline: (isOffline) => {
        _isOffline = isOffline;
        for (const listener of libData.listeners()) {
            if (typeof listener.onChangeOffline === 'function') {
                const response = listener.onChangeOffline(isOffline);
                if (response && typeof response.then === 'function') {
                    response.catch((error) => {
                        logger.error('setIsOffline: listener onChangeOffline failed.', { error });
                    });
                }
            }
        }
    },
    setClientInfoStore: (clientInfoStore) => {
        _clientInfoStore = clientInfoStore;
    },
    setListeners: (listeners) => {
        _listeners = listeners;
    },
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