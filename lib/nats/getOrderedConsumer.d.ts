import { Consumer, OrderedConsumerOptions } from '@nats-io/jetstream';
export declare const getOrderedConsumer: (streamName: string, options?: Partial<OrderedConsumerOptions>) => Promise<Consumer>;
