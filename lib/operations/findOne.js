import db from '../db/db.js';
import { CachePolicy } from '../types/enums.js';
import { defaultQueryOptions } from '../helpers/defaults.js';
const findOne = async (match, modelType, queryOptions = defaultQueryOptions) => {
    if (queryOptions.cachePolicy === CachePolicy.cache ||
        queryOptions.cachePolicy === CachePolicy.cacheFirst) {
        try {
            const result = await db.findOne(match, modelType);
            if (result.object || queryOptions.cachePolicy === CachePolicy.cache) {
                return result;
            }
        }
        catch (error) {
            return { error: error.message };
        }
    }
    return { object: null };
};
export default findOne;
//# sourceMappingURL=findOne.js.map