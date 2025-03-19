let _config;
let _listeners = [];
const _multiStepActionRuns = new Map();
const libData = {
    close: () => {
        _config = undefined;
        _listeners = [];
        _multiStepActionRuns.clear();
    },
    config: () => _config,
    listeners: () => _listeners,
    setConfig: (config) => {
        _config = config;
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
        _multiStepActionRuns.delete(actionId);
    },
    multiStepActionRun: (actionId) => _multiStepActionRuns.get(actionId),
};
export default libData;
//# sourceMappingURL=libData.js.map