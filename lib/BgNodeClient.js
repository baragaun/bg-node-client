// import { BgDataListener } from './BgDataListener.js';
// import { Operations } from './Operations.js';
import db from './db/db.js';
import clientInfoStore from './helpers/clientInfoStore.js';
import libData from './helpers/libData.js';
import logger, { setLogger, setLogLevel } from './helpers/logger.js';
import operations from './operations/operations.js';
import { ClientInfo } from './types/models/ClientInfo.js';
import { translate } from './uiMessages.js';
export class BgNodeClient {
    async init(config, myUserId, myUserDeviceUuid, appLogger) {
        if (libData.isInitialized()) {
            logger.error("BgNodeClient.init: already initialized.", {
                config,
                myUserId,
                myUserDeviceUuid,
            });
            return this;
        }
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
        let saveClientInfo = false;
        if (myUserId && existingClientInfo.myUserId !== myUserId) {
            existingClientInfo.myUserId = myUserId;
            saveClientInfo = true;
        }
        if (myUserDeviceUuid && existingClientInfo.myUserDeviceUuid !== myUserDeviceUuid) {
            existingClientInfo.myUserDeviceUuid = myUserDeviceUuid;
            saveClientInfo = true;
        }
        if (!existingClientInfo.myUserDeviceUuid) {
            existingClientInfo.myUserDeviceUuid = ClientInfo.createDeviceUuid();
            saveClientInfo = true;
        }
        if (saveClientInfo) {
            await clientInfoStore.persist(existingClientInfo);
        }
        libData.setInitialized(true);
        return this;
    }
    addListener = libData.addListener;
    operations = operations;
    removeListener = libData.removeListener;
    setConfig = libData.setConfig;
    config = libData.config;
    clientInfoStore = clientInfoStore;
    translate = translate;
    close = (done) => {
        libData.close();
        clientInfoStore.close();
        db.close().then(() => {
            logger.debug("BgNodeClient closed.");
            if (done) {
                done();
            }
        }, (error) => {
            logger.error("BgNodeClient close failed.", error);
        });
    };
    //////////////////////////////////////////////////////////////////////////////////////////////////
    // Getters:
    get isInitialized() {
        return libData.isInitialized();
    }
    get isSignedIn() {
        return clientInfoStore.get().myUserId;
    }
    get myUserDeviceUuid() {
        return clientInfoStore.get().myUserDeviceUuid;
    }
    get myUserId() {
        return clientInfoStore.get().myUserId;
    }
}
//# sourceMappingURL=BgNodeClient.js.map