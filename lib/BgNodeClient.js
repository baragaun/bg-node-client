// import { BgDataListener } from './BgDataListener.js';
// import { Operations } from './Operations.js';
import db from './db/db.js';
import { DbType } from './enums.js';
import data from './helpers/data.js';
import loadUserInfo from './helpers/loadUserInfo.js';
import saveUserInfo from './helpers/saveUserInfo.js';
import operations from './operations/operations.js';
export class BgNodeClient {
    async init(config) {
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
        const newUserInfo = {
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
    addListener = data.addListener;
    operations = operations;
    removeListener = data.removeListener;
    setConfig = data.setConfig;
    config = data.config;
}
//# sourceMappingURL=BgNodeClient.js.map