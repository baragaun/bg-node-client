import db from './helpers/db.js';
import getCollectionFromModelType from './helpers/getCollectionFromModelType.js';
let _db = undefined;
const findAll = async (modelType) => {
    if (!_db) {
        _db = db.getDb();
        if (!_db) {
            return [];
        }
    }
    const collection = getCollectionFromModelType(modelType);
    if (!collection) {
        throw new Error('collection-not-found');
    }
    const foundDocuments = await collection.find({
        selector: {
            done: {
                $eq: false
            }
        }
    }).exec();
    return foundDocuments;
};
export default findAll;
//# sourceMappingURL=findAll.js.map