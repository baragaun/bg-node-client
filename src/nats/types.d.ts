import { Subscription, SubscriptionOptions } from '@nats-io/nats-core';

export interface NatsStore {
  addSubscription: (subject: string, options: SubscriptionOptions) => Subscription;
  getSubscription: (subject: string) => Subscription | undefined;
  subscriptions: Map<string, Subscription>;
}
