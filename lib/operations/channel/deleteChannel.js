import { ModelType, UserEventReason } from '../../enums.js';
import { defaultQueryOptionsForMutations } from '../../helpers/defaults.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import natsService from '../../nats/index.js';
import deleteFnc from '../delete.js';
import findById from '../findById.js';
const deleteChannel = async (id, deletePhysically, queryOptions = defaultQueryOptionsForMutations) => {
    if (!libData.isInitialized()) {
        logger.error('fsdata.deleteMyUser: unavailable');
        return { error: 'unavailable' };
    }
    const channelResult = await findById(id, ModelType.Channel, queryOptions);
    const result = await deleteFnc(id, ModelType.Channel, deletePhysically, queryOptions);
    if (result.error || channelResult.error || !channelResult.object) {
        // Can't notify other participants.
        return result;
    }
    const channel = channelResult.object;
    const clientInfo = libData.clientInfoStore().clientInfo;
    const myUserId = clientInfo.myUserId;
    // Notifying other participants of this channel.
    const otherUsersIds = channel.userIds.filter(id => id !== myUserId);
    for (const otherUserId of otherUsersIds) {
        natsService.publishUserEvent(otherUserId, {
            channelId: channel.id,
            reason: UserEventReason.channelDeleted,
            data: {
                channel,
            },
            // serviceRequest: queryOptions.serviceRequest,
        }).catch((error) => {
            logger.error('deleteChannel: Failed to publish NATS message to other participants', {
                channelMessageId: channel.id,
                error: error.message,
                stack: error.stack,
            });
        });
    }
    return result;
};
export default deleteChannel;
//# sourceMappingURL=deleteChannel.js.map