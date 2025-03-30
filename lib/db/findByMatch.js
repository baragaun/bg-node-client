import db from './helpers/db.js';
import getCollectionFromModelType from './helpers/getCollectionFromModelType.js';
let _db = undefined;
const findByMatch = async (match, modelType) => {
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
    // todo: implement based on model
    const records = await collection
        .find({
        selector: {
            id: {
                $eq: match.id,
            },
        },
    })
        .exec();
    return {
        objects: records.map((r) => r.toMutableJSON()),
    };
};
export default findByMatch;
//# sourceMappingURL=findByMatch.js.map