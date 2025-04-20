import libData from '../helpers/libData.js';

export const deleteConsumer = async (
  streamName: string,
  consumerName: string,
): Promise<boolean> => {
  const client = libData.natsClient();

  if (!client) {
    throw new Error('not-available');
  }

  const jsm = await client.getJetStreamManager();
  return jsm.consumers.delete(streamName, consumerName);
};
