import db from '../../../db/db.js';
import { ModelType } from '../../../enums.js';
import logger from '../../../helpers/logger.js';
import { subscribeToChannelEvents } from '../../subscribeToChannelEvents.js';
export const processChannelCreatedEvent = async (payload) => {
    const channel = payload.data?.channel;
    if (!channel) {
        return;
    }
    // Subscribe to events for this channel
    subscribeToChannelEvents(channel.id);
    const result = await db.update(channel, ModelType.Channel);
    if (!result || result.error) {
        logger.error('nats.processChannelCreatedEvent: Failed to add a new Channel in local DB.', { result, channel });
    }
};
//# sourceMappingURL=processChannelCreatedEvent.js.map