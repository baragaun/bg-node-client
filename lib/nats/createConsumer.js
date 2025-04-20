import libData from '../helpers/libData.js';
export const createConsumer = async (streamName, config) => {
    const client = libData.natsClient();
    if (!client) {
        throw new Error('not-available');
    }
    const jsm = await client.getJetStreamManager();
    return jsm.consumers.add(streamName, config);
};
//# sourceMappingURL=createConsumer.js.map