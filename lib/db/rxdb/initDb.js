import { addRxPlugin, createRxDatabase } from 'rxdb/plugins/core';
import { getAjv, wrappedValidateAjvStorage } from 'rxdb/plugins/validate-ajv';
import { getRxStorageDexie } from 'rxdb/plugins/storage-dexie';
import { getRxStorageMemory } from 'rxdb/plugins/storage-memory';
import { RxDBDevModePlugin } from 'rxdb/plugins/dev-mode';
// import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import { DbCollection } from './enums.js';
import db from './helpers/db.js';
import libSignalSchema from './libSignalStores/schema/libSignalSchema.js';
import modelsSchema from '../../models/schema/schema.js';
import findById from './findById.js';
import { ModelType } from '../../types/enums.js';
import initLibSignal from './initLibSignal.js';
const initDb = async (userId, config) => {
    // @ts-ignore
    // const ajv = new Ajv();
    // addFormats.default(ajv, ['date-time']);
    // addRxPlugin(RxDBUpdatePlugin);
    const ajv = getAjv();
    addFormats.default(ajv, ['date-time']);
    // ajv.addFormat('email', {
    //   type: 'string',
    //   validate: v => v.includes('@') // ensure email fields contain the @ symbol
    // });
    let storage = config.inBrowser
        ? getRxStorageDexie() :
        getRxStorageMemory();
    if (config.debugMode) {
        addRxPlugin(RxDBDevModePlugin);
        storage = wrappedValidateAjvStorage({
            storage: storage,
        });
    }
    const myDb = await createRxDatabase({
        name: config.dbName ?? 'firstspark',
        storage: storage,
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
        [DbCollection.channelInboxes]: {
            schema: modelsSchema.ChannelParticipant,
        },
        [DbCollection.users]: {
            schema: modelsSchema.User,
        },
        [DbCollection.myUser]: {
            schema: modelsSchema.MyUser,
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
    let myUser = null;
    if (userId) {
        const { object } = await findById(userId, ModelType.MyUser);
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
//# sourceMappingURL=initDb.js.map