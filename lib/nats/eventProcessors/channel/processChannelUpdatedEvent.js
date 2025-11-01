import db from '../../../db/db.js';
import { ModelType } from '../../../enums.js';
import logger from '../../../helpers/logger.js';
export const processChannelUpdatedEvent = async (payload) => {
    const updatedChannel = payload.data?.channel;
    if (!updatedChannel) {
        return;
    }
    const result = await db.update(updatedChannel, ModelType.Channel);
    if (!result || result.error) {
        logger.error('nats.processChannelUpdatedEvent: Failed to update Channel in local DB.', { result, updatedChannel });
    }
};
//# sourceMappingURL=processChannelUpdatedEvent.js.map