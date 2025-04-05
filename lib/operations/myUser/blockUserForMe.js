import db from '../../db/db.js';
import { ModelType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import { defaultQueryOptionsForMutations } from '../../helpers/defaults.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import blockUserForMeMock from '../../mockOperations/myUser/blockUserForMeMock.js';
const blockUserForMe = async (userId, reasonTextId, notes, queryOptions = defaultQueryOptionsForMutations) => {
    try {
        if (libData.config().enableMockMode) {
            return blockUserForMeMock(userId, reasonTextId, notes);
        }
        if (!libData.isInitialized()) {
            logger.error('blockUserForMe: unavailable');
            return { error: 'unavailable' };
        }
        if (!libData.clientInfoStore().isSignedIn) {
            logger.error('blockUserForMe: unauthorized');
            return { error: 'unauthorized' };
        }
        if (!queryOptions) {
            queryOptions = defaultQueryOptionsForMutations;
        }
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
        logger.error('blockUserForMe: error.', { error });
        return { error: error.message };
    }
};
export default blockUserForMe;
//# sourceMappingURL=blockUserForMe.js.map