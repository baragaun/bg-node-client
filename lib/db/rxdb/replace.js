import { getModelTypeFromObject } from '../../helpers/helpers.js';
import db from './helpers/db.js';
import getCollectionFromModelType from './helpers/getCollectionFromModelType.js';
let _db = undefined;
const replace = async (obj) => {
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
    // todo
    return obj;
};
export default replace;
//# sourceMappingURL=replace.js.map