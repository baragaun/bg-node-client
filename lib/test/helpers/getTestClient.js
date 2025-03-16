import { testConfig } from './testConfig.js';
import { BgNodeClient } from '../../BgNodeClient.js';
let client = undefined;
export const getTestClient = async () => {
    if (!client) {
        client = await new BgNodeClient().init(testConfig);
    }
    return client;
};
//# sourceMappingURL=getTestClient.js.map