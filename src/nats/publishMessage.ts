import { JetStreamPublishOptions, PubAck } from '@nats-io/jetstream';
import * as nats from '@nats-io/nats-core';

import libData from '../helpers/libData.js';
import logger from '../helpers/logger.js';
import { BaseNatsPayload } from '../types/eventPayloadTypes.js';

export interface NatsPublishOptions {
  headers?: Record<string, string>;
  msgID?: string;
  timeout?: number;
  expect?: {
    lastMsgID?: string;
    streamName?: string;
    lastSequence?: number;
    lastSubjectSequence?: number;
  };
}

let encoder: TextEncoder;

const publishImpl = async <T extends BaseNatsPayload | string = string>(
  subject: string,
  payload: T | string,
  options?: Partial<NatsPublishOptions>,
): Promise<PubAck> => {
  const client = libData.natsClient();

  if (!client) {
    logger.error('nats.publishMessage: not connected.', { subject, payload, options });
    throw new Error('not-available');
  }

  if (!encoder) {
    encoder = new TextEncoder();
  }

  const jsClient = await client.getJetStreamClient();
  if (!jsClient) {
    logger.error('nats.publishMessage: no JetStream client.', { subject, payload, options });
    throw new Error('not-available');
  }

  const encodedPayload = typeof payload === 'string'
    ? encoder.encode(payload)
    : encoder.encode(JSON.stringify(payload));

  const jsOptions: JetStreamPublishOptions = {
    ...options,
    msgID: options?.msgID || crypto.randomUUID(),
    timeout: options?.timeout || 0,
    headers: options?.headers ? (() : nats.MsgHdrs => {
      const h = nats.headers();
      Object.entries(options.headers).forEach(([key, value]) => h.append(key, value));
      return h;
    })() : nats.headers(),
    expect: {
      lastMsgID: options?.expect?.lastMsgID,
      streamName: options?.expect?.streamName,
      lastSequence: options?.expect?.lastSequence,
      lastSubjectSequence: options?.expect?.lastSubjectSequence,
    },
  };

  const pubAck = await jsClient.publish(subject, encodedPayload, jsOptions);

  logger.debug('nats.publishMessage: message published.', { subject, payload, options, pubAck });

  return pubAck;
};

export const publishMessage = <T extends BaseNatsPayload | string = string>(
  subject: string,
  payload: T | string,
  options?: Partial<NatsPublishOptions>,
  callback?: (error?: Error | null, ack?: PubAck) => void,
): void => {
  publishImpl(subject, payload, options)
    .then((ack) => {
      logger.debug('nats.publishMessage: message published successfully.', {
        subject, payload, options, ack,
      });
      callback?.(null, ack);
    })
    .catch((error) => {
      logger.error('nats.publishMessage: error publishing message.', {
        subject, payload, options, error,
      });
      callback?.(error);
    });
};
