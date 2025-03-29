import db from '../db/db.js';
import { MutationType } from '../enums.js';
import libData from '../helpers/libData.js';
import logger from '../helpers/logger.js';
const insertOne = async (object) => {
    if (!libData.isInitialized()) {
        logger.error('insertOne: unavailable');
        return { error: 'unavailable' };
    }
    if (!libData.clientInfoStore().isSignedIn) {
        logger.error('insertOne: unauthorized');
        return { error: 'unauthorized' };
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