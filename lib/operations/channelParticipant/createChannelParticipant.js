import db from '../../db/db.js';
import { ModelType, MutationType } from '../../enums.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import { ChannelParticipant } from '../../models/ChannelParticipant.js';
const createChannelParticipant = async (props) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('createChannelParticipant: unavailable');
            return { error: 'unavailable' };
        }
        if (!libData.clientInfoStore().isSignedIn) {
            logger.error('createChannelParticipant: unauthorized');
            return { error: 'unauthorized' };
        }
        const allowNetwork = libData.allowNetwork();
        //------------------------------------------------------------------------------------------------
        // Local DB
        if (!allowNetwork) {
            const response = await db.insert(props, ModelType.ChannelParticipant);
            if (response.object) {
                response.object = new ChannelParticipant(response.object);
                return response;
            }
            return response;
        }
        //------------------------------------------------------------------------------------------------
        // Network
        if (!allowNetwork) {
            return { error: 'offline', operation: MutationType.create };
        }
        return {
            operation: MutationType.create,
            error: 'not-implemented',
        };
        // const result = await fsdata.channelParticipant.createChannelParticipant(props as unknown as ChannelParticipantInput);
        //
        // if (result.object) {
        //   result.object = new ChannelParticipant(result.object);
        // }
        //
        // if (!result.error || result.object) {
        //   await db.insert<ChannelParticipant>(result.object, ModelType.ChannelParticipant);
        // }
        //
        // return result;
    }
    catch (error) {
        return {
            operation: MutationType.create,
            error: error.message,
        };
    }
};
export default createChannelParticipant;
//# sourceMappingURL=createChannelParticipant.js.map