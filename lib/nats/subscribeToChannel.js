import natsStore from './natsStore.js';
import logger from '../helpers/logger.js';
const subscribeToChannel = (channelId) => {
    const subject1 = `channel.${channelId}.updated`;
    const existingSubscription1 = natsStore.getSubscription(subject1);
    if (existingSubscription1) {
        logger.debug('nats.subscribeToChannel: already subscribed.', { channelId, subject: subject1 });
    }
    else {
        natsStore.addSubscription(subject1, {
            callback: (error, message) => {
                const payload = message.json();
                logger.debug('NATS channel updated event received.', {
                    channelId: channelId,
                    error,
                    message,
                    payload,
                });
                // todo: call listeners for channel updates
            },
        });
    }
    const subject2 = `channel.${channelId}.message.updated`;
    const existingSubscription2 = natsStore.getSubscription(subject2);
    if (existingSubscription2) {
        logger.debug('nats.subscribeToChannel: already subscribed.', { channelId, subject2 });
    }
    else {
        natsStore.addSubscription(subject2, {
            callback: (error, message) => {
                const payload = message.json();
                logger.debug('NATS channel messages updated event received.', {
                    channelId: channelId,
                    error,
                    message,
                    payload,
                });
                // todo: call listeners for channel messages updates
            },
        });
    }
};
export default subscribeToChannel;
//# sourceMappingURL=subscribeToChannel.js.map