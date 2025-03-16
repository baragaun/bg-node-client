import { testConfig } from './testConfig.js';
import { BgNodeClient } from '../../BgNodeClient.js';

let client: BgNodeClient | undefined = undefined;

export const getTestClient = async (): Promise<BgNodeClient> => {
  if (!client) {
    client = await new BgNodeClient().init(testConfig);
  }

  return client;
};
