import apiUrl from './apiUrl.js';
import { BgNodeClient } from '../../BgNodeClient.js';
import { ClientInfoStore } from '../../ClientInfoStore.js';
import { AppEnvironment, ClientInfoStoreType, HttpHeaderName, } from '../../index.js';
let _client = undefined;
const _clientInfoStore = new ClientInfoStore(ClientInfoStoreType.inMemory);
const getTestClient = async (createNew = false, enableMockMode = false) => {
    if (createNew && _client) {
        _client.close();
    }
    if (createNew || !_client) {
        const config = {
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
            enableMockMode,
        };
        if (enableMockMode) {
            // In mock mode, we do not want to connect to the actual API.
            config.fsdata.url = null;
            // _clientInfoStore.setMockMode(true);
        }
        _client = await new BgNodeClient().init({ config, isOnline: !enableMockMode });
    }
    return _client;
};
const clientStore = {
    getTestClient,
};
export default clientStore;
//# sourceMappingURL=clientStore.js.map