import libData from '../helpers/libData.js';
/**
 * Fetch a batch of messages from a consumer
 * @param streamName Name of the stream
 * @param consumerName Name of the consumer
 * @param options Fetch options
 * @returns ConsumerMessages with the batch
 */
export const fetchMessages = async (streamName, consumerName, options) => {
    const client = libData.natsClient();
    if (!client) {
        throw new Error('not-available');
    }
    const js = await client.getJetStreamClient();
    const consumer = await js.consumers.get(streamName, consumerName);
    return consumer.fetch(options);
};
//# sourceMappingURL=fetchMessages.js.map