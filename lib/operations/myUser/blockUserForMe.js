import db from '../../db/db.js';
import { ModelType, MutationType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import { defaultQueryOptionsForMutations } from '../../helpers/defaults.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
const blockUserForMe = async (userId, reasonTextId, notes, queryOptions = defaultQueryOptionsForMutations) => {
    if (!libData.isInitialized()) {
        logger.error('blockUserForMe: unavailable');
        return { error: 'unavailable' };
    }
    if (!libData.clientInfoStore().isSignedIn) {
        logger.error('blockUserForMe: unauthorized');
        return { error: 'unauthorized' };
    }
    const result = {
        operation: MutationType.update,
    };
    if (!queryOptions) {
        queryOptions = defaultQueryOptionsForMutations;
    }
    try {
        const updateResult = await fsdata.myUser.blockUserForMe(userId, reasonTextId, notes, queryOptions);
        if (updateResult.error) {
            return updateResult;
        }
        if (updateResult.object) {
            // Update local cache:
            await db.replace(updateResult.object, ModelType.MyUser);
        }
        return updateResult;
    }
    catch (error) {
        logger.error(error);
        result.error = error.message;
        return result;
    }
};
export default blockUserForMe;
//# sourceMappingURL=blockUserForMe.js.map