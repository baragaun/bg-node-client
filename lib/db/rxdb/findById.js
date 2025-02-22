import db from './helpers/db.js';
import getCollectionFromModelType from './helpers/getCollectionFromModelType.js';
let _db = undefined;
const findById = async (id, modelType) => {
    const result = {};
    if (!_db) {
        _db = db.getDb();
        if (!_db) {
            result.error = 'db-unavailable';
            return result;
        }
    }
    const collection = getCollectionFromModelType(modelType);
    if (!collection) {
        result.error = 'collection-not-found';
        return result;
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
        return { object: documents[0] };
    }
    return { object: null };
};
export default findById;
//# sourceMappingURL=findById.js.map