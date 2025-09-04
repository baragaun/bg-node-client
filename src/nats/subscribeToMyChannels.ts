import { Msg } from '@nats-io/nats-core';

import natsStore from './natsStore.js';
// import db from '../db/db.js';
import { BgListenerTopic } from '../enums.js';
import libData from '../helpers/libData.js';
import logger from '../helpers/logger.js';
import { BgChannelDataListener } from '../types/BgChannelListener.js';
import { ChannelListItem } from '../types/ChannelListItem.js';
import { NatsPayloadModelChanged } from '../types/payloadTypes.js';

const subscribeToMyChannels = (): void => {
  const subject = 'first.spark.dev.channels';
  const existingSubscription = natsStore.getSubscription(subject);
  const myUserId = libData.clientInfoStore().myUserId;

  if (existingSubscription) {
    logger.debug('nats.subscribeToMyChannels: already subscribed.',
      { channelId: myUserId, subject: subject });
  } else {
    natsStore.addSubscription(
      subject,
      {
        callback: (error: Error, message: Msg): void => {
          const payload = message.json<NatsPayloadModelChanged<ChannelListItem>>();

          logger.debug('NATS channel updated event received.', {
            userId: myUserId,
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
                if (payload.object.userIds.includes(myUserId)) {
                  (listener as BgChannelDataListener).onChannelCreated({
                    object: payload.object,
                  });
                  // Update local DB
                  // db.insert(payload.object, ModelType.ChannelListItem);
                }
              }

              if (
                payload.changeType === 'deleted' &&
                typeof (listener as BgChannelDataListener).onChannelDeleted === 'function'
              ) {
                if (payload.object.userIds.includes(myUserId)) {
                  (listener as BgChannelDataListener).onChannelDeleted({
                    object: payload.object,
                  });
                  // Remove from local DB
                  // db.delete(payload.object.id, ModelType.ChannelListItem);
                }
              }

              if (
                payload.changeType === 'updated' &&
                typeof (listener as BgChannelDataListener).onChannelUpdated === 'function'
              ) {
                if (payload.object.userIds.includes(myUserId)) {
                  (listener as BgChannelDataListener).onChannelUpdated({
                    object: payload.object,
                  });
                  // Update local DB
                  // db.update(payload.object, ModelType.ChannelListItem);
                }
              }
            }
          }
        },
      },
    );
  }
};

export default subscribeToMyChannels;
