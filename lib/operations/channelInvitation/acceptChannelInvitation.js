import db from '../../db/db.js';
import { ChannelInvitationStatus, ModelType, MutationType, UserEventReason, } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import { ChannelInvitation } from '../../models/ChannelInvitation.js';
import natsService from '../../nats/index.js';
const acceptChannelInvitation = async (id) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('acceptChannelInvitation: unavailable');
            return { error: 'unavailable' };
        }
        if (!libData.clientInfoStore().isSignedIn) {
            logger.error('acceptChannelInvitation: unauthorized');
            return { error: 'unauthorized' };
        }
        const allowNetwork = libData.allowNetwork();
        //------------------------------------------------------------------------------------------------
        // Local DB
        if (!allowNetwork) {
            const changes = {
                id,
                status: ChannelInvitationStatus.accepted,
            };
            const response = await db.update(changes, ModelType.ChannelInvitation);
            if (response.object) {
                response.object = new ChannelInvitation(response.object);
                return response;
            }
            return response;
        }
        //------------------------------------------------------------------------------------------------
        // Network
        if (!allowNetwork) {
            return { error: 'offline', operation: MutationType.create };
        }
        const result = await fsdata.channelInvitation.acceptChannelInvitation(id);
        if (!result.error || result.object) {
            await db.insert(result.object, ModelType.ChannelInvitation);
            // Notify the recipient about the accepted invitation:
            natsService.publishUserEvent(result.object.recipientId, {
                channelInvitationId: result.object.id,
                reason: UserEventReason.channelInvitationAccepted,
                data: {
                    channelInvitation: result.object,
                },
                // serviceRequest: queryOptions.serviceRequest,
            }).catch((error) => {
                logger.error('acceptChannelInvitation: Failed to publish NATS message to the sender', {
                    channelMessageId: result.object.id,
                    error: error.message,
                    stack: error.stack,
                });
            });
        }
        return result;
    }
    catch (error) {
        return {
            operation: MutationType.update,
            error: error.message,
        };
    }
};
export default acceptChannelInvitation;
//# sourceMappingURL=acceptChannelInvitation.js.map