import { ClientInfoStore } from './ClientInfoStore.js';
import db from './db/db.js';
import { ClientInfoStoreType } from './enums.js';
import libData from './helpers/libData.js';
import logger, { setLogger, setLogLevel } from './helpers/logger.js';
import mockOperations from './mockOperations/mockOperations.js';
import { ClientInfo } from './models/ClientInfo.js';
import nats from './nats/index.js';
import operations from './operations/operations.js';
import { InitBgNodeClientArgs } from './types/InitBgNodeClientArgs.js';

export class BgNodeClient {
  public async init(args: InitBgNodeClientArgs): Promise<BgNodeClient> {
    logger.debug('BgNodeClient.init called.', { args });

    if (libData.isInitialized()) {
      logger.error('BgNodeClient.init: already initialized.', { args });
      return this;
    }

    const {
      config,
      myUserId,
      myUserDeviceUuid,
      isOnline,
      startSession,
      appLogger,
      listener,
    } = args;

    if (appLogger) {
      setLogger(appLogger);
    } else if (config.logLevel) {
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

  public addListener = libData.addListener;
  public mockOperations = mockOperations;
  public operations = operations;
  public removeListener = libData.removeListener;
  public setConfig = libData.setConfig;
  public config = libData.config;
  public clientInfoStore: ClientInfoStore;

  public close = (done?: () => void): void => {
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
  public get isInitialized(): boolean {
    return libData.isInitialized();
  }

  public get isOnline(): boolean {
    return libData.isOnline();
  }

  public set isOnline(isOnline: boolean) {
    libData.setIsOnline(isOnline);
  }

  public get isInMockMode(): boolean {
    return libData.isInMockMode();
  }

  public set enableMockMode(enable: boolean) {
    libData.setEnableMockMode(enable);
  }

  public get isSignedIn(): boolean {
    return this.clientInfoStore.isSignedIn;
  }

  public get myUserDeviceUuid(): string | undefined {
    return this.clientInfoStore.myUserDeviceUuid;
  }

  public get myUserId(): string | undefined {
    return this.clientInfoStore.myUserId;
  }
}
