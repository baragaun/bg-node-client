import { MutationType, } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import clientInfoStore from '../../helpers/clientInfoStore.js';
import { defaultQueryOptionsForMutations } from '../../helpers/defaults.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
const reportUserForMe = async (userId, reasonTextId, messageText, queryOptions = defaultQueryOptionsForMutations) => {
    if (!libData.isInitialized()) {
        throw new Error('not-initialized');
    }
    const clientInfo = clientInfoStore.get();
    if (!clientInfo.isSignedIn) {
        throw new Error('not-authorized');
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