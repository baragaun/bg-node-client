import db from '../db/db.js';
import { MutationType } from '../enums.js';
import clientInfoStore from '../helpers/clientInfoStore.js';
import libData from '../helpers/libData.js';
const insertOne = async (object) => {
    if (!libData.isInitialized()) {
        throw new Error('not-initialized');
    }
    const clientInfo = clientInfoStore.get();
    if (!clientInfo.isSignedIn) {
        throw new Error('not-authorized');
    }
    try {
        return db.insert(object);
    }
    catch (error) {
        return {
            operation: MutationType.create,
            error: error.message,
        };
    }
};
export default insertOne;
//# sourceMappingURL=insertOne.js.map