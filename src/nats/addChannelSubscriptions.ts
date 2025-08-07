import { Msg } from '@nats-io/nats-core';

import natsStore from './natsStore.js';
import logger from '../helpers/logger.js';
import { Channel } from '../models/Channel.js';
import { ChannelMessagesNatsPayload } from '../types/ChannelMessagesNatsPayload.js';
import { NatsPayloadModelChanged } from '../types/payloadTypes.js';

const addChannelSubscriptions = (channelId: string): void => {
  const subject1 = `channel.${channelId}.updated`;
  const existingSubscription1 = natsStore.getSubscription(subject1);

  if (existingSubscription1) {
    logger.debug('nats.addChannelSubscriptions: already subscribed.',
      { channelId, subject: subject1 });
  } else {
    natsStore.addSubscription(
      subject1,
      {
        callback: (error: Error, message: Msg): void => {
          const payload = message.json<NatsPayloadModelChanged<Channel>>();

          logger.debug('NATS channel updated event received.', {
            channelId: channelId,
            error,
            message,
            payload,
          });

          // todo: call listeners for channel updates
        },
      },
    );
  }

  const subject2 = `channel.${channelId}.message.updated`;
  const existingSubscription2 = natsStore.getSubscription(subject2);

  if (existingSubscription2) {
    logger.debug('nats.addChannelSubscriptions: already subscribed.',
      { channelId, subject2 });
  } else {
    natsStore.addSubscription(
      subject2,
      {
        callback: (error: Error, message: Msg): void => {
          const payload = message.json<ChannelMessagesNatsPayload>();

          logger.debug('NATS channel messages updated event received.', {
            channelId: channelId,
            error,
            message,
            payload,
          });

          // todo: call listeners for channel messages updates
        },
      },
    );
  }
};

export default addChannelSubscriptions;
