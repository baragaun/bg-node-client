import { ChannelInvitationStatus, ModelType } from '../../../enums.js';
import { defaultQueryOptionsForMutations } from '../../../helpers/defaults.js';
import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
import findById from '../findById.js';
import pollForUpdatedObject from '../pollForUpdatedObject.js';
const acceptChannelInvitation = async (channelInvitationId, queryOptions = defaultQueryOptionsForMutations) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('fsdata.acceptChannelInvitation: unavailable');
            return { error: 'unavailable' };
        }
        const client = graffleClientStore.get();
        const args = { channelInvitationId };
        const response = await client.mutation.acceptChannelInvitation({ $: args });
        logger.debug('fsdata.acceptChannelInvitation received response.', { response: JSON.stringify(response) });
        if (Array.isArray(response.errors) && response.errors.length > 0) {
            logger.error('fsdata.acceptChannelInvitation: errors received.', { errorCode: response.errors['0']?.extensions?.code, errors: JSON.stringify(response.errors) });
            return { error: response.errors.map(error => error.message).join(', ') };
        }
        if (response.errors) {
            logger.error('fsdata.acceptChannelInvitation: failed with error.', { error: response.errors });
            return { error: response.errors.map(e => e.message).join(', ') };
        }
        if (!response.data.acceptChannelInvitation) {
            logger.error('fsdata.acceptChannelInvitation: mutation did not return a valid response.');
            return { error: 'system-error' };
        }
        if (!queryOptions.polling) {
            return findById(channelInvitationId, ModelType.ChannelInvitation);
        }
        const isInTargetStateFunc = (ci) => {
            // Check if the ChannelInvitation has been accepted
            return ci.status === ChannelInvitationStatus.accepted;
        };
        if (queryOptions.polling) {
            queryOptions.polling.enabled = true;
            queryOptions.polling.isInTargetStateFunc = isInTargetStateFunc;
        }
        else {
            queryOptions.polling = {
                enabled: true,
                isInTargetStateFunc,
            };
        }
        logger.debug('fsdata.acceptChannelInvitation: starting polling.');
        const pollingResponse = await pollForUpdatedObject(channelInvitationId, ModelType.ChannelInvitation, queryOptions);
        logger.debug('fsdata.acceptChannelInvitation: polling finished.', { pollingResponse });
        return pollingResponse;
    }
    catch (error) {
        logger.error('fsdata.acceptChannelInvitation: error.', { error, headers: helpers.headers() });
        return { error: error.message };
    }
};
export default acceptChannelInvitation;
//# sourceMappingURL=acceptChannelInvitation.js.map