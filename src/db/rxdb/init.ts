import { addRxPlugin, createRxDatabase } from 'rxdb/plugins/core';
import { getRxStorageDexie } from 'rxdb/plugins/storage-dexie';
import { RxDatabase } from 'rxdb';
import { RxDBDevModePlugin } from 'rxdb/plugins/dev-mode';
import { wrappedValidateAjvStorage } from 'rxdb/plugins/validate-ajv';

import { BgChannelsWebClientConfig } from '../../types/BgChannelsWebClientConfig.js';
import schema from '../../schema/schema.js';
import db from './helpers/db.js';

const initFnc = async (
  config: BgChannelsWebClientConfig,
): Promise<void> => {
  if (config.debugMode) {
    addRxPlugin(RxDBDevModePlugin);
  }

  const myDb: RxDatabase | undefined = await createRxDatabase({
    name: 'firstspark',
    storage: wrappedValidateAjvStorage({
      // Dexie is using IndexedDB
      // see https://rxdb.info/rx-storage-dexie.html
      storage: getRxStorageDexie(),
    })
  });

  await myDb.addCollections({
    channels: {
      schema: schema.Channel,
    },
    channelInvitations: {
      schema: schema.ChannelInvitation,
    },
    channelMessages: {
      schema: schema.ChannelMessage,
    },
    channelParticipants: {
      schema: schema.ChannelParticipant,
    },
    users: {
      schema: schema.User,
    },
  });

  db.setDb(myDb);
};

export default initFnc;
