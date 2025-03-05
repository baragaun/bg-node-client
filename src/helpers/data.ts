import { BgNodeClientConfig } from '../types/BgNodeClientConfig.js';
import { BgDataListener } from '../types/BgDataListener.js';

let _config: BgNodeClientConfig | undefined;
let _listeners: BgDataListener[] = [];

const data = {
  config: () => _config,
  listeners: () => _listeners,

  setConfig: (config: BgNodeClientConfig): void => {
    _config = config;
  },

  setListeners: (listeners: BgDataListener[]): void => {
    _listeners = listeners;
  },

  /**
   * Subscribe to channel events.
   * @param listener - The listener to be added.
   */
  addListener(listener: BgDataListener): void {
    if (_listeners.some((l) => l.id === listener.id)) {
      throw new Error(`Listener with id ${listener.id} already exists.`);
    }

    _listeners.push(listener);
  },

  /**
   * Unsubscribes from channel events.
   * @param listener - The listener to be removed.
   */
  removeListener(id: string): void {
    const index = _listeners.findIndex((l) => l.id === id);
    if (index > -1) {
      _listeners.splice(index, 1);
    }
  },
};

export default data;
