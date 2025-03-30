import { MutationType, } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import { defaultQueryOptionsForMutations } from '../../helpers/defaults.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
const reportUserForMe = async (userId, reasonTextId, messageText, queryOptions = defaultQueryOptionsForMutations) => {
    if (!libData.isInitialized()) {
        logger.error('reportUserForMe: unavailable');
        return { error: 'unavailable' };
    }
    if (!libData.clientInfoStore().isSignedIn) {
        return { error: 'unauthorized' };
    }
    if (libData.isOffline() && !libData.config().enableMockMode) {
        logger.error('reportUserForMe: offline');
        return { error: 'offline' };
    }
    const result = {
        operation: MutationType.create,
    };
    if (!queryOptions) {
        queryOptions = defaultQueryOptionsForMutations;
    }
    try {
        return fsdata.myUser.reportUser(userId, reasonTextId, messageText, queryOptions);
    }
    catch (error) {
        logger.error(error);
        result.error = error.message;
        return result;
    }
};
export default reportUserForMe;
//# sourceMappingURL=reportUserForMe.js.map