import db from '../../db/db.js';
import { MutationType } from '../../enums.js';
import libData from '../../helpers/libData.js';
import { Channel } from '../../models/Channel.js';
const createChannel = async (attributes) => {
    if (!libData.isInitialized()) {
        throw new Error('not-initialized');
    }
    try {
        const channel = new Channel(attributes);
        return db.insert(channel);
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