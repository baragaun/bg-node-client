import bgNodeClient from './bgNodeClient.js';
import db from './db/db.js';
import data from './helpers/data.js';
import loadUserInfo from './helpers/loadUserInfo.js';
import saveUserInfo, { SaveUserInfoArgs } from './helpers/saveUserInfo.js';
import { BgNodeClient } from './types/BgNodeClient.js';
import { BgNodeClientConfig } from './types/BgNodeClientConfig.js';
import { DbType } from './types/enums.js';

const createClient = async (config: BgNodeClientConfig): Promise<BgNodeClient> => {
  const userInfo = loadUserInfo();

  if (!config.myUserId && userInfo.myUserId) {
    config.myUserId = userInfo.myUserId;
  }

  if (!config.myUserDeviceUuid && userInfo.myUserDeviceUuid) {
    config.myUserDeviceUuid = userInfo.myUserDeviceUuid;
  }

  if (!config.myUserDeviceUuid) {
    config.myUserDeviceUuid = crypto.randomUUID().replaceAll('-', '');
  }

  if (!config.authToken && userInfo.authToken) {
    config.authToken = userInfo.authToken;
  }

  if (!config.dbType) {
    config.dbType = DbType.mem;
  }

  data.setConfig(config);
  const newUserInfo: SaveUserInfoArgs = {
    myUserDeviceUuid: config.myUserDeviceUuid,
  };
  if (!userInfo.myUserId && config.myUserId) {
    newUserInfo.myUserId = config.myUserId;
  }
  if (!userInfo.authToken && config.authToken) {
    newUserInfo.authToken = config.authToken;
  }
  saveUserInfo(newUserInfo);

  await db.init(config);

  return bgNodeClient;
};

export default createClient;
