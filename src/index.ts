import { BgChannelsWebClient } from './BgChannelsWebClient.js';
import { BgChannelsWebClientConfig } from './types/BgChannelsWebClientConfig.js';

export async function init(config: BgChannelsWebClientConfig): Promise<BgChannelsWebClient> {
  const client = new BgChannelsWebClient(config);

  await client.init();

  return client
}
