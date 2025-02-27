import { BgChannelsWebClient } from './BgChannelsWebClient.js';
export async function init(config) {
    const client = new BgChannelsWebClient(config);
    await client.init();
    return client;
}
//# sourceMappingURL=index.js.map