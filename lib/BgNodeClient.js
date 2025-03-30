import { ClientInfoStore } from './ClientInfoStore.js';
import db from './db/db.js';
import { ClientInfoStoreType } from './enums.js';
import libData from './helpers/libData.js';
import logger, { setLogger, setLogLevel } from './helpers/logger.js';
import { ClientInfo } from './models/ClientInfo.js';
import operations from './operations/operations.js';
export class BgNodeClient {
    async init(config, myUserId, myUserDeviceUuid, appLogger) {
        logger.debug("BgNodeClient.init called.", { config });
        if (libData.isInitialized()) {
            logger.error("BgNodeClient.init: already initialized.", { config, myUserId, myUserDeviceUuid });
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
        let clientInfoStoreType = config.clientInfoStoreType || ClientInfoStoreType.inMemory;
        if (!config.clientInfoStoreType && config.dbName) {
            clientInfoStoreType = ClientInfoStoreType.db;
        }
        this.clientInfoStore = config.clientInfoStore ||
            new ClientInfoStore(clientInfoStoreType);
        const clientInfo = await this.clientInfoStore.load();
        let updateClientInfo = false;
        if (myUserId && clientInfo.myUserId !== myUserId) {
            clientInfo.myUserId = myUserId;
            updateClientInfo = true;
        }
        if (myUserDeviceUuid && clientInfo.myUserDeviceUuid !== myUserDeviceUuid) {
            clientInfo.myUserDeviceUuid = myUserDeviceUuid;
            updateClientInfo = true;
        }
        if (!clientInfo.myUserDeviceUuid) {
            clientInfo.myUserDeviceUuid = ClientInfo.createDeviceUuid();
            updateClientInfo = true;
        }
        if (updateClientInfo) {
            await this.clientInfoStore.save(clientInfo);
        }
        libData.setClientInfoStore(this.clientInfoStore);
        libData.setInitialized(true);
        return this;
    }
    addListener = libData.addListener;
    operations = operations;
    removeListener = libData.removeListener;
    setConfig = libData.setConfig;
    config = libData.config;
    clientInfoStore;
    close = (done) => {
        libData.close();
        this.clientInfoStore.close();
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
    get isOffline() {
        return libData.isOffline();
    }
    set isOffline(isOffline) {
        libData.setIsOffline(isOffline);
    }
    get isSignedIn() {
        return this.clientInfoStore.isSignedIn;
    }
    get myUserDeviceUuid() {
        return this.clientInfoStore.myUserDeviceUuid;
    }
    get myUserId() {
        return this.clientInfoStore.myUserId;
    }
}
//# sourceMappingURL=BgNodeClient.js.map