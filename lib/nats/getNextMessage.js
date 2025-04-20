import libData from '../helpers/libData.js';
/**
 * Get the next message from a consumer
 * @param streamName Name of the stream
 * @param consumerName Name of the consumer
 * @param options Next options
 * @returns Promise that resolves with a message or null
 */
export const getNextMessage = async (streamName, consumerName, options) => {
    const client = libData.natsClient();
    if (!client) {
        throw new Error('not-available');
    }
    const js = await client.getJetStreamClient();
    const consumer = await js.consumers.get(streamName, consumerName);
    return consumer.next(options);
};
//# sourceMappingURL=getNextMessage.js.map