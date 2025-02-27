import { getModelTypeFromObject } from '../../helpers/helpers.js';
import { MutationType } from '../../types/enums.js';
import db from './helpers/db.js';
import getCollectionFromModelType from './helpers/getCollectionFromModelType.js';
import modelHelpers from '../../models/helpers/modelHelpers.js';
let _db = undefined;
const insert = async (obj) => {
    const result = { operation: MutationType.create };
    if (!_db) {
        _db = db.getDb();
        if (!_db) {
            result.error = 'db-unavailable';
            return result;
        }
    }
    const modelType = getModelTypeFromObject(obj);
    if (!modelType) {
        result.error = 'model-type-not-identified';
        return result;
    }
    const collection = getCollectionFromModelType(modelType);
    if (!collection) {
        result.error = 'collection-not-found';
        return result;
    }
    // @ts-ignore
    // obj = {
    //   // id: 'ab33',
    //   adminNotes: 'abcd',
    //   createdAt: new Date(),
    // }
    obj = modelHelpers.formatObjectForDb(obj, modelType);
    if (!obj.id) {
        obj.id = crypto.randomUUID().replace(/-/g, '');
    }
    try {
        const dbResult = await collection.insert(obj);
        result.object = dbResult.toMutableJSON();
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