import { addRxPlugin, createRxDatabase } from 'rxdb/plugins/core';
import { getRxStorageDexie } from 'rxdb/plugins/storage-dexie';
import { RxDBDevModePlugin } from 'rxdb/plugins/dev-mode';
import { wrappedValidateAjvStorage } from 'rxdb/plugins/validate-ajv';
import { DbCollection } from './enums.js';
import schema from '../../schema/schema.js';
import db from './helpers/db.js';
const initFnc = async (config) => {
    if (config.debugMode) {
        addRxPlugin(RxDBDevModePlugin);
    }
    const myDb = await createRxDatabase({
        name: 'firstspark',
        storage: wrappedValidateAjvStorage({
            // Dexie is using IndexedDB
            // see https://rxdb.info/rx-storage-dexie.html
            storage: getRxStorageDexie(),
        })
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
//# sourceMappingURL=init.js.map