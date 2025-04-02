import db from './helpers/db.js';
import getCollectionFromModelType from './helpers/getCollectionFromModelType.js';
let _db = undefined;
const countByMatch = async (match, modelType) => {
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
    const count = await collection
        .count({
        selector: {
            id: {
                $eq: match.id,
            },
        },
    })
        .exec();
    return { object: count };
};
export default countByMatch;
//# sourceMappingURL=countByMatch.js.map