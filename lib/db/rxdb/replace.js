import { getModelTypeFromObject } from '../../helpers/helpers.js';
import { MutationType } from '../../types/enums.js';
import db from './helpers/db.js';
import getCollectionFromModelType from './helpers/getCollectionFromModelType.js';
let _db = undefined;
const replace = async (obj) => {
    const result = { operation: MutationType.replace };
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
    const records = await collection
        .find({
        selector: {
            channelId: {
                $eq: obj.id,
            },
        },
    })
        .exec();
    if (!Array.isArray(records) || records.length !== 1) {
        // todo: error
        return null;
    }
    await records[0].remove();
    const record = await collection.insert(obj);
    result.object = record.toMutableJSON();
    return result;
};
export default replace;
//# sourceMappingURL=replace.js.map