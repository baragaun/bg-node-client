import { AppEnvironment, DbType, HttpHeaderName } from '../types/enums.js';
export const testConfig = {
    appEnvironment: AppEnvironment.test,
    dbType: DbType.rxdb,
    inBrowser: false,
    fsdata: {
        url: process.env.FSDATA_URL || 'http://localhost:8092/fsdata/api/graphql',
        headers: {
            [HttpHeaderName.consumer]: 'test',
        },
    },
};
//# sourceMappingURL=testConfig.js.map