import db from '../db/db.js';
import { CachePolicy } from '../enums.js';
import fsdata from '../fsdata/fsdata.js';
import { defaultQueryOptions } from '../helpers/defaults.js';
const findById = async (id, modelType, queryOptions = defaultQueryOptions) => {
    if (queryOptions.cachePolicy === CachePolicy.cache ||
        queryOptions.cachePolicy === CachePolicy.cacheFirst) {
        try {
            const result = await db.findById(id, modelType);
            if (result.object || queryOptions.cachePolicy === CachePolicy.cache) {
                return result;
            }
        }
        catch (error) {
            return { error: error.message };
        }
    }
    const object = await fsdata.findById(id, modelType);
    if (object) {
        // todo: What if the object does not exist anymore. How do we delete it from the local store?
        // Update local cache:
        await db.replace(object, modelType);
    }
    return { object };
};
export default findById;
//# sourceMappingURL=findById.js.map