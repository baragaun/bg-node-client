import * as jetstream from '@nats-io/jetstream';
import * as nats from '@nats-io/nats-core';
import { NatsConnection } from '@nats-io/transport-node';
import { NatsOptions } from '../types/NatsOptions.js';
export declare class NatsClient {
    private options;
    private connection;
    private js;
    private jsm;
    private reconnectAttempts;
    private connectionLost;
    constructor(options?: Partial<nats.ConnectionOptions & NatsOptions>);
    connect(): Promise<NatsConnection>;
    getJetStreamClient(): Promise<jetstream.JetStreamClient>;
    getJetStreamManager(): Promise<jetstream.JetStreamManager>;
    close(): Promise<void>;
    get isConnected(): boolean;
    getConnection(): nats.NatsConnection | null;
    private ensureConnection;
    private processStatus;
    private startMonitoring;
}
