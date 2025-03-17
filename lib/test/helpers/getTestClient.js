import getTestConfig from './getTestConfig.js';
import { BgNodeClient } from '../../BgNodeClient.js';
let client = undefined;
export const getTestClient = async () => {
    if (!client) {
        client = await new BgNodeClient().init(getTestConfig());
    }
    return client;
};
//# sourceMappingURL=getTestClient.js.map