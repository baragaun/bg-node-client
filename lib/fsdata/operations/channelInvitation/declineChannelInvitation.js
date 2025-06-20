import { ChannelInvitationStatus, ModelType, } from '../../../enums.js';
import { defaultQueryOptionsForMutations } from '../../../helpers/defaults.js';
import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
import findById from '../findById.js';
import pollForUpdatedObject from '../pollForUpdatedObject.js';
const declineChannelInvitation = async (channelInvitationId, reasonTextId, queryOptions = defaultQueryOptionsForMutations) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('fsdata.declineChannelInvitation: unavailable');
            return { error: 'unavailable' };
        }
        const client = graffleClientStore.get();
        const args = {
            id: channelInvitationId,
            reasonTextId: reasonTextId,
        };
        const response = await client.mutation.declineChannelInvitation({ $: args });
        logger.debug('fsdata.declineChannelInvitation response:', { response });
        if (response.errors) {
            logger.error('fsdata.declineChannelInvitation: failed with error', { error: response.errors });
            return { error: response.errors.map(e => e.message).join(', ') };
        }
        if (!response.data.declineChannelInvitation) {
            logger.error('fsdata.declineChannelInvitation: mutation did not return a valid response.');
            return { error: 'system-error' };
        }
        if (!queryOptions.polling) {
            return findById(channelInvitationId, ModelType.ChannelInvitation);
        }
        const isInTargetStateFunc = (ci) => {
            // Check if the ChannelInvitation has been declineed
            return ci.status === ChannelInvitationStatus.declined;
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
        logger.debug('fsdata.declineChannelInvitation: starting polling.');
        const pollingResponse = await pollForUpdatedObject(channelInvitationId, ModelType.ChannelInvitation, queryOptions);
        logger.debug('fsdata.declineChannelInvitation: polling finished.', { pollingResponse });
        return pollingResponse;
    }
    catch (error) {
        logger.error('fsdata.declineChannelInvitation: failed', { error, headers: helpers.headers() });
        return { error: error.message };
    }
};
export default declineChannelInvitation;
//# sourceMappingURL=declineChannelInvitation.js.map