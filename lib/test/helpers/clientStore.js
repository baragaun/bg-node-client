import { BgNodeClient } from '../../BgNodeClient.js';
import { AppEnvironment, ClientInfo, ClientInfoStoreType, HttpHeaderName, } from '../../index.js';
let _client = undefined;
let _clientInfo = undefined;
const getTestClient = async (createNew = false) => {
    if (createNew || _client) {
        _client = undefined;
    }
    if (createNew || !_client) {
        const config = {
            appEnvironment: AppEnvironment.test,
            inBrowser: false,
            clientInfoStore: {
                type: ClientInfoStoreType.delegated,
                delegate: {
                    persist: async (info) => {
                        _clientInfo = info;
                        return info;
                    },
                    load: async () => {
                        return _clientInfo || new ClientInfo({
                            id: 'default',
                            createdAt: new Date().toISOString(),
                        });
                    },
                },
            },
            fsdata: {
                // url: 'http://localhost:8092/fsdata/api/graphql',
                url: 'http://localhost:3000/mmdata/api/graphql',
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
    clearClientInfo: () => {
        _clientInfo = undefined;
    },
    getTestClient,
};
export default clientStore;
//# sourceMappingURL=clientStore.js.map