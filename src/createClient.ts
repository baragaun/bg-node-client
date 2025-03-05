import { BgNodeClient } from './types/BgNodeClient.js';
import { BgNodeClientConfig } from './types/BgNodeClientConfig.js';
import { DbType } from './types/enums.js';
import bgNodeClient from './bgNodeClient.js';
import data from './helpers/data.js';
import db from './db/db.js';
import loadUserInfo from './helpers/loadUserInfo.js';

const createClient = async (config: BgNodeClientConfig): Promise<BgNodeClient> => {
  const userInfo = loadUserInfo();

  if (!config.myUserId && userInfo.myUserId) {
    config.myUserId = userInfo.myUserId;
  }

  if (!config.myUserDeviceUuid && userInfo.myUserDeviceUuid) {
    config.myUserDeviceUuid = userInfo.myUserDeviceUuid;
  }

  if (!config.authToken && userInfo.authToken) {
    config.authToken = userInfo.authToken;
  }

  if (!config.dbType) {
    config.dbType = DbType.mem;
  }

  data.setConfig(config);

  await db.init(config);

  return bgNodeClient;
};

export default createClient;
