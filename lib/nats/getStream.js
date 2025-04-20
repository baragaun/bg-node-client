import libData from '../helpers/libData.js';
export const getStream = async (streamName) => {
    const client = libData.natsClient();
    if (!client) {
        throw new Error('not-available');
    }
    const jsm = await client.getJetStreamManager();
    return await jsm.streams.get(streamName);
};
//# sourceMappingURL=getStream.js.map