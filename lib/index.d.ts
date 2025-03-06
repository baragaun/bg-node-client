import { AuthType, CookieChoiceTextId, UserIdentType } from './fsdata/gql/graphql.js';
import { BgNodeClient, BgNodeClientConfig } from './types/index.js';
export * from './types/enums.js';
export { AuthType, CookieChoiceTextId, UserIdentType };
export declare const createClient: (config: BgNodeClientConfig) => Promise<BgNodeClient>;
