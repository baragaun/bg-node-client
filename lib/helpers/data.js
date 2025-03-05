let _config;
let _listeners = [];
const data = {
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
     * @param listener - The listener to be removed.
     */
    removeListener(id) {
        const index = _listeners.findIndex((l) => l.id === id);
        if (index > -1) {
            _listeners.splice(index, 1);
        }
    },
};
export default data;
//# sourceMappingURL=data.js.map