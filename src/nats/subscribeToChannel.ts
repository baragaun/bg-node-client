import { Msg } from '@nats-io/nats-core';

import natsStore from './natsStore.js';
import { BgListenerTopic } from '../enums.js';
import libData from '../helpers/libData.js';
import logger from '../helpers/logger.js';
import { Channel } from '../models/Channel.js';
import { ChannelMessage } from '../models/ChannelMessage.js';
import { BgChannelDataListener } from '../types/BgChannelListener.js';
import { NatsPayloadModelChanged } from '../types/payloadTypes.js';

const subscribeToChannel = (channelId: string): void => {
  const subject1 = `first.spark.dev.channel.${channelId}`;
  const existingSubscription1 = natsStore.getSubscription(subject1);

  if (existingSubscription1) {
    logger.debug('nats.subscribeToChannel: already subscribed.',
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

          for (const listener of libData.listeners()) {
            if (listener.topic === BgListenerTopic.channel) {
              if (
                payload.changeType === 'created' &&
                typeof (listener as BgChannelDataListener).onChannelCreated === 'function'
              ) {
                (listener as BgChannelDataListener).onChannelCreated({
                  object: payload.object,
                });
              }

              if (
                payload.changeType === 'deleted' &&
                typeof (listener as BgChannelDataListener).onChannelDeleted === 'function'
              ) {
                (listener as BgChannelDataListener).onChannelDeleted({
                  object: payload.object,
                });
              }

              if (
                payload.changeType === 'updated' &&
                typeof (listener as BgChannelDataListener).onChannelUpdated === 'function'
              ) {
                (listener as BgChannelDataListener).onChannelUpdated({
                  object: payload.object,
                });
              }
            }
          }
        },
      },
    );
  }

  const subject2 = `first.spark.dev.channel.${channelId}.messages`;
  const existingSubscription2 = natsStore.getSubscription(subject2);

  if (existingSubscription2) {
    logger.debug('nats.subscribeToChannel: already subscribed.',
      { channelId, subject2 });
  } else {
    natsStore.addSubscription(
      subject2,
      {
        callback: (error: Error, message: Msg): void => {
          const payload = message.json<NatsPayloadModelChanged<ChannelMessage>>();

          logger.debug('NATS channel messages updated event received.', {
            channelId: channelId,
            error,
            message,
            payload,
          });

          for (const listener of libData.listeners()) {
            if (listener.topic === BgListenerTopic.channelMessage) {
              if (
                payload.changeType === 'created' &&
                typeof (listener as BgChannelDataListener).onChannelMessageCreated === 'function'
              ) {
                (listener as BgChannelDataListener).onChannelMessageCreated({
                  object: payload.object, // adjust as needed
                });
              }

              if (
                payload.changeType === 'deleted' &&
                typeof (listener as BgChannelDataListener).onChannelMessageDeleted === 'function'
              ) {
                (listener as BgChannelDataListener).onChannelMessageDeleted({
                  object: payload.object,
                });
              }

              if (
                payload.changeType === 'updated' &&
                typeof (listener as BgChannelDataListener).onChannelMessageUpdated === 'function'
              ) {
                (listener as BgChannelDataListener).onChannelMessageUpdated({
                  object: payload.object,
                });
              }
            }
          }
        },
      },
    );
  }
};

export default subscribeToChannel;
