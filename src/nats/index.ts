import { SubscriptionOptions } from '@nats-io/nats-core';

import addChannelSubscriptions from './addChannelSubscriptions.js';
import close from './close.js';
import { consumeStream } from './consumeStream.js';
import { createConsumer } from './createConsumer.js';
import { createStream } from './createStream.js';
import { deleteConsumer } from './deleteConsumer.js';
import { deleteStream } from './deleteStream.js';
import { fetchMessages } from './fetchMessages.js';
import { findStreamNameBySubject } from './findStreamNameBySubject.js';
import { getNextMessage } from './getNextMessage.js';
import { getOrderedConsumer } from './getOrderedConsumer.js';
import { getStream } from './getStream.js';
import init from './init.js';
import natsStore from './natsStore.js';
import { publishMessage } from './publishMessage.js';

const natsService = {
  addChannelSubscriptions,

  addSubscription: (subject: string, options: SubscriptionOptions) => {
    natsStore.addSubscription(subject, options);
  },

  close,
  consumeStream,
  createConsumer,
  createStream,
  deleteConsumer,
  deleteStream,
  fetchMessages,
  findStreamNameBySubject,
  getNextMessage,
  getOrderedConsumer,
  getStream,
  init,
  publishMessage,
};

export default natsService;
