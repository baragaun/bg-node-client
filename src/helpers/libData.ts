import { ClientInfoStore } from '../ClientInfoStore.js';
import logger from './logger.js';
import { MultiStepActionRun } from '../models/MultiStepActionRun.js';
import { BgBaseListener } from '../types/BgBaseListener.js';
import { BgNodeClientConfig } from '../types/BgNodeClientConfig.js';
import { MyUserListener } from '../types/MyUserListener.js';

let _isInitialized = false;
let _isOffline = false;
let _config: BgNodeClientConfig;
let _clientInfoStore: ClientInfoStore;
let _listeners: BgBaseListener[] = [];
const _multiStepActionRuns = new Map<string, MultiStepActionRun>();

const libData = {
  isInitialized: (): boolean => _isInitialized &&
    !!_config &&
    !!_config.fsdata &&
    !!_config.fsdata.url,

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
  clientInfoStore: (): ClientInfoStore => _clientInfoStore,
  isOffline: (): boolean => _isOffline,
  isOnline: (): boolean => !_isOffline,
  listeners: (): BgBaseListener[] => _listeners,

  setConfig: (config: BgNodeClientConfig): void => {
    _config = config;
    if (config.setOffline) {
      _isOffline = true;
    }
  },

  setIsOffline: (isOffline: boolean): void => {
    _isOffline = isOffline;

    for (const listener of libData.listeners()) {
      if (typeof (listener as MyUserListener).onChangeOffline === 'function') {
        const response = listener.onChangeOffline(isOffline);
        if (response && typeof response.then === 'function') {
          response.catch((error) => {
            logger.error('setIsOffline: listener onChangeOffline failed.',
              { error });
          });
        }
      }
    }
  },

  setClientInfoStore: (clientInfoStore: ClientInfoStore): void => {
    _clientInfoStore = clientInfoStore;
  },

  setListeners: (listeners: BgBaseListener[]): void => {
    _listeners = listeners;
  },

  /**
   * Subscribe to channel events.
   * @param listener - The listener to be added.
   */
  addListener(listener: BgBaseListener): void {
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
    logger.debug('removeMultiStepActionRun called.', { actionId });
    _multiStepActionRuns.delete(actionId);
  },

  multiStepActionRun: (actionId: string): MultiStepActionRun | null =>
    _multiStepActionRuns.get(actionId),
};

export default libData;
