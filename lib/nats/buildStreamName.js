import { EventType } from '../enums.js';
import logger from '../helpers/logger.js';
export const buildStreamName = (eventType, objectId) => {
    if ((eventType === EventType.channel || eventType === EventType.user || eventType === EventType.user) &&
        !objectId) {
        logger.error('nats.streamNames: objectId is required');
        throw new Error('objectId is required');
    }
    switch (eventType) {
        case EventType.channel:
            return `first.spark.dev.channel.${objectId}`;
        case EventType.user:
            return `first.spark.dev.user.${objectId}`;
        default:
            logger.error(`nats.buildStreamName: Unsupported eventType ${eventType}`);
            throw new Error(`Unsupported eventType ${eventType}`);
    }
};
//# sourceMappingURL=buildStreamName.js.map