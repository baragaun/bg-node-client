import { addRxPlugin, createRxDatabase } from 'rxdb/plugins/core';
import { RxDBDevModePlugin } from 'rxdb/plugins/dev-mode';
import { getRxStorageDexie } from 'rxdb/plugins/storage-dexie';
import { getRxStorageMemory } from 'rxdb/plugins/storage-memory';
import { getAjv, wrappedValidateAjvStorage } from 'rxdb/plugins/validate-ajv';
// import Ajv from 'ajv';
import addFormats from 'ajv-formats';
// import { RxDBUpdatePlugin } from 'rxdb/plugins/update';
import modelsSchema from '../../models/schema/schema.js';
import { BgNodeClientConfig } from '../../types/BgNodeClientConfig.js';
import { ModelType } from '../../types/enums.js';
import { MyUser } from '../../types/models/MyUser.js';
import { User } from '../../types/models/User.js';
import { DbCollection } from './enums.js';
import findById from './findById.js';
import db from './helpers/db.js';
import initLibSignal from './initLibSignal.js';
import libSignalSchema from './libSignalStores/schema/libSignalSchema.js';

const initDb = async (config: BgNodeClientConfig): Promise<MyUser | null> => {
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

  if (config.debugMode) {
    addRxPlugin(RxDBDevModePlugin);
    storage = wrappedValidateAjvStorage({
      storage: storage as any,
    }) as any;
  }

  const myDb = await createRxDatabase({
    name: config.dbName ?? 'firstspark',
    storage: storage as any,
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
    [DbCollection.myUser]: {
      schema: modelsSchema.MyUser,
    },
    [DbCollection.userInbox]: {
      schema: modelsSchema.UserInbox,
    },
  };

  if (config.libSignal?.enable) {
    collections[DbCollection.libSignalIdentityKeys] = {
      schema: libSignalSchema.identityKeySchema,
    };
    collections[DbCollection.libSignalKyberPreKeys] = {
      schema: libSignalSchema.kyberPrekeySchema,
    };
    collections[DbCollection.libSignalPrekeys] = {
      schema: libSignalSchema.preKeySchema,
    };
    collections[DbCollection.libSignalRegistration] = {
      schema: libSignalSchema.registrationSchema,
    };
    collections[DbCollection.libSignalSenderKeys] = {
      schema: libSignalSchema.senderKeySchema,
    };
    collections[DbCollection.libSignalSessions] = {
      schema: libSignalSchema.sessionSchema,
    };
    collections[DbCollection.libSignalSignedPreKeys] = {
      schema: libSignalSchema.signedPrekeySchema,
    };
  }

  await myDb.addCollections(collections);
  db.setDb(myDb);

  let myUser: MyUser | null = null;

  if (config.myUserId) {
    const { object } = await findById<User>(config.myUserId, ModelType.MyUser);

    if (object) {
      myUser = object;
      if (config.libSignal?.enable) {
        await initLibSignal(myUser, config);
      }
    }
  }

  return myUser;
};

export default initDb;
