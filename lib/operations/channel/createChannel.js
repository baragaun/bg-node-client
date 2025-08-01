import db from '../../db/db.js';
import { ModelType, MutationType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import { Channel } from '../../models/Channel.js';
const createChannel = async (props) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('createChannel: unavailable');
            return { error: 'unavailable' };
        }
        if (!libData.clientInfoStore().isSignedIn) {
            logger.error('createChannel: unauthorized');
            return { error: 'unauthorized' };
        }
        const allowNetwork = libData.allowNetwork();
        if (!props) {
            return { error: 'missing-input', operation: MutationType.create };
        }
        if (!props.createdBy) {
            props.createdBy = libData.clientInfoStore().myUserId;
        }
        if (!Array.isArray(props.userIds) || props.userIds.length < 1) {
            props.userIds = [props.createdBy];
        }
        if (!props.otherUserId &&
            Array.isArray(props.userIds) &&
            props.userIds.length > 1) {
            props.otherUserId = props.userIds.find((id) => id !== props.createdBy);
        }
        //------------------------------------------------------------------------------------------------
        // Local DB
        if (!allowNetwork) {
            const response = await db.insert(props, ModelType.Channel);
            if (response.object) {
                response.object = new Channel(response.object);
                return response;
            }
            return response;
        }
        //------------------------------------------------------------------------------------------------
        // Network
        if (!allowNetwork) {
            return { error: 'offline', operation: MutationType.create };
        }
        const result = await fsdata.channel.createChannel(props);
        if (result.object) {
            result.object = new Channel(result.object);
        }
        if (!result.error || result.object) {
            await db.insert(result.object, ModelType.Channel);
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
export default createChannel;
//# sourceMappingURL=createChannel.js.map