import { Subscription, SubscriptionOptions } from '@nats-io/nats-core';

import { NatsStore } from './types.js';
import libData from '../helpers/libData.js';

const subscriptions = new Map<string, Subscription>();

const addSubscription = (
  subject: string,
  options: SubscriptionOptions,
): Subscription => {
  const client = libData.natsClient();
  const connection = client.getConnection();

  if (!connection) {
    throw new Error('NATS connection not available');
  }

  const sub = connection.subscribe(subject, options);

  subscriptions.set(subject, sub);

  return sub;
};

const natsStore: NatsStore = {
  addSubscription,
  getSubscription: (subject: string): Subscription | undefined => {
    return subscriptions.get(subject);
  },
  subscriptions,
};

export default natsStore;
