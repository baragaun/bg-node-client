import db from '../../db/db.js';
import { BgListenerTopic, ModelType, MutationType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
const deleteMyUser = async (cause, description, deletePhysically) => {
    if (!libData.isInitialized()) {
        logger.error('deleteMyUser: unavailable');
        return { error: 'unavailable' };
    }
    const clientInfo = libData.clientInfoStore().clientInfo;
    const signedOutUserId = clientInfo.myUserId || clientInfo.signedOutUserId;
    if (!clientInfo.isSignedIn) {
        throw new Error('unauthorized');
    }
    try {
        if (libData.isOnline()) {
            await fsdata.myUser.deleteMyUser(cause, description, deletePhysically);
        }
        await db.delete(clientInfo.myUserId, ModelType.MyUser);
        // Removing the signed-in user info from local storage; leaving
        // the deviceUuid untouched.
        await libData.clientInfoStore().clearMyUserFromClientInfo(signedOutUserId);
        for (const listener of libData.listeners()) {
            if (listener.topic === BgListenerTopic.myUser &&
                typeof listener.onSignedOut === 'function') {
                const response = listener.onSignedOut();
                if (response && typeof response.then === 'function') {
                    response.catch((error) => {
                        logger.error('deleteMyUser: listener onSignedOut failed.', { error });
                    });
                }
            }
        }
        return {
            operation: MutationType.delete,
        };
    }
    catch (error) {
        logger.error('deleteMyUser: fsdata.myUser.deleteMyUser failed', error);
        return {
            operation: MutationType.delete,
            error: error.message,
        };
    }
};
export default deleteMyUser;
//# sourceMappingURL=deleteMyUser.js.map