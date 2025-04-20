import * as jetstream from '@nats-io/jetstream';
export declare const getStream: (streamName: string) => Promise<jetstream.Stream>;
