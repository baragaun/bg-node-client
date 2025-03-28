import db from '../db/db.js';
import { CachePolicy } from '../enums.js';
import clientInfoStore from '../helpers/clientInfoStore.js';
import { defaultQueryOptions } from '../helpers/defaults.js';
import libData from '../helpers/libData.js';
const findOne = async (match, modelType, queryOptions = defaultQueryOptions) => {
    if (!libData.isInitialized()) {
        throw new Error('not-initialized');
    }
    const clientInfo = clientInfoStore.get();
    if (!clientInfo.isSignedIn) {
        throw new Error('not-authorized');
    }
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