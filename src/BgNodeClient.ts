import { ClientInfoStore } from './ClientInfoStore.js';
import db from './db/db.js';
import { ClientInfoStoreType } from './enums.js';
import libData from './helpers/libData.js';
import logger, { setLogger, setLogLevel } from './helpers/logger.js';
import { ClientInfo } from './models/ClientInfo.js';
import operations from './operations/operations.js';
import { BgNodeClientConfig } from './types/BgNodeClientConfig.js';
import { Logger } from './types/logger.js';

export class BgNodeClient {
  public async init(
    config: BgNodeClientConfig,
    myUserId?: string,
    myUserDeviceUuid?: string,
    appLogger?: Logger,
  ): Promise<BgNodeClient> {
    logger.debug("BgNodeClient.init called.", { config });

    if (libData.isInitialized()) {
      logger.error("BgNodeClient.init: already initialized.", { config, myUserId, myUserDeviceUuid });
      return this;
    }

    if (appLogger) {
      setLogger(appLogger);
    } else if (config.logLevel) {
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

    const clientInfo = await this.clientInfoStore.load()

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

  public addListener = libData.addListener;
  public operations = operations;
  public removeListener = libData.removeListener;
  public setConfig = libData.setConfig;
  public config = libData.config;
  public clientInfoStore: ClientInfoStore;

  public close = (done?: () => void): void => {
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
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////
  // Getters:
  public get isInitialized(): boolean {
    return libData.isInitialized();
  }

  public get isOffline(): boolean {
    return libData.isOffline();
  }

  public set isOffline(isOffline: boolean) {
    libData.setIsOffline(isOffline);
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
