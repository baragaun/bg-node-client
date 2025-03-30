import libData from './libData.js';
import { BgListenerTopic } from '../enums.js';
import logger from './logger.js';
const publishMyUserUpdate = (myUser) => {
    for (const listener of libData.listeners()) {
        if (listener.topic === BgListenerTopic.myUser &&
            typeof listener.onMyUserUpdated === 'function') {
            const listenerResponse = listener.onMyUserUpdated(myUser);
            if (listenerResponse && typeof listenerResponse.then === 'function') {
                listenerResponse.catch((error) => {
                    logger.error('publishMyUserUpdate: failed with error.', { error });
                });
            }
        }
    }
};
export default publishMyUserUpdate;
//# sourceMappingURL=publishMyUserUpdate.js.map