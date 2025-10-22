import db from '../../../db/db.js';
import { ModelType } from '../../../enums.js';
import logger from '../../../helpers/logger.js';
export const processChannelMessageUpdatedEvent = async (payload) => {
    const updatedChannelMessage = payload.data?.channelMessage;
    if (!updatedChannelMessage) {
        return;
    }
    const result = await db.update(updatedChannelMessage, ModelType.ChannelMessage);
    if (!result || result.error) {
        logger.error('nats.processChannelMessageUpdatedEvent: Failed to update ChannelMessage in local DB.', { result, updatedChannelMessage });
    }
};
//# sourceMappingURL=processChannelMessageUpdatedEvent.js.map