import { addRxPlugin, createRxDatabase } from 'rxdb/plugins/core';
import { getRxStorageDexie } from 'rxdb/plugins/storage-dexie';
import { RxDBDevModePlugin } from 'rxdb/plugins/dev-mode';
import { wrappedValidateAjvStorage } from 'rxdb/plugins/validate-ajv';
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
        channels: {
            schema: schema.channel,
        },
        channelInvitations: {
            schema: schema.channelInvitation,
        },
        channelMessages: {
            schema: schema.channelMessage,
        },
        channelParticipants: {
            schema: schema.channelParticipant,
        },
        users: {
            schema: schema.user,
        },
    });
    db.setDb(myDb);
};
export default initFnc;
//# sourceMappingURL=init.js.map