import { MutationType } from '../enums.js';
import db from './helpers/db.js';
import getCollectionFromModelType from './helpers/getCollectionFromModelType.js';
import { getModelTypeFromObject } from '../helpers/helpers.js';
let _db = undefined;
const update = async (changes, modelType) => {
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
    const obj = await collection
        .findOne({
        selector: {
            id: {
                $eq: changes.id,
            },
        },
    })
        .exec();
    if (!obj) {
        result.error = 'not-found';
        return result;
    }
    try {
        const doc = await obj.patch(changes);
        result.object = doc.toMutableJSON();
        return result;
    }
    catch (error) {
        // see: https://rxdb.info/rx-document.html#prevent-conflicts-with-the-incremental-methods
        console.error('Failed to patch object from collection', { changes, modelType, error });
        try {
            const doc = await obj.incrementalPatch(changes);
            result.object = doc.toMutableJSON();
            return result;
        }
        catch (error2) {
            // fallback to incremental patch if the first patch fails
            console.error('Failed to incrementally patch object', { changes, modelType, error: error2 });
            result.error = 'remove-failed';
            return result;
        }
    }
};
export default update;
//# sourceMappingURL=update.js.map