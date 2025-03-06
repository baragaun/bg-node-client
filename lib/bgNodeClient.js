import db from './db/db.js';
import data from './helpers/data.js';
import loadUserInfo from './helpers/loadUserInfo.js';
import saveUserInfo from './helpers/saveUserInfo.js';
import operations from './operations/operations.js';
import { DbType } from './types/enums.js';
// import db from './db/db.js';
const bgNodeClient = {
    init: async (config) => {
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
    },
    addListener: data.addListener,
    operations,
    removeListener: data.removeListener,
};
export default bgNodeClient;
//# sourceMappingURL=bgNodeClient.js.map