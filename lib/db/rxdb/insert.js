import { MutationType } from '../../enums.js';
import { getModelTypeFromObject } from '../../helpers/helpers.js';
import db from './helpers/db.js';
import getCollectionFromModelType from './helpers/getCollectionFromModelType.js';
let _db = undefined;
const insert = async (obj, modelType) => {
    const result = { operation: MutationType.create };
    if (!_db) {
        _db = db.getDb();
        if (!_db) {
            result.error = 'db-unavailable';
            return result;
        }
    }
    if (!modelType) {
        modelType = modelType || getModelTypeFromObject(obj);
    }
    if (!modelType) {
        result.error = 'model-type-not-identified';
        return result;
    }
    const collection = getCollectionFromModelType(modelType);
    if (!collection) {
        result.error = 'collection-not-found';
        return result;
    }
    if (!obj.id) {
        obj.id = crypto.randomUUID().replaceAll('-', '');
    }
    try {
        const record = await collection.insert(obj);
        result.object = record.toMutableJSON();
        return result;
    }
    catch (error) {
        console.error(error);
        result.error = error.message;
        return result;
    }
};
export default insert;
//# sourceMappingURL=insert.js.map