import { DbType, HttpHeaderName } from '../types/enums.js';
export const testConfig = {
    dbType: DbType.rxdb,
    inBrowser: false,
    debugMode: true,
    fsdata: {
        url: 'http://localhost:8090/fsdata/api/graphql',
        headers: {
            [HttpHeaderName.consumer]: 'app',
        },
    },
};
//# sourceMappingURL=testConfig.js.map