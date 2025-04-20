import libData from '../helpers/libData.js';
export const getOrderedConsumer = async (streamName, options) => {
    const client = libData.natsClient();
    if (!client) {
        throw new Error('not-available');
    }
    const js = await client.getJetStreamClient();
    // No consumer name is specified for ordered consumers
    return js.consumers.get(streamName, options);
};
//# sourceMappingURL=getOrderedConsumer.js.map