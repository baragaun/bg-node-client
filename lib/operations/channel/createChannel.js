import db from '../../db/db.js';
import { MutationType } from '../../enums.js';
import { Channel } from '../../types/models/Channel.js';
const createChannel = async (attributes) => {
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