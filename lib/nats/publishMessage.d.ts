import { PubAck } from '@nats-io/jetstream';
import { BaseNatsPayload } from '../types/payloadTypes.js';
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
export declare const publishMessage: <T extends BaseNatsPayload | string = string>(subject: string, payload: T | string, options?: Partial<NatsPublishOptions>, callback?: (error?: Error | null, ack?: PubAck) => void) => void;
