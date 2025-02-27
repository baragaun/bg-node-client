import { getAjv } from 'rxdb/plugins/validate-ajv';
// import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import { addRxPlugin, createRxDatabase } from 'rxdb/plugins/core';
import { getRxStorageDexie } from 'rxdb/plugins/storage-dexie';
import { getRxStorageMemory } from 'rxdb/plugins/storage-memory';
import { RxDBDevModePlugin } from 'rxdb/plugins/dev-mode';
import { wrappedValidateAjvStorage } from 'rxdb/plugins/validate-ajv';

import { BgNodeClientConfig } from '../../types/BgNodeClientConfig.js';
import { DbCollection } from './enums.js';
import schema from '../../models/schema/schema.js';
import db from './helpers/db.js';

const initFnc = async (
  config: BgNodeClientConfig,
): Promise<void> => {
  // @ts-ignore
  // const ajv = new Ajv();
  // addFormats.default(ajv, ['date-time']);

  const ajv = getAjv();
  addFormats.default(ajv, ['date-time']);
  // ajv.addFormat('email', {
  //   type: 'string',
  //   validate: v => v.includes('@') // ensure email fields contain the @ symbol
  // });

  let storage = config.inBrowser
    ? getRxStorageDexie()
    : getRxStorageMemory();

  if (config.debugMode) {
    addRxPlugin(RxDBDevModePlugin);
    storage = wrappedValidateAjvStorage({
      storage: storage as any,
    }) as any;
  }

  const myDb = await createRxDatabase({
    name: 'firstspark',
    storage: storage as any,
  });

  await myDb.addCollections({
    [DbCollection.channels]: {
      schema: schema.Channel,
    },
    [DbCollection.channelInvitations]: {
      schema: schema.ChannelInvitation,
    },
    [DbCollection.channelMessages]: {
      schema: schema.ChannelMessage,
    },
    [DbCollection.channelInboxes]: {
      schema: schema.ChannelParticipant,
    },
    [DbCollection.users]: {
      schema: schema.User,
    },
  });

  db.setDb(myDb);
};

export default initFnc;
