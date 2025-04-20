import { MutationType } from '../enums.js';
import getCollectionFromModelType from './helpers/getCollectionFromModelType.js';
import logger from '../helpers/logger.js';
const cleanup = async (modelType) => {
    const result = { operation: MutationType.delete };
    try {
        const collection = getCollectionFromModelType(modelType);
        if (!collection) {
            result.error = 'collection-not-found';
            return result;
        }
        await collection.cleanup();
        logger.debug('Cleanup completed successfully.');
        return {};
    }
    catch (error) {
        logger.error('db.cleanup: failed:', { error });
        result.error = 'db-cleanup-failed';
        return result;
    }
};
export default cleanup;
//# sourceMappingURL=cleanup.js.map