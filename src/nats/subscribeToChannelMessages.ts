import { Msg } from '@nats-io/nats-core';

import natsStore from './natsStore.js';
// import db from '../db/db.js';
import { BgListenerTopic } from '../enums.js';
import streamNames from './streamNames.js';
import libData from '../helpers/libData.js';
import logger from '../helpers/logger.js';
import { ChannelMessage } from '../models/ChannelMessage.js';
import { BgChannelDataListener } from '../types/BgChannelListener.js';
import { NatsPayloadModelChanged } from '../types/payloadTypes.js';

const subscribeToChannelMessages = (channelId: string): void => {
  const subject = streamNames(channelId).channelMessages;
  const existingSubscription = natsStore.getSubscription(subject);
  // const myUserId = libData.clientInfoStore().myUserId;

  if (existingSubscription) {
    logger.debug('nats.subscribeToChannelMessages: already subscribed.',
      { channelId, subject2: subject });
  } else {
    natsStore.addSubscription(
      subject,
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
                  object: payload.object,
                });
                // Update local DB
                // if(payload.object.createdBy !== myUserId) { //
                //   db.insert(payload.object, ModelType.ChannelMessage);
                // }
              }

              if (
                payload.changeType === 'deleted' &&
                typeof (listener as BgChannelDataListener).onChannelMessageDeleted === 'function'
              ) {
                (listener as BgChannelDataListener).onChannelMessageDeleted({
                  object: payload.object,
                });
                // Remove from local DB
                // db.delete(payload.object.id, ModelType.ChannelMessage);
              }

              if (
                payload.changeType === 'updated' &&
                typeof (listener as BgChannelDataListener).onChannelMessageUpdated === 'function'
              ) {
                (listener as BgChannelDataListener).onChannelMessageUpdated({
                  object: payload.object,
                });
                // Update local DB
                // db.upsert(payload.object, ModelType.ChannelMessage);
              }
            }
          }
        },
      },
    );
  }
};

export default subscribeToChannelMessages;
