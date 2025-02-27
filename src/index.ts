import { BgNodeClient } from './BgNodeClient.js';
import { BgNodeClientConfig } from './types/BgNodeClientConfig.js';

export async function init(config: BgNodeClientConfig): Promise<BgNodeClient> {
  const client = new BgNodeClient(config);

  await client.init();

  return client
}
