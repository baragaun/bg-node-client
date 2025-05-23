import db from './helpers/db.js';
import getCollectionFromModelType from './helpers/getCollectionFromModelType.js';
let _db = undefined;
const find = async (query, modelType) => {
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
    // todo: implement based on model
    const records = await collection.find(query).exec();
    return {
        objects: records.map(record => new record.constructor(record.toMutableJSON())),
    };
};
export default find;
//# sourceMappingURL=find.js.map