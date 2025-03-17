// import { BgDataListener } from './BgDataListener.js';
// import { Operations } from './Operations.js';
import db from './db/db.js';
import clientInfoStore from './helpers/clientInfoStore.js';
import libData from './helpers/libData.js';
import logger, { setLogger, setLogLevel } from './helpers/logger.js';
import operations from './operations/operations.js';
export class BgNodeClient {
    async init(config, myUserId, myUserDeviceUuid, appLogger) {
        if (appLogger) {
            setLogger(appLogger);
        }
        else if (config.logLevel) {
            setLogLevel(config.logLevel);
        }
        logger.debug("BgNodeClient.init called.", {
            config,
            myUserId,
            myUserDeviceUuid,
        });
        libData.setConfig(config);
        await db.init(config);
        const existingClientInfo = await clientInfoStore.load();
        if (!myUserDeviceUuid) {
            myUserDeviceUuid = existingClientInfo.myUserDeviceUuid;
            if (!myUserDeviceUuid) {
                myUserDeviceUuid = crypto.randomUUID().replaceAll("-", "");
            }
        }
        if (existingClientInfo.myUserId !== myUserId ||
            existingClientInfo.myUserDeviceUuid !== myUserDeviceUuid) {
            existingClientInfo.myUserId = myUserId;
            existingClientInfo.myUserDeviceUuid = myUserDeviceUuid;
            await clientInfoStore.save(existingClientInfo);
        }
        return this;
    }
    addListener = libData.addListener;
    operations = operations;
    removeListener = libData.removeListener;
    setConfig = libData.setConfig;
    config = libData.config;
    clientInfoStore = clientInfoStore;
    get myUserId() {
        return clientInfoStore.get().myUserId;
    }
    get myUserDeviceUuid() {
        return clientInfoStore.get().myUserDeviceUuid;
    }
}
//# sourceMappingURL=BgNodeClient.js.map