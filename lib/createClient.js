import bgNodeClient from './bgNodeClient.js';
import db from './db/db.js';
import data from './helpers/data.js';
import loadUserInfo from './helpers/loadUserInfo.js';
import { DbType } from './types/enums.js';
const createClient = async (config) => {
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
    await db.init(config);
    return bgNodeClient;
};
export default createClient;
//# sourceMappingURL=createClient.js.map