// import * as nats from '@nats-io/nats-core';

import { ClientInfoStore } from '../ClientInfoStore.js';
import logger from './logger.js';
import { ModelType } from '../enums.js';
import { MultiStepActionRun } from '../models/MultiStepActionRun.js';
import { NatsClient } from '../nats/NatsClient.js';
import { BgBaseListener } from '../types/BgBaseListener.js';
import { BgNodeClientConfig } from '../types/BgNodeClientConfig.js';
import { MyUserListener } from '../types/MyUserListener.js';

let _isInitialized = false;
let _isOnline = false;
let _config: BgNodeClientConfig;
let _clientInfoStore: ClientInfoStore;
let _listeners: BgBaseListener[] = [];
const _multiStepActionRuns = new Map<string, MultiStepActionRun>();
let _natsClient: NatsClient | undefined;
const objectCache = new Map<string, any>();
// let _natsConnection: nats.NatsConnection;

const libData = {
  config: (): BgNodeClientConfig => _config,
  clientInfoStore: (): ClientInfoStore => _clientInfoStore,

  close: (): void => {
    _isInitialized = false;
    _config = undefined;
    _listeners = [];
    _multiStepActionRuns.clear();
  },

  enableMockMode: (): boolean => _config.enableMockMode,

  isInitialized: (): boolean => _isInitialized &&
    !!_config &&
    !!_config.fsdata &&
    (!!_config.fsdata.url || _config.enableMockMode),

  isInMockMode: (): boolean => {
    return _config.enableMockMode;
  },

  natsClient: (): NatsClient | undefined => _natsClient,
  setNatsClient: (natsClient: NatsClient | undefined): void => {
    _natsClient = natsClient;
  },

  // natsConnection: (): nats.NatsConnection => _natsConnection,
  // setNatsConnection: (natsConnection: nats.NatsConnection): void => {
  //   _natsConnection = natsConnection;
  // },

  getConfig: (): BgNodeClientConfig => _config,
  setConfig: (config: BgNodeClientConfig): void => {
    _config = config;
  },

  setClientInfoStore: (clientInfoStore: ClientInfoStore): void => {
    _clientInfoStore = clientInfoStore;
  },

  setEnableMockMode: (enable: boolean): void => {
    _config.enableMockMode = enable;
    if (enable) {
      _isOnline = false;
    }
  },

  setInitialized: (isInitialized: boolean): void => {
    _isInitialized = isInitialized;
  },

  //////////////////////////////////////////////////////////////////////////////////////////////////
  // Network Status:
  allowNetwork: (): boolean => _isOnline && !_config.enableMockMode,
  isOffline: (): boolean => !_isOnline,
  isOnline: (): boolean => _isOnline,

  setIsOnline: (isOnline: boolean): void => {
    _isOnline = isOnline;

    for (const listener of libData.listeners()) {
      if (typeof (listener as MyUserListener).onChangeOnline === 'function') {
        const response = listener.onChangeOnline(isOnline);
        if (response && typeof response.then === 'function') {
          response.catch((error) => {
            logger.error('setIsOnline: listener onChangeOnline failed.',
              { error });
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
  addListener(listener: BgBaseListener): void {
    if (_listeners.some((l) => l.id === listener.id)) {
      throw new Error(`Listener with id ${listener.id} already exists.`);
    }

    _listeners.push(listener);
  },

  listeners: (): BgBaseListener[] => _listeners,

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

  setListeners: (listeners: BgBaseListener[]): void => {
    _listeners = listeners;
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

  //////////////////////////////////////////////////////////////////////////////////////////////////
  // Object Cache helpers
  setObjectInCache: (modelType: ModelType, id: string, object: any): void => {
    const key = `${modelType}-${id}`;
    objectCache.set(key, object);
  },

  setObjectListInCache: (modelType: ModelType, object: any): void => {
    objectCache.set(modelType, object);
  },

  setObjectInCachedList: (modelType: ModelType, id: string, object: any): void => {
    const list = objectCache.get(modelType);

    if (!Array.isArray(list)) {
      objectCache.set(modelType, [object]);
      return;
    }

    const index = list.findIndex((item: any) => item.id === id);
    if (index > -1) {
      list[index] = object;
    } else {
      list.push(object);
    }
  },

  getObjectFromCachedList: <T>(modelType: ModelType, id: string): T | null => {
    const list = objectCache.get(modelType);

    if (!Array.isArray(list)) {
      return null;
    }

    return list.find((item: any) => item.id === id) || null;
  },

  getObjectFromCache: <T>(modelType: ModelType, id: string): T | null => {
    const key = `${modelType}-${id}`;
    return objectCache.get(key) || null;
  },

  getObjectListFromCache: <T>(modelType: ModelType): T[] | null => {
    return objectCache.get(modelType) || null;
  },

  deleteObjectFromCache: (modelType: ModelType, id: string): void => {
    const key = `${modelType}-${id}`;
    objectCache.delete(key);
  },

  deleteObjectListFromCache: (modelType: ModelType): void => {
    objectCache.delete(modelType);
  },

  clearObjectCache: (): void => {
    objectCache.clear();
  },
};

export default libData;
