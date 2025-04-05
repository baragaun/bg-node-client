import db from './helpers/db.js';
import getCollectionFromModelType from './helpers/getCollectionFromModelType.js';
import logger from '../helpers/logger.js';
let _db = undefined;
const findById = async (id, modelType) => {
    const result = {};
    if (!id) {
        result.error = 'invalid-input';
        return result;
    }
    if (!_db) {
        _db = db.getDb();
        if (!_db) {
            result.error = 'db-unavailable';
            return result;
        }
    }
    const collection = getCollectionFromModelType(modelType);
    if (!collection) {
        result.error = 'collection-not-found';
        return result;
    }
    try {
        const record = await collection
            .findOne({
            selector: {
                id: {
                    $eq: id,
                },
            },
        })
            .exec(false);
        return {
            object: record
                ? new record.constructor(record.toMutableJSON())
                : null,
        };
    }
    catch (error) {
        logger.error('findById: failed to find record', { error, id, modelType });
        return { object: null };
    }
};
export default findById;
//# sourceMappingURL=findById.js.map