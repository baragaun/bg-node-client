import { ClientInfoStore } from './ClientInfoStore.js';
import db from './db/db.js';
import { ClientInfoStoreType } from './enums.js';
import libData from './helpers/libData.js';
import logger, { setLogger, setLogLevel } from './helpers/logger.js';
import mockOperations from './mockOperations/mockOperations.js';
import { ClientInfo } from './models/ClientInfo.js';
import nats from './nats/index.js';
import operations from './operations/operations.js';
export class BgNodeClient {
    async init(args) {
        logger.debug('BgNodeClient.init called.', { args });
        if (libData.isInitialized()) {
            logger.error('BgNodeClient.init: already initialized.', { args });
            return this;
        }
        const { config, myUserId, myUserDeviceUuid, isOnline, startSession, appLogger, listener, } = args;
        if (appLogger) {
            setLogger(appLogger);
        }
        else if (config.logLevel) {
            setLogLevel(config.logLevel);
        }
        libData.setConfig(config);
        await db.init(config);
        if (Array.isArray(config.nats?.servers) && config.nats?.servers.length > 0) {
            await nats.init(config.nats);
        }
        libData.setIsOnline(isOnline ?? true);
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
        if (listener) {
            libData.addListener(listener);
        }
        if (startSession && this.clientInfoStore.isSignedIn) {
            await this.operations.myUser.startMySessionV2(undefined, true);
        }
        return this;
    }
    addListener = libData.addListener;
    mockOperations = mockOperations;
    operations = operations;
    removeListener = libData.removeListener;
    setConfig = libData.setConfig;
    config = libData.config;
    clientInfoStore;
    close = (done) => {
        libData.close();
        this.clientInfoStore.close();
        db.close().then(() => {
            if (libData.natsClient()?.isConnected) {
                libData.natsClient().close().then(() => {
                    logger.debug('BgNodeClient closed.');
                    if (done) {
                        done();
                    }
                });
                return;
            }
            logger.debug('BgNodeClient closed.');
            if (done) {
                done();
            }
        }, (error) => {
            logger.error('BgNodeClient close failed.', error);
        });
    };
    //////////////////////////////////////////////////////////////////////////////////////////////////
    // Getters:
    get isInitialized() {
        return libData.isInitialized();
    }
    get isOnline() {
        return libData.isOnline();
    }
    set isOnline(isOnline) {
        libData.setIsOnline(isOnline);
    }
    get isInMockMode() {
        return libData.isInMockMode();
    }
    set enableMockMode(enable) {
        libData.setEnableMockMode(enable);
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