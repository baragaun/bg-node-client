import { BgNodeClient } from './BgNodeClient.js';
import { BgNodeClientConfig } from './types/BgNodeClientConfig.js';

export const init = async (myUserId: string | null | undefined, config: BgNodeClientConfig): Promise<BgNodeClient> => {
  if (typeof window !== 'undefined' && window.localStorage && !myUserId) {
    myUserId = window.localStorage.getItem('myUserId') || null;
  }

  const client = new BgNodeClient(myUserId, config);
  await client.init(myUserId);

  return client;
};
