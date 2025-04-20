import * as jetstream from '@nats-io/jetstream';
/**
 * Get the next message from a consumer
 * @param streamName Name of the stream
 * @param consumerName Name of the consumer
 * @param options Next options
 * @returns Promise that resolves with a message or null
 */
export declare const getNextMessage: (streamName: string, consumerName: string, options?: {
    expires?: number;
}) => Promise<jetstream.JsMsg>;
