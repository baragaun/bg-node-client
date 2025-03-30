import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { ContentStatus } from '../../../models/ContentStatus.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
const startMySessionV2 = async (pushNotificationToken, returnContentStatus) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('fsdata.startMySessionV2: unavailable');
            return { error: 'unavailable' };
        }
        const clientInfo = libData.clientInfoStore().clientInfo;
        const myUserId = clientInfo.myUserId;
        const client = graffleClientStore.get();
        if (!clientInfo.isSignedIn) {
            logger.error('startMySessionV2: unauthorized');
            return { error: 'unauthorized' };
        }
        const args = {
            pushNotificationToken,
            returnContentStatus,
        };
        logger.debug('fsdata.startMySessionV2: sending', {
            $: args,
            optionsUpdatedAt: true,
            myUserUpdatedAt: true,
            myUserInboxUpdatedAt: true,
        });
        const response = await client.mutation.startMySessionV2({
            $: args,
            optionsUpdatedAt: true,
            myUserUpdatedAt: true,
            myUserInboxUpdatedAt: true,
        });
        logger.debug('fsdata.startMySessionV2: response received.', { response });
        if (response.errors) {
            logger.error('fsdata.startMySessionV2: failed with error', { error: response.errors });
            return { error: response.errors.map(e => e.message).join(', ') };
        }
        if (!response.data.startMySessionV2.optionsUpdatedAt) {
            logger.error('fsdata.startMySessionV2: incorrect response', { expected: myUserId, actual: response.data.startMySessionV2 });
            return { error: 'incorrect response' };
        }
        return { object: new ContentStatus(response.data.startMySessionV2) };
    }
    catch (error) {
        logger.error('fsdata.startMySessionV2 failed.', { error, headers: helpers.headers() });
        return { error: error.message };
    }
};
export default startMySessionV2;
//# sourceMappingURL=startMySessionV2.js.map