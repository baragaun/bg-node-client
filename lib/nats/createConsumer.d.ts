import { ConsumerConfig, ConsumerInfo } from '@nats-io/jetstream';
export declare const createConsumer: (streamName: string, config: ConsumerConfig) => Promise<ConsumerInfo>;
