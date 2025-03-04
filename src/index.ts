import { BgNodeClient } from './BgNodeClient.js';
import { BgNodeClientConfig } from './types/BgNodeClientConfig.js';

export const init = async (
  userId: string | null | undefined,
  config: BgNodeClientConfig,
): Promise<BgNodeClient> => {
  const client = new BgNodeClient(userId, config);

  await client.init(userId);

  return client
}
