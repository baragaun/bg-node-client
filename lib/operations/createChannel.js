import { Channel } from '../types/models/Channel.js';
import { MutationType } from '../types/enums.js';
import db from '../db/db.js';
const createChannel = async (attributes) => {
    try {
        const channel = new Channel(attributes);
        const newChannel = await db.insert(channel);
        return {
            operation: MutationType.create,
            object: newChannel,
        };
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