import { AppEnvironment, DbType, HttpHeaderName } from '../../enums.js';
import { BgNodeClientConfig } from '../../types/BgNodeClientConfig.js';

export const testConfig: BgNodeClientConfig = {
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
