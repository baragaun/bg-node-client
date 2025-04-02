import apiUrl from './apiUrl.js';
import { BgNodeClient } from '../../BgNodeClient.js';
import { ClientInfoStore } from '../../ClientInfoStore.js';
import { AppEnvironment, ClientInfoStoreType, HttpHeaderName, } from '../../index.js';
let _client = undefined;
const _clientInfoStore = new ClientInfoStore(ClientInfoStoreType.inMemory);
const _isOnline = true;
const getTestClient = async (createNew = false) => {
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
        };
        _client = await new BgNodeClient().init({ config, isOnline: _isOnline });
    }
    return _client;
};
const clientStore = {
    getTestClient,
};
export default clientStore;
//# sourceMappingURL=clientStore.js.map