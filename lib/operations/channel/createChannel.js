import db from '../../db/db.js';
import { ModelType, MutationType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
const createChannel = async (props) => {
    if (!libData.isInitialized()) {
        logger.error('createChannel: unavailable');
        return { error: 'unavailable' };
    }
    if (!libData.clientInfoStore().isSignedIn) {
        logger.error('createChannel: unauthorized');
        return { error: 'unauthorized' };
    }
    try {
        const result = await fsdata.channel.createChannel(props);
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