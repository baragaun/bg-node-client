export interface NatsOptions {
    name: string;
    servers: string[];
    timeout: number;
    reconnectTimeWait: number;
    reconnect: boolean;
    maxReconnectAttempts: number;
    pingInterval: number;
}
