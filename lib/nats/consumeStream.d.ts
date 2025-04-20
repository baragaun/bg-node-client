import * as jetstream from '@nats-io/jetstream';
/**
 * Consume messages from a stream with a consumer
 * @param streamName Name of the stream
 * @param consumerName Name of the consumer
 * @param options Consumer options
 * @returns ConsumerMessages for iteration
 */
export declare const consumeStream: (streamName: string, consumerName: string, options?: {
    max_messages?: number;
    expires?: number;
    idle_heartbeat?: number;
}) => Promise<jetstream.ConsumerMessages>;
