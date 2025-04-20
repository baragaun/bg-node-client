import * as jetstream from '@nats-io/jetstream';

import libData from '../helpers/libData.js';

export const getStream = async (
  streamName: string,
): Promise<jetstream.Stream> => {
  const client = libData.natsClient();

  if (!client) {
    throw new Error('not-available');
  }

  const jsm = await client.getJetStreamManager();

  return await jsm.streams.get(streamName);
};
