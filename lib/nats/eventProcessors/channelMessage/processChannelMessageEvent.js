import { processChannelMessageUpdatedEvent } from './processChannelMessageUpdatedEvent.js';
import { ChannelMessageEventReason } from '../../../enums.js';
import logger from '../../../helpers/logger.js';
const processors = {
    [ChannelMessageEventReason.created]: undefined,
    [ChannelMessageEventReason.deleted]: undefined,
    [ChannelMessageEventReason.seen]: undefined,
    [ChannelMessageEventReason.updated]: processChannelMessageUpdatedEvent,
};
export const processChannelMessageEvent = async (payload) => {
    const processor = processors[payload.reason];
    if (typeof processor !== 'function') {
        logger.debug('processChannelMessageEvent: No processor for this Channel message event reason.', { reason: payload.reason });
        return;
    }
    return processor(payload);
};
//# sourceMappingURL=processChannelMessageEvent.js.map