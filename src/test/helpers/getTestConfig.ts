import { AppEnvironment, HttpHeaderName } from '../../enums.js';
import libData from '../../helpers/libData.js';
import { BgNodeClientConfig } from '../../types/BgNodeClientConfig.js';

const getTestConfig = (): BgNodeClientConfig => {
  const config = libData.config();

  return {
    appEnvironment: AppEnvironment.test,
    inBrowser: false,
    fsdata: {
      url: config.fsdata.testUrl || config.fsdata.url || 'http://localhost:8092/fsdata/api/graphql',
      headers: {
        [HttpHeaderName.consumer]: 'test',
      },
    },
  };
};

export default getTestConfig;
