import { BgDataListener } from '../types/BgDataListener.js';
import { BgNodeClientConfig } from '../types/BgNodeClientConfig.js';
import { MultiStepActionRun } from '../types/index.js';

let _isInitialized = false;
let _config: BgNodeClientConfig | undefined;
let _listeners: BgDataListener[] = [];
const _multiStepActionRuns = new Map<string, MultiStepActionRun>();

const libData = {
  isInitialized: (): boolean => _isInitialized,

  setInitialized: (isInitialized: boolean): void => {
    _isInitialized = isInitialized;
  },

  close: (): void => {
    _isInitialized = false;
    _config = undefined;
    _listeners = [];
    _multiStepActionRuns.clear();
  },

  config: (): BgNodeClientConfig => _config,
  listeners: (): BgDataListener[] => _listeners,

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
   * @param id the ID of the listener to be removed.
   */
  removeListener(id: string): void {
    const index = _listeners.findIndex((l) => l.id === id);
    if (index > -1) {
      _listeners.splice(index, 1);
    }
  },

  //////////////////////////////////////////////////////////////////////////////////////////////////
  // MultiStepActionRun helpers

  multiStepActionRuns: (): Map<string, MultiStepActionRun> =>
    _multiStepActionRuns,

  addMultiStepActionRun: (run: MultiStepActionRun): void => {
    _multiStepActionRuns.set(run.actionId, run);
  },

  removeMultiStepActionRun: (actionId: string): void => {
    _multiStepActionRuns.delete(actionId);
  },

  multiStepActionRun: (actionId: string): MultiStepActionRun | null =>
    _multiStepActionRuns.get(actionId),
};

export default libData;
