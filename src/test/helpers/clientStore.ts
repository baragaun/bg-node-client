import { BgNodeClient } from '../../BgNodeClient.js';
import {
  AppEnvironment, BgNodeClientConfig,
  ClientInfo,
  ClientInfoStoreType,
  HttpHeaderName,
} from '../../types/index.js';

let _client: BgNodeClient | undefined = undefined;
let _clientInfo: ClientInfo | undefined = undefined;

const getTestClient = async (createNew = false): Promise<BgNodeClient> => {
  if (createNew || _client) {
    _client = undefined;
  }

  if (createNew || !_client) {
    const config: BgNodeClientConfig = {
      appEnvironment: AppEnvironment.test,
      inBrowser: false,
      clientInfoStore: {
        type: ClientInfoStoreType.delegated,
        delegate: {
          persist: async (info: ClientInfo): Promise<ClientInfo> => {
            _clientInfo = info;

            return info;
          },
          load: async (): Promise<ClientInfo> => {
            return _clientInfo || {
              id: 'default',
              createdAt: new Date().toISOString(),
            };
          },
        },
      },
      fsdata: {
        url: 'http://localhost:8092/fsdata/api/graphql',
        headers: {
          [HttpHeaderName.consumer]: 'test',
        },
      },
    };
    _client = await new BgNodeClient().init(config);
  }

  return _client;
};

const clientStore = {
  clearClientInfo: (): void => {
    _clientInfo = undefined;
  },
  getTestClient,
};

export default clientStore;
