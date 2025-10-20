import * as jetstream from '@nats-io/jetstream';
import libData from '../helpers/libData.js';
import logger from '../helpers/logger.js';
export const deleteStream = async (streamName) => {
    const client = libData.natsClient();
    if (!client) {
        throw new Error('not-available');
    }
    try {
        logger.debug('nats.deleteStream called.', { streamName });
        const jsm = await client.getJetStreamManager();
        return await jsm.streams.delete(streamName);
    }
    catch (error) {
        if (error.code === jetstream.JetStreamApiCodes.StreamNotFound) {
            logger.debug('nats.deleteStream: stream not found', { streamName });
            return false;
        }
        logger.error('Error deleting jetstream:', { error });
        return false;
    }
};
//# sourceMappingURL=deleteStream.js.map