import * as jetstream from '@nats-io/jetstream';
/**
 * Fetch a batch of messages from a consumer
 * @param streamName Name of the stream
 * @param consumerName Name of the consumer
 * @param options Fetch options
 * @returns ConsumerMessages with the batch
 */
export declare const fetchMessages: (streamName: string, consumerName: string, options?: {
    max_messages?: number;
    expires?: number;
}) => Promise<jetstream.ConsumerMessages>;
