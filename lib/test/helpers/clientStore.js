import { getTestClientConfig } from './getTestClientConfig.js';
import { BgNodeClient } from '../../BgNodeClient.js';
let _client = undefined;
const getTestClient = async (createNew = false, enableMockMode = false) => {
    if (createNew && _client) {
        _client.close();
    }
    if (createNew || !_client) {
        const config = getTestClientConfig(enableMockMode);
        _client = await new BgNodeClient().init({ config, isOnline: !enableMockMode });
    }
    return _client;
};
const clientStore = {
    getTestClient,
    getTestClientSync: () => {
        if (!_client) {
            throw new Error('Client is not initialized. Please call getTestClient first.');
        }
        return _client;
    },
};
export default clientStore;
//# sourceMappingURL=clientStore.js.map