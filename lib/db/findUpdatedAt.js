import db from './helpers/db.js';
import getCollectionFromModelType from './helpers/getCollectionFromModelType.js';
let _db = undefined;
const findUpdatedAt = async (id, modelType) => {
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
    const record = await collection.findOne({ selector: { id: { $eq: id } } }).exec();
    return {
        object: record ? record.toMutableJSON().updatedAt : null,
    };
};
export default findUpdatedAt;
//# sourceMappingURL=findUpdatedAt.js.map