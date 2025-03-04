import { BgNodeClient } from './BgNodeClient.js';
export const init = async (userId, config) => {
    const client = new BgNodeClient(userId, config);
    await client.init(userId);
    return client;
};
//# sourceMappingURL=index.js.map