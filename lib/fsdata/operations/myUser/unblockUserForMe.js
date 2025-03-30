import findMyUser from './findMyUser.js';
import { ModelType } from '../../../enums.js';
import { defaultQueryOptionsForMutations } from '../../../helpers/defaults.js';
import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
import pollForUpdatedObject from '../pollForUpdatedObject.js';
const unblockUserForMe = async (userId, queryOptions = defaultQueryOptionsForMutations) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('fsdata.unblockUserForMe: unavailable');
            return { error: 'unavailable' };
        }
        const client = graffleClientStore.get();
        if (!queryOptions) {
            queryOptions = defaultQueryOptionsForMutations;
        }
        const findMyUserResponse = await findMyUser();
        const myUser = findMyUserResponse.object;
        if (findMyUserResponse.error || !myUser) {
            logger.error('unblockUserForMe: failed to find my user.', { findMyUserResponse });
            return findMyUserResponse;
        }
        const oldUserBlockCount = myUser.userBlocks
            ? myUser.userBlocks.length
            : 0;
        const args = { userId };
        logger.debug('fsdata.unblockUserForMe: sending.', { args });
        const response = await client.mutation.unblockUserForMe({ $: args });
        logger.debug('fsdata.unblockUserForMe: response received.', { response });
        if (response.errors) {
            logger.error('fsdata.unblockUserForMe: failed with error', { error: response.errors });
            return { error: response.errors.map(e => e.message).join(', ') };
        }
        if (!response.data.unblockUserForMe) {
            logger.error('fsdata.unblockUserForMe: mutation did not return a valid response.');
            return { error: 'system-error' };
        }
        queryOptions.polling = {
            enabled: true,
            isInTargetStateFunc: ((updatedUser) => !updatedUser.userBlocks || updatedUser.userBlocks.length < oldUserBlockCount),
            oldUpdatedAt: myUser.updatedAt,
        };
        logger.debug('fsdata.unblockUserForMe: starting polling.');
        const pollingResult = await pollForUpdatedObject(myUser.id, ModelType.MyUser, queryOptions);
        logger.debug('fsdata.unblockUserForMe: polling finished.', { pollingResult });
        return pollingResult;
    }
    catch (error) {
        logger.error('fsdata.unblockUserForMe: failed with error', { error, headers: helpers.headers() });
        return { error: error.message };
    }
};
export default unblockUserForMe;
//# sourceMappingURL=unblockUserForMe.js.map