import db from '../../../db/db.js';
import logger from '../../../helpers/logger.js';
const deleteFunc = async (id, modelType) => {
    if (!db.isConnected()) {
        throw new Error('db-not-available');
    }
    if (!db.isConnected()) {
        throw new Error('db-not-available');
    }
    try {
        await db.delete(id, modelType);
    }
    catch (error) {
        logger.error('Error deleting factory object', error);
    }
};
export default deleteFunc;
//# sourceMappingURL=delete.js.map