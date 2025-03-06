import client from './bgNodeClient.js';
import { AuthType, CookieChoiceTextId, UserIdentType } from './fsdata/gql/graphql.js';
export * from './types/enums.js';
export { AuthType, CookieChoiceTextId, UserIdentType };
export const createClient = async (config) => {
    await client.init(config);
    return client;
};
//# sourceMappingURL=index.js.map