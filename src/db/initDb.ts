import addFormats from 'ajv-formats';
import {
  addRxPlugin,
  createRxDatabase,
  isRxDatabase,
  RxStorage,
} from 'rxdb/plugins/core';
import { RxDBDevModePlugin } from 'rxdb/plugins/dev-mode';
import { getRxStorageDexie } from 'rxdb/plugins/storage-dexie';
import { getRxStorageMemory } from 'rxdb/plugins/storage-memory';
import { getAjv, wrappedValidateAjvStorage } from 'rxdb/plugins/validate-ajv';

// import Ajv from 'ajv';
// import { RxDBUpdatePlugin } from 'rxdb/plugins/update';
import { DbCollection } from './enums.js';
import findById from './findById.js';
import { AppEnvironment, ModelType } from '../enums.js';
import db from './helpers/db.js';
import clientInfoStore from '../helpers/clientInfoStore.js';
import modelsSchema from '../models/schema/schema.js';
import { BgNodeClientConfig } from '../types/BgNodeClientConfig.js';
import { MyUser } from '../types/models/MyUser.js';
// import initLibSignal from './initLibSignal.js';
// import libSignalSchema from './libSignalStores/schema/libSignalSchema.js';

const loadMyUser = async (
  myUserId: string | null | undefined,
): Promise<MyUser | null> => {
  if (!myUserId) {
    return null;
  }

  const result = await findById<MyUser>(myUserId, ModelType.MyUser);

  // if (result.object && config.libSignal?.enable) {
  //   await initLibSignal(myUser, config);
  // }

  return result.object;
};

const initDb = async (config: BgNodeClientConfig): Promise<MyUser | null> => {
  if (isRxDatabase(db.getDb())) {
    console.error('RxDB.initDb called multiple times.');
    const clientInfo = clientInfoStore.get();

    return loadMyUser(clientInfo.myUserId);
  }

  // @ts-ignore
  // const ajv = new Ajv();
  // addFormats.default(ajv, ['date-time']);

  // addRxPlugin(RxDBUpdatePlugin);

  // see: https://github.com/ajv-validator/ajv/issues/1295
  const ajv = getAjv();
  addFormats.default(ajv, ['date-time']);
  // ajv.addFormat('email', {
  //   type: 'string',
  //   validate: v => v.includes('@') // ensure email fields contain the @ symbol
  // });

  let storage = config.inBrowser ? getRxStorageDexie() : getRxStorageMemory();

  if (
    config.appEnvironment === AppEnvironment.test ||
    config.appEnvironment === AppEnvironment.development
  ) {
    addRxPlugin(RxDBDevModePlugin);
    storage = wrappedValidateAjvStorage({
      storage: storage as any,
    }) as any;
  }

  // The default database name for production is 'firstspark'.
  let name = config.dbName ?? 'firstspark';

  if (
    !config.dbName &&
    (!config.appEnvironment || // default = 'production'
      config.appEnvironment === AppEnvironment.production)
  ) {
    if (config.appEnvironment === AppEnvironment.test) {
      name = 'firstspark_test';
    } else if (config.appEnvironment === AppEnvironment.development) {
      name = 'firstspark_dev';
    } else if (config.appEnvironment === AppEnvironment.staging) {
      name = 'firstspark_stag';
    }
  }

  const myDb = await createRxDatabase({
    name,
    storage: storage as RxStorage<any, any>,
    // see: https://rxdb.info/rx-database.html#eventreduce:
    eventReduce: true,
  });

  const collections = {
    [DbCollection.channels]: {
      schema: modelsSchema.Channel,
    },
    [DbCollection.channelInvitations]: {
      schema: modelsSchema.ChannelInvitation,
    },
    [DbCollection.channelMessages]: {
      schema: modelsSchema.ChannelMessage,
    },
    [DbCollection.channelParticipants]: {
      schema: modelsSchema.ChannelParticipant,
    },
    [DbCollection.users]: {
      schema: modelsSchema.User,
    },
    [DbCollection.clientInfo]: {
      schema: modelsSchema.ClientInfo,
    },
    [DbCollection.myUser]: {
      schema: modelsSchema.MyUser,
    },
    [DbCollection.userInbox]: {
      schema: modelsSchema.UserInbox,
    },
  };

  // if (config.libSignal?.enable) {
  //   collections[DbCollection.libSignalIdentityKeys] = {
  //     schema: libSignalSchema.identityKeySchema,
  //   };
  //   collections[DbCollection.libSignalKyberPreKeys] = {
  //     schema: libSignalSchema.kyberPrekeySchema,
  //   };
  //   collections[DbCollection.libSignalPrekeys] = {
  //     schema: libSignalSchema.preKeySchema,
  //   };
  //   collections[DbCollection.libSignalRegistration] = {
  //     schema: libSignalSchema.registrationSchema,
  //   };
  //   collections[DbCollection.libSignalSenderKeys] = {
  //     schema: libSignalSchema.senderKeySchema,
  //   };
  //   collections[DbCollection.libSignalSessions] = {
  //     schema: libSignalSchema.sessionSchema,
  //   };
  //   collections[DbCollection.libSignalSignedPreKeys] = {
  //     schema: libSignalSchema.signedPrekeySchema,
  //   };
  // }

  await myDb.addCollections(collections);
  db.setDb(myDb);

  if (typeof window !== 'undefined') {
    window.addEventListener('unload', async () => {
      await myDb.close();
    });
  }

  const clientInfo = await clientInfoStore.load();

  if (!clientInfo.myUserId) {
    return null;
  }

  return loadMyUser(clientInfo.myUserId);
};

export default initDb;
