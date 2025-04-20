import libData from '../helpers/libData.js';
import logger from '../helpers/logger.js';

export const deleteStream = async (
  streamName: string,
): Promise<boolean> => {
  const client = libData.natsClient();

  if (!client) {
    throw new Error('not-available');
  }

  try {
    logger.debug('nats.deleteStream called.', { streamName });
    const jsm = await client.getJetStreamManager();
    return await jsm.streams.delete(streamName);
  } catch (error) {
    logger.error('Error getting JetStream manager:', { error });
    return false;
  }
};
