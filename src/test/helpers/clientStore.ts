import apiUrl from './apiUrl.js';
import { BgNodeClient } from '../../BgNodeClient.js';
import { ClientInfoStore } from '../../ClientInfoStore.js';
import {
  AppEnvironment,
  BgNodeClientConfig,
  ClientInfoStoreType,
  HttpHeaderName,
} from '../../index.js';

let _client: BgNodeClient | undefined = undefined;
const _clientInfoStore = new ClientInfoStore(ClientInfoStoreType.inMemory);

const getTestClient = async (createNew = false): Promise<BgNodeClient> => {
  if (createNew && _client) {
    _client.close();
  }

  if (createNew || !_client) {
    const config: BgNodeClientConfig = {
      appEnvironment: AppEnvironment.test,
      inBrowser: false,
      clientInfoStore: _clientInfoStore,
      fsdata: {
        url: apiUrl(),
        headers: {
          [HttpHeaderName.consumer]: 'test',
        },
      },
      logLevel: 'debug',
    };
    _client = await new BgNodeClient().init(config);
  }

  return _client;
};

const clientStore = {
  getTestClient,
};

export default clientStore;
