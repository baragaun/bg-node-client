import db from './helpers/db.js';
import getCollectionFromModelType from './helpers/getCollectionFromModelType.js';
let _db = undefined;
const findOne = async (query, modelType) => {
    const result = {};
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
    const record = await collection.findOne(query).exec();
    return { object: record ? new record.constructor(record.toMutableJSON()) : null };
};
export default findOne;
//# sourceMappingURL=findOne.js.map