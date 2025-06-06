import db from './helpers/db.js';
import getCollectionFromModelType from './helpers/getCollectionFromModelType.js';
let _db = undefined;
const findAll = async (modelType) => {
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
    const records = await collection.find().exec();
    return {
        objects: records.map(record => new record.constructor(record.toMutableJSON())),
    };
};
export default findAll;
//# sourceMappingURL=findAll.js.map