import * as jetstream from '@nats-io/jetstream';

import libData from '../helpers/libData.js';

/**
 * Consume messages from a stream with a consumer
 * @param streamName Name of the stream
 * @param consumerName Name of the consumer
 * @param options Consumer options
 * @returns ConsumerMessages for iteration
 */
export const consumeStream = async (
  streamName: string,
  consumerName: string,
  options?: {
    max_messages?: number,
    expires?: number,
    idle_heartbeat?: number,
  },
): Promise<jetstream.ConsumerMessages> => {
  const client = libData.natsClient();

  if (!client) {
    throw new Error('not-available');
  }

  const js = await client.getJetStreamClient();
  const consumer = await js.consumers.get(streamName, consumerName);

  return consumer.consume(options);
};
