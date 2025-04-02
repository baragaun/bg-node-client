import findMyUser from './findMyUser.js';
import { CachePolicy } from '../../enums.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
const isCachedUserFresh = async () => {
    try {
        if (!libData.isInitialized()) {
            logger.error('isCachedUserFresh: unavailable.');
            return false;
        }
        if (!libData.clientInfoStore().isSignedIn) {
            logger.error('isCachedUserFresh: user not signed in.');
            return false;
        }
        if (libData.isOffline()) {
            logger.error('isCachedUserFresh: offline.');
            return false;
        }
        const clientInfo = libData.clientInfoStore().clientInfo;
        if (!clientInfo ||
            !clientInfo.remoteContentStatus ||
            !clientInfo.remoteContentStatus.myUserUpdatedAt) {
            return false;
        }
        const response = await findMyUser({ cachePolicy: CachePolicy.cache });
        if (response.error ||
            !response.object ||
            !response.object.updatedAt) {
            return false;
        }
        const localUpdatedAt = new Date(response.object.updatedAt).getTime();
        logger.debug('isCachedUserFresh: comparing timestamps.', { local: localUpdatedAt, remote: clientInfo.remoteContentStatus.myUserUpdatedAt });
        return localUpdatedAt >= clientInfo.remoteContentStatus.myUserUpdatedAt;
    }
    catch (error) {
        logger.error('isCachedUserFresh: error.', { error });
        return false;
    }
};
export default isCachedUserFresh;
//# sourceMappingURL=isCachedUserFresh.js.map