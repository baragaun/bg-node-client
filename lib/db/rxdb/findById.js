import db from './helpers/db.js';
import getCollectionFromModelType from './helpers/getCollectionFromModelType.js';
let _db = undefined;
const findById = async (id, modelType) => {
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
    const documents = await collection
        .find({
        selector: {
            channelId: {
                $eq: id,
            },
        },
    }).exec();
    if (Array.isArray(documents) && documents.length === 1) {
        return documents[0];
    }
    return null;
};
export default findById;
//# sourceMappingURL=findById.js.map