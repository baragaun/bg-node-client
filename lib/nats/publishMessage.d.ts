import { PubAck } from '@nats-io/jetstream';
import { BaseNatsPayload, ChannelEventPayload, UserEventPayload } from '../types/eventPayloadTypes.js';
export interface NatsPublishOptions {
    headers?: Record<string, string>;
    msgID?: string;
    timeout?: number;
    expect?: {
        lastMsgID?: string;
        streamName?: string;
        lastSequence?: number;
        lastSubjectSequence?: number;
    };
}
export declare const publishMessage: <T extends BaseNatsPayload | string = string>(subject: string, payload: T | string, options?: Partial<NatsPublishOptions>) => Promise<PubAck>;
export declare const publishChannelEvent: (channelId: string, payload: ChannelEventPayload) => Promise<PubAck>;
export declare const publishUserEvent: (userId: string | null | undefined, payload: UserEventPayload) => Promise<PubAck>;
