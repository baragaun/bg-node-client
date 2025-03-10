import { MutationType } from '../../enums.js';
import db from './helpers/db.js';
import getCollectionFromModelType from './helpers/getCollectionFromModelType.js';
import { getModelTypeFromObject } from '../../helpers/helpers.js';
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
        result.error = 'not-found';
    }
    const firstDocument = foundDocuments[0];
    const doc = await firstDocument.patch(changes);
    result.object = doc.toMutableJSON();
    return result;
};
export default update;
//# sourceMappingURL=update.js.map