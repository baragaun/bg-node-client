// import { BgDataListener } from './BgDataListener.js';
// import { Operations } from './Operations.js';
import db from './db/db.js';
import { DbType } from './enums.js';
import data from './helpers/data.js';
import loadUserInfo from './helpers/loadUserInfo.js';
import saveUserInfo, { SaveUserInfoArgs } from './helpers/saveUserInfo.js';
import operations from './operations/operations.js';
import { BgNodeClientConfig } from './types/BgNodeClientConfig.js';

export class BgNodeClient {
  public async init(config: BgNodeClientConfig): Promise<BgNodeClient> {
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

    return this;
  }

  public addListener = data.addListener;
  public operations = operations;
  public removeListener = data.removeListener;
  public setConfig = data.setConfig;
  public config = data.config;
}
