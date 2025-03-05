import { HttpHeaderName } from '../types/enums.js';
import { BgNodeClientConfig } from '../types/BgNodeClientConfig.js';
import { DbType } from '../types/enums.js';

export const testConfig: BgNodeClientConfig = {
  dbType: DbType.rxdb,
  inBrowser: false,
  debugMode: true,
  fsdata: {
    url: 'http://localhost:8090/fsdata/api/graphql',
    headers: {
      [HttpHeaderName.contentType]: 'application/json',
      'x-authorization-auth-type': 'none',
      Authorization: 'Bearer none',
      'x-device': 'f976d5673ba64a078107f01bc7cc9903',
    },
  },
};
