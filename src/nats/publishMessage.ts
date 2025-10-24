import { JetStreamPublishOptions, PubAck } from '@nats-io/jetstream';
import * as nats from '@nats-io/nats-core';

import { EventType } from '../enums.js';
import { buildStreamName } from './buildStreamName.js';
import libData from '../helpers/libData.js';
import logger from '../helpers/logger.js';
import {
  BaseNatsPayload,
  ChannelEventPayload,
  UserEventPayload,
} from '../types/eventPayloadTypes.js';

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

export const publishMessage = async <T extends BaseNatsPayload | string = string>(
  subject: string,
  payload: T | string,
  options?: Partial<NatsPublishOptions>,
): Promise<PubAck> => {
  try {
    const result = await publishImpl(subject, payload, options);

    console.log('nats.publishMessage: message published successfully.', {
      subject, payload, options, result,
    });

    return result;
  } catch (error) {
    console.log('nats.publishMessage: exception publishing message.', {
      subject, payload, options, error,
    });

    throw error;
  }
};

export const publishChannelEvent = async (
  channelId: string,
  payload: ChannelEventPayload,
): Promise<PubAck> => {
  const subject = buildStreamName(EventType.channel, channelId);

  return publishMessage(subject, payload, { timeout: 5000 });
};

export const publishUserEvent = async (
  userId: string | null | undefined,
  payload: UserEventPayload,
): Promise<PubAck> => {
  if (!userId) {
    if (!libData.isInitialized()) {
      logger.error('nats.publishUserEvent: unavailable');
      throw new Error('unavailable');
    }

    const clientInfo = libData.clientInfoStore().clientInfo;
    userId = clientInfo.myUserId;
  }
  const subject = buildStreamName(EventType.user, userId);

  return publishMessage(subject, payload, { timeout: 5000 });
};
