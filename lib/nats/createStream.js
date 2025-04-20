import * as jetstream from '@nats-io/jetstream';
import libData from '../helpers/libData.js';
import logger from '../helpers/logger.js';
export const createStream = async (config, updateExisting = true, errorIfAlreadyExists = false) => {
    const client = libData.natsClient();
    if (!client) {
        logger.error('nats.createStream: not connected.');
        throw new Error('not-available');
    }
    let streamInfo;
    const jsm = await client.getJetStreamManager();
    // Try to find the existing Stream:
    try {
        streamInfo = await jsm.streams.info(config.name);
    }
    catch (error) {
        if (error.code !== jetstream.JetStreamApiCodes.StreamNotFound) {
            logger.error('nats.createStream: failed to get stream info', { config, error });
            throw error;
        }
    }
    if (streamInfo) {
        if (errorIfAlreadyExists) {
            logger.error('nats.createStream: already exists', { config, streamInfo });
            throw new Error('already-exists');
        }
        if (!updateExisting) {
            return streamInfo;
        }
        // Attempt to update the stream:
        try {
            streamInfo = await jsm.streams.update(config.name, config);
            logger.debug('nats.createStream: updated existing stream', { config, streamInfo });
        }
        catch (error) {
            logger.error('nats.createStream: failed to update existing stream.', { config, error });
            await jsm.streams.delete(config.name);
            return createStream(config, false, true);
        }
    }
    streamInfo = await jsm.streams.add(config);
    if (!streamInfo) {
        logger.error('nats.createStream: failed to create stream', { config });
        throw new Error('system-error');
    }
    if (streamInfo.config.name !== config.name) {
        logger.error('nats.createStream: name mismatch.', { config, streamInfo });
        throw new Error('system-error');
    }
    logger.debug('nats.createStream: successfully created stream.', { config });
    return streamInfo;
};
//# sourceMappingURL=createStream.js.map