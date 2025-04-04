import db from './helpers/db.js';
import getCollectionFromModelType from './helpers/getCollectionFromModelType.js';
let _db = undefined;
const findOneByMatch = async (match, modelType) => {
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
    // todo: implement
    const record = await collection
        .findOne({
        selector: {
            id: {
                $eq: match.id,
            },
        },
    })
        .exec();
    return { object: record ? new record.constructor(record.toMutableJSON()) : null };
};
export default findOneByMatch;
//# sourceMappingURL=findOneByMatch.js.map