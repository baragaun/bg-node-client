import { Msg } from '@nats-io/nats-core';

import natsStore from './natsStore.js';
import { BgListenerTopic, EventType } from '../enums.js';
import { buildStreamName } from './buildStreamName.js';
import libData from '../helpers/libData.js';
import logger from '../helpers/logger.js';
import { MyUserEventPayload } from '../types/eventPayloadTypes.js';
import { MyUserEventListener } from '../types/MyUserEventListener.js';
import { processMyUserEvent } from './eventProcessors/myUser/processMyUserEvent.js';

const callback = async (error: Error, message: Msg, myUserId: string): Promise<void> => {
  const payload = message.json<MyUserEventPayload>();
  logger.debug('NATS myUser event received.', {
    myUserId,
    error,
    message,
    payload,
  });

  await processMyUserEvent(payload);

  // Notify the app:
  for (const listener of libData.listeners()) {
    if (listener.topic === BgListenerTopic.myUser) {
      const myUserListener = listener as MyUserEventListener;

      if (typeof myUserListener.onEvent === 'function') {
        myUserListener.onEvent(
          payload.reason,
          payload.data,
        );
      }
    }
  }
};

/**
 * Subscribe to MyUser related events.
 */
export const subscribeToMyUserEvents = async (): Promise<void> => {
  const myUserId = libData.clientInfoStore().myUserId;
  const subject = buildStreamName(EventType.myUser, myUserId);

  // Are we already subscribed?
  const existingSubscription = natsStore.getSubscription(subject);
  if (existingSubscription) {
    logger.debug('nats.subscribeToMyUserEvents: already subscribed.',
      { myUserId, subject });
    return;
  }

  natsStore.addSubscription(
    subject,
    {
      callback: (error: Error, message: Msg): void => {
        callback(error, message, myUserId)
          .catch((err) => {
            logger.error('nats.subscribeToMyUserEvents: Error in callback.',
              { err, myUserId, subject });
          });
      },
    },
  );
};
