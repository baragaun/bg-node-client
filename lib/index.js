import { BgNodeClient } from './BgNodeClient.js';
export async function init(config) {
    const client = new BgNodeClient(config);
    await client.init();
    return client;
}
//# sourceMappingURL=index.js.map