import { BgNodeClient } from '../../BgNodeClient.js';
import { AppEnvironment, ClientInfoStoreType, HttpHeaderName, } from '../../types/index.js';
let client = undefined;
let _clientInfo = undefined;
const getTestClient = async (createNew = false) => {
    if (createNew || !client) {
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
        client = await new BgNodeClient().init(config);
    }
    return client;
};
export default getTestClient;
//# sourceMappingURL=getTestClient.js.map