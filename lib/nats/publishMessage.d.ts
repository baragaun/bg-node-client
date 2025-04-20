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
export declare const publishMessage: (subject: string, data: any, options?: NatsPublishOptions) => Promise<string>;
