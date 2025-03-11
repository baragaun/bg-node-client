import { AppEnvironment, DbType, HttpHeaderName } from '../../enums.js';
export const testConfig = {
    appEnvironment: AppEnvironment.test,
    dbType: DbType.rxdb,
    inBrowser: false,
    myUserDeviceUuid: 'ab29fb7f368a4b26bfc3add16bef0e23',
    fsdata: {
        url: process.env.FSDATA_URL || 'http://localhost:8092/fsdata/api/graphql',
        headers: {
            [HttpHeaderName.consumer]: 'test',
        },
    },
};
//# sourceMappingURL=testConfig.js.map