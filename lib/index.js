import { BgNodeClient } from './BgNodeClient.js';
export const init = async (myUserId, config) => {
    if (!myUserId) {
        myUserId = localStorage.getItem("myUserId") || null;
    }
    const client = new BgNodeClient(myUserId, config);
    await client.init(myUserId);
    return client;
};
//# sourceMappingURL=index.js.map