import { RxDatabase } from 'rxdb';

import { DbCollection } from '../../../db/rxdb/enums.js';
import libSignalSchema from '../schema___DELETE/libSignalSchema.js';

const initRxdbStores = async (
  db: RxDatabase,
): Promise<void> => {
// const init = async (db: RxDatabase): Promise<void> => {
  // const db = await createRxDatabase({
  //   name: 'signaldb',
  //   adapter: 'idb',
  //   password: 'myLongAndStupidPassword' // secure your database!
  // });

  // const identityKeysCollection = await db.collection<IdentityKeyDocument>({
  //   name: DbCollection.libSignalIdentityKeys,
  //   schema: identityKeySchema
  // });
  // const registrationCollection = await db.collection<RegistrationDocument>({
  //   name: DbCollection.libSignalRegistration,
  //   schema: registrationSchema
  // });

  await db.addCollections({
    [DbCollection.libSignalIdentityKeys]: {
      schema: libSignalSchema.identityKeySchema,
    },
    [DbCollection.libSignalKyberPreKeys]: {
      schema: libSignalSchema.kyberPrekeySchema,
    },
    [DbCollection.libSignalPrekeys]: {
      schema: libSignalSchema.preKeySchema,
    },
    [DbCollection.libSignalRegistration]: {
      schema: libSignalSchema.registrationSchema,
    },
    [DbCollection.libSignalSenderKeys]: {
      schema: libSignalSchema.senderKeySchema,
    },
    [DbCollection.libSignalSessions]: {
      schema: libSignalSchema.sessionSchema,
    },
    [DbCollection.libSignalSignedPreKeys]: {
      schema: libSignalSchema.signedPrekeySchema,
    },
  });
}

export default initRxdbStores;
