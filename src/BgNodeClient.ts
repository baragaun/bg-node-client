// import { BgDataListener } from './BgDataListener.js';
// import { Operations } from './Operations.js';
import db from './db/db.js';
import clientInfoStore from './helpers/clientInfoStore.js';
import data from './helpers/data.js';
import operations from './operations/operations.js';
import { BgNodeClientConfig } from './types/BgNodeClientConfig.js';

export class BgNodeClient {
  public async init(
    config: BgNodeClientConfig,
    myUserId?: string,
    myUserDeviceUuid?: string,
  ): Promise<BgNodeClient> {
    data.setConfig(config);

    await db.init(config);

    const existingClientInfo = await clientInfoStore.load();

    if (!myUserDeviceUuid) {
      myUserDeviceUuid = existingClientInfo.myUserDeviceUuid;

      if (!myUserDeviceUuid) {
        myUserDeviceUuid = crypto.randomUUID().replaceAll('-', '');
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

  public addListener = data.addListener;
  public operations = operations;
  public removeListener = data.removeListener;
  public setConfig = data.setConfig;
  public config = data.config;
  public clientInfoStore = clientInfoStore;

  public get myUserId(): string | undefined {
    return clientInfoStore.get().myUserId;
  }

  public get myUserDeviceUuid(): string | undefined {
    return clientInfoStore.get().myUserDeviceUuid;
  }
}
