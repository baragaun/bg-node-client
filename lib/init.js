import { DbType } from './types/enums.js';
import data from './helpers/data.js';
import db from './db/db.js';
import loadUserInfo from './helpers/loadUserInfo.js';
const init = async (config) => {
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
};
export default init;
//# sourceMappingURL=init.js.map