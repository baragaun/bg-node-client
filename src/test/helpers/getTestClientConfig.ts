import apiUrl from './apiUrl.js';
import { ClientInfoStore } from '../../ClientInfoStore.js';
import {
  AppEnvironment,
  BgNodeClientConfig,
  ClientInfoStoreType,
  HttpHeaderName,
} from '../../index.js';

const consumer = 'first-spark';
// const consumer = 'micromentor';
// const consumer = 'mimble';

const _clientInfoStore = new ClientInfoStore(ClientInfoStoreType.inMemory);

const consumerConfig = {
  'first-spark': {
    consumer: 'first-spark',
    apiUrl: 'http://localhost:8092/fsdata/api/graphql',
    customizations: {
      enableChannels: true,
      enableGroupChannels: false,
      enableNats: false,
      enableMarketplace: true,
    },
  },
  micromentor: {
    consumer: 'micromentor',
    apiUrl: 'http://localhost:3000/mmdata/api/graphql',
    customizations: {
      enableChannels: true,
      enableGroupChannels: false,
      enableNats: false,
      enableMarketplace: false,
    },
  },
  mimble: {
    consumer: 'mimble',
    apiUrl: 'http://localhost:8092/fsdata/api/graphql',
    customizations: {
      enableChannels: false,
      enableGroupChannels: false,
      enableNats: false,
      enableMarketplace: true,
    },
  },
};

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
    // nats: {
    //   name: `nats-test-client-${crypto.randomUUID()}`,
    //   servers: ['nats://localhost:4222'],
    //   timeout: 5000,
    //   reconnect: true,
    //   maxReconnectAttempts: 3,
    //   reconnectTimeWait: 1000,
    //   pingInterval: 1000,
    // },
    logLevel: 'debug',
    enableMockMode,

    // Customizations:
    customizations: {
      enableChannels: false,
      enableGroupChannels: false,
      enableNats: false,
      enableMarketplace: false,
    },
  };

  if (consumer && consumerConfig[consumer]) {
    config.consumer = consumerConfig[consumer].consumer;

    if (consumerConfig[consumer].apiUrl) {
      config.fsdata.url = consumerConfig[consumer].apiUrl;
    }

    if (consumerConfig[consumer].customizations) {
      Object.assign(config.customizations, consumerConfig[consumer].customizations);
    }
  }

  if (enableMockMode) {
    // In mock mode, we do not want to connect to the actual API.
    config.fsdata.url = null;
    // _clientInfoStore.setMockMode(true);
  }

  return config;

};
