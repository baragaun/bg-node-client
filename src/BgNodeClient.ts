// import { BgDataListener } from './BgDataListener.js';
// import { Operations } from './Operations.js';
import db from './db/db.js';
import clientInfoStore from './helpers/clientInfoStore.js';
import libData from './helpers/libData.js';
import logger, { setLogger, setLogLevel } from './helpers/logger.js';
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

    if (!myUserDeviceUuid) {
      myUserDeviceUuid = existingClientInfo.myUserDeviceUuid;

      if (!myUserDeviceUuid) {
        myUserDeviceUuid = crypto.randomUUID().replaceAll("-", "");
      }
    }

    if (
      existingClientInfo.myUserId !== myUserId ||
      existingClientInfo.myUserDeviceUuid !== myUserDeviceUuid
    ) {
      existingClientInfo.myUserId = myUserId;
      existingClientInfo.myUserDeviceUuid = myUserDeviceUuid;

      await clientInfoStore.save(existingClientInfo);
    }

    return this;
  }

  public addListener = libData.addListener;
  public operations = operations;
  public removeListener = libData.removeListener;
  public setConfig = libData.setConfig;
  public config = libData.config;
  public clientInfoStore = clientInfoStore;

  public get myUserId(): string | undefined {
    return clientInfoStore.get().myUserId;
  }

  public get myUserDeviceUuid(): string | undefined {
    return clientInfoStore.get().myUserDeviceUuid;
  }
}
