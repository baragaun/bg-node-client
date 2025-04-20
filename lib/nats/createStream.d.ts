import * as jetstream from '@nats-io/jetstream';
export declare const createStream: (config: jetstream.StreamConfig, updateExisting?: boolean, errorIfAlreadyExists?: boolean) => Promise<jetstream.StreamInfo>;
