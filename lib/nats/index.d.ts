import { SubscriptionOptions } from '@nats-io/nats-core';
declare const natsService: {
    addSubscription: (subject: string, options: SubscriptionOptions) => void;
    buildStreamName: (eventType: import("../enums.js").EventType, objectId: string) => string;
    close: () => Promise<void>;
    consumeStream: (streamName: string, consumerName: string, options?: {
        max_messages?: number;
        expires?: number;
        idle_heartbeat?: number;
    }) => Promise<import("@nats-io/jetstream").ConsumerMessages>;
    createConsumer: (streamName: string, config: import("@nats-io/jetstream").ConsumerConfig) => Promise<import("@nats-io/jetstream").ConsumerInfo>;
    createStream: (config: import("@nats-io/jetstream").StreamConfig, updateExisting?: boolean, errorIfAlreadyExists?: boolean) => Promise<import("@nats-io/jetstream").StreamInfo>;
    deleteConsumer: (streamName: string, consumerName: string) => Promise<boolean>;
    deleteStream: (streamName: string) => Promise<boolean>;
    fetchMessages: (streamName: string, consumerName: string, options?: {
        max_messages?: number;
        expires?: number;
    }) => Promise<import("@nats-io/jetstream").ConsumerMessages>;
    findStreamNameBySubject: (subjectName: string) => Promise<string>;
    getNextMessage: (streamName: string, consumerName: string, options?: {
        expires?: number;
    }) => Promise<import("@nats-io/jetstream").JsMsg>;
    getOrderedConsumer: (streamName: string, options?: Partial<import("@nats-io/jetstream").OrderedConsumerOptions>) => Promise<import("@nats-io/jetstream").Consumer>;
    getStream: (streamName: string) => Promise<import("@nats-io/jetstream").Stream>;
    init: (options: Partial<import("../index.js").NatsOptions>) => Promise<void>;
    publishChannelEvent: (channelId: string, payload: import("../types/eventPayloadTypes.js").ChannelEventPayload) => Promise<import("@nats-io/jetstream").PubAck>;
    publishMessage: <T extends import("../types/eventPayloadTypes.js").BaseNatsPayload | string = string>(subject: string, payload: T | string, options?: Partial<import("./publishMessage.js").NatsPublishOptions>) => Promise<import("@nats-io/jetstream").PubAck>;
    publishUserEvent: (userId: string | null | undefined, payload: import("../types/eventPayloadTypes.js").UserEventPayload) => Promise<import("@nats-io/jetstream").PubAck>;
    subscribeToMyChannelEvents: () => Promise<void>;
};
export default natsService;
