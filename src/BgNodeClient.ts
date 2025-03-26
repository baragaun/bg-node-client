// import { BgDataListener } from './BgDataListener.js';
// import { Operations } from './Operations.js';
import db from './db/db.js';
import clientInfoStore from './helpers/clientInfoStore.js';
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

  public addListener = libData.addListener;
  public operations = operations;
  public removeListener = libData.removeListener;
  public setConfig = libData.setConfig;
  public config = libData.config;
  public clientInfoStore = clientInfoStore;

  public close = (done?: () => void): void => {
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
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////
  // Getters:

  public get isInitialized(): boolean {
    return libData.isInitialized();
  }

  public get isSignedIn(): boolean {
    return clientInfoStore.get().isSignedIn;
  }

  public get myUserDeviceUuid(): string | undefined {
    return clientInfoStore.get().myUserDeviceUuid;
  }

  public get myUserId(): string | undefined {
    return clientInfoStore.get().myUserId;
  }
}
