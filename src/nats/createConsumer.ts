import { ConsumerConfig, ConsumerInfo } from '@nats-io/jetstream';

import libData from '../helpers/libData.js';

export const createConsumer = async (
  streamName: string,
  config: ConsumerConfig,
): Promise<ConsumerInfo> => {
  const client = libData.natsClient();

  if (!client) {
    throw new Error('not-available');
  }

  const jsm = await client.getJetStreamManager();
  return jsm.consumers.add(streamName, config);
};
