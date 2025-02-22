import { getModelTypeFromObject } from '../../helpers/helpers.js';
import db from './helpers/db.js';
import getCollectionFromModelType from './helpers/getCollectionFromModelType.js';
let _db = undefined;
const insert = async (obj) => {
    if (!_db) {
        _db = db.getDb();
        if (!_db) {
            return null;
        }
    }
    const modelType = getModelTypeFromObject(obj);
    if (!modelType) {
        throw new Error('model-type-not-identified');
    }
    const collection = getCollectionFromModelType(modelType);
    if (!collection) {
        throw new Error('collection-not-found');
    }
    if (!obj.id) {
        obj.id = crypto.randomUUID();
    }
    return collection.insert(obj);
};
export default insert;
//# sourceMappingURL=insert.js.map