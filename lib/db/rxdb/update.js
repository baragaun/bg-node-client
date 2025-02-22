import db from './helpers/db.js';
import getCollectionFromModelType from './helpers/getCollectionFromModelType.js';
let _db = undefined;
const update = async (changes, modelType) => {
    if (!_db) {
        _db = db.getDb();
        if (!_db) {
            return null;
        }
    }
    const collection = getCollectionFromModelType(modelType);
    if (!collection) {
        throw new Error('collection-not-found');
    }
    const foundDocuments = await collection.find({
        selector: {
            id: {
                $eq: changes.id
            }
        }
    }).exec();
    if (foundDocuments.length === 0) {
        throw new Error('not-found');
    }
    const firstDocument = foundDocuments[0];
    return await firstDocument.patch({
        done: true,
    });
};
export default update;
//# sourceMappingURL=update.js.map