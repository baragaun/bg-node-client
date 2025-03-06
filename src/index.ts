import client from './bgNodeClient.js';
import { AuthType, CookieChoiceTextId, UserIdentType } from './fsdata/gql/graphql.js';
import { BgNodeClient, BgNodeClientConfig } from './types/index.js';

export * from './types/enums.js';

export { AuthType, CookieChoiceTextId, UserIdentType };

export const createClient = async (config: BgNodeClientConfig): Promise<BgNodeClient> => {
  await client.init(config);

  return client;
};
