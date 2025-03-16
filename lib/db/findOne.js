import db from "./helpers/db.js";
import getCollectionFromModelType from "./helpers/getCollectionFromModelType.js";
let _db = undefined;
const findOne = async (match, modelType) => {
    const result = {};
    if (!_db) {
        _db = db.getDb();
        if (!_db) {
            result.error = "db-unavailable";
            return result;
        }
    }
    const collection = getCollectionFromModelType(modelType);
    if (!collection) {
        result.error = "collection-not-found";
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
    return { object: record.toMutableJSON() ?? null };
};
export default findOne;
//# sourceMappingURL=findOne.js.map