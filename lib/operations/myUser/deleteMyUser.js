import { MutationType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import clearUser from '../../helpers/clearUser.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
const deleteMyUser = async (cause, description) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('deleteMyUser: unavailable');
            return { error: 'unavailable' };
        }
        const clientInfo = libData.clientInfoStore().clientInfo;
        if (!clientInfo.isSignedIn) {
            return { error: 'unauthorized' };
        }
        if (libData.isOnline()) {
            await fsdata.myUser.deleteMyUserV2(cause, description, true);
        }
        await clearUser(true);
        return {
            operation: MutationType.delete,
        };
    }
    catch (error) {
        logger.error('deleteMyUser: myUser.deleteMyUser failed', error);
        return {
            operation: MutationType.delete,
            error: error.message,
        };
    }
};
export default deleteMyUser;
//# sourceMappingURL=deleteMyUser.js.map