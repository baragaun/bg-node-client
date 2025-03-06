import { BgNodeClientConfig } from '../types/BgNodeClientConfig.js';
import { DbType, HttpHeaderName } from '../types/enums.js';

export const testConfig: BgNodeClientConfig = {
  dbType: DbType.rxdb,
  inBrowser: false,
  debugMode: true,
  fsdata: {
    url: 'http://localhost:8092/fsdata/api/graphql',
    headers: {
      [HttpHeaderName.consumer]: 'app',
    },
  },
};
