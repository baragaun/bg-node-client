import apiUrl from './apiUrl.js';
import { ClientInfoStore } from '../../ClientInfoStore.js';
import {
  AppEnvironment,
  BgNodeClientConfig,
  ClientInfoStoreType,
  HttpHeaderName,
} from '../../index.js';

const _clientInfoStore = new ClientInfoStore(ClientInfoStoreType.inMemory);

export const getTestClientConfig = (
  enableMockMode = false,
): BgNodeClientConfig => {
  const config: BgNodeClientConfig = {
    consumer: 'test',
    appEnvironment: AppEnvironment.test,
    inBrowser: false,
    clientInfoStore: _clientInfoStore,
    fsdata: {
      url: apiUrl(),
      headers: {
        [HttpHeaderName.consumer]: 'test',
      },
    },
    nats: {
      name: `nats-test-client-${crypto.randomUUID()}`,
      servers: ['nats://localhost:4222'],
      timeout: 5000,
      reconnect: true,
      maxReconnectAttempts: 3,
      reconnectTimeWait: 1000,
      pingInterval: 1000,
    },
    logLevel: 'debug',
    enableMockMode,

    // Customizations:
    enableChannels: false,
    enableGroupChannels: false,
    enableNats: false,
    enableMarketplace: false,
  };

  if (enableMockMode) {
    // In mock mode, we do not want to connect to the actual API.
    config.fsdata.url = null;
    // _clientInfoStore.setMockMode(true);
  }

  return config;

};
