import { MutationType } from '../enums.js';
import db from './helpers/db.js';
import getCollectionFromModelType from './helpers/getCollectionFromModelType.js';
import { getModelTypeFromObject } from '../helpers/helpers.js';
import insert from './insert.js';
let _db = undefined;
const upsert = async (changes, modelType) => {
    const result = { operation: MutationType.update };
    if (!_db) {
        _db = db.getDb();
        if (!_db) {
            result.error = 'db-unavailable';
            return result;
        }
    }
    if (!modelType) {
        modelType = modelType || getModelTypeFromObject(changes);
    }
    const collection = getCollectionFromModelType(modelType);
    if (!collection) {
        result.error = 'collection-not-found';
        return result;
    }
    const foundDocuments = await collection
        .find({
        selector: {
            id: {
                $eq: changes.id,
            },
        },
    })
        .exec();
    if (foundDocuments.length === 0) {
        result.operation = MutationType.create;
        return insert(changes, modelType);
    }
    const firstDocument = foundDocuments[0];
    const doc = await firstDocument.patch(changes);
    result.object = doc.toMutableJSON();
    return result;
};
export default upsert;
//# sourceMappingURL=upsert.js.map