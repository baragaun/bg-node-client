import db from '../../db/db.js';
import { ModelType, MutationType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import { ChannelInvitation } from '../../models/ChannelInvitation.js';
const createChannelInvitation = async (props) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('createChannelInvitation: unavailable');
            return { error: 'unavailable' };
        }
        if (!libData.clientInfoStore().isSignedIn) {
            logger.error('createChannelInvitation: unauthorized');
            return { error: 'unauthorized' };
        }
        const allowNetwork = libData.allowNetwork();
        //------------------------------------------------------------------------------------------------
        // Local cache
        if (!allowNetwork) {
            const response = await db.insert(props, ModelType.ChannelInvitation);
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
        const result = await fsdata.channelInvitation.createChannelInvitation(props);
        if (result.object) {
            result.object = new ChannelInvitation(result.object);
        }
        if (!result.error || result.object) {
            await db.insert(result.object, ModelType.ChannelInvitation);
        }
        return result;
    }
    catch (error) {
        return {
            operation: MutationType.create,
            error: error.message,
        };
    }
};
export default createChannelInvitation;
//# sourceMappingURL=createChannelInvitation.js.map