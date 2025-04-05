import libData from './libData.js';
import { BgListenerTopic, ModelType } from '../enums.js';
import logger from './logger.js';
import db from '../db/db.js';
const clearUser = async (deleteLocalUser = true) => {
    const clientInfo = libData.clientInfoStore().clientInfo;
    const signedOutUserId = clientInfo.myUserId || clientInfo.signedOutUserId;
    if (deleteLocalUser) {
        await db.delete(clientInfo.myUserId, ModelType.MyUser);
    }
    await libData.clientInfoStore().clearMyUserFromClientInfo(signedOutUserId);
    for (const listener of libData.listeners()) {
        if (listener.topic === BgListenerTopic.myUser &&
            typeof listener.onSignedOut === 'function') {
            const response = listener.onSignedOut();
            if (response && typeof response.then === 'function') {
                response.catch((error) => {
                    logger.error('clearUser: listener onSignedOut failed.', { error });
                });
            }
        }
    }
};
export default clearUser;
//# sourceMappingURL=clearUser.js.map