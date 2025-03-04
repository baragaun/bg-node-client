import { BgNodeClient } from './BgNodeClient.js';
export const init = async (myUserId, config) => {
    if (typeof window !== 'undefined' && window.localStorage && !myUserId) {
        myUserId = window.localStorage.getItem("myUserId") || null;
    }
    const client = new BgNodeClient(myUserId, config);
    await client.init(myUserId);
    return client;
};
//# sourceMappingURL=index.js.map