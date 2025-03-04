import { DbType } from '../types/enums.js';
export const testConfig = {
    dbType: DbType.rxdb,
    inBrowser: false,
    debugMode: true,
    api: {
        url: 'http://localhost:8092/fsdata/api/graphql',
        headers: {
            'Content-Type': 'application/json',
            'x-authorization-auth-type': 'none',
        }
    }
};
//# sourceMappingURL=testConfig.js.map