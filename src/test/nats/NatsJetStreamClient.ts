import * as jetstream from "@nats-io/jetstream"
import * as nats from "@nats-io/nats-core";
import { connect, NatsConnection } from "@nats-io/transport-node";

class NatsJetStreamClient {
  private connection: nats.NatsConnection | null = null;
  private js: jetstream.JetStreamClient | null = null;
  private jsm: jetstream.JetStreamManager | null = null;
  private reconnectAttempts = 0;
  private connectionLost = false;

  constructor(private options: nats.ConnectionOptions & {
    reconnect?: boolean;
    maxReconnectAttempts?: number;
    pingInterval?: number;
    timeout?: number;
    reconnectTimeWait?: number;
  } = {}) {
    this.options.reconnect = this.options.reconnect ?? true;
    this.options.maxReconnectAttempts = this.options.maxReconnectAttempts ?? 10;
    this.options.pingInterval = this.options.pingInterval ?? 30000; // 30s
    this.options.timeout = this.options.timeout ?? 20000; // 20s
    this.options.reconnectTimeWait = this.options.reconnectTimeWait ?? 2000; // 2s
  }

  async connect(): Promise<NatsConnection> {
    try {
      // Only connect if not already connected
      if (!this.connection || this.connection.isClosed()) {
        console.log('Not connected or closed connection, attempting to connect.')
        this.connection = await connect({
          ...this.options,
          reconnect: this.options.reconnect,
          maxReconnectAttempts: this.options.maxReconnectAttempts,
          pingInterval: this.options.pingInterval,
          timeout: this.options.timeout,
          reconnectTimeWait: this.options.reconnectTimeWait,
        });
        
        console.log(`Connected to NATS server: ${this.connection.getServer()}`);
        
        // Set up connection closed handler
        this.connection.closed().then(() => {
          // console.log('NATS connection closed');
          this.connectionLost = true;
          this.js = null;
          this.jsm = null;
        });

        this.setupStatusMonitoring();

        // Get JetStream client and manager
        this.js = jetstream.jetstream(this.connection);
        this.jsm = await jetstream.jetstreamManager(this.connection);
        this.connectionLost = false;
      }
      return this.connection;
    } catch (err) {
      console.error('Error connecting to NATS:', err);
      throw err;
    }
  }

  private async ensureConnection(): Promise<void> {
    if (!this.connection) {
      throw new Error('Not connected to NATS');
    }
    
    if (this.connectionLost || this.connection.isClosed()) {
      console.log('Connection lost, attempting to reconnect...');
      await this.connect();
    }
  }

  private setupStatusMonitoring(): void {
    if (!this.connection) return;
    
    (async (): Promise<void>  => {
      for await (const status of this.connection.status()) {
        const type = status.type;
        
        switch (type) {
          case 'reconnect':
            this.reconnectAttempts++;
            console.log(`NATS reconnected successfully: ${this.connection.isClosed()}`);
            console.log(`NATS reconnected successfully2: ${this.isConnected()}`);
            console.log(`NATS reconnect attempt: ${this.reconnectAttempts}`);
            break;
          case 'reconnecting':
            console.log('NATS reconnecting...');
            break;
          case 'update':
            // I don't really know what to expect to find in these `added` or `deleted` arrays yet.
            if (status.added) {
              console.log(`NATS connection update: added ${JSON.stringify(status.added)}`);
            } else {
              console.log(`NATS connection update: deleted ${JSON.stringify(status.deleted)}`);
            }
            break;
          case 'disconnect':
            console.log('NATS disconnected');
            this.connectionLost = true;
            break;
          case 'error':
            console.error('NATS connection error:', status.error);
            break;
        }
      }
    })().catch(err => {
      console.error('Error in status monitoring:', err);
    });
  }

  async getJetStreamClient(): Promise<jetstream.JetStreamClient> {
    try {
      await this.ensureConnection();
      if (!this.js) {
        throw new Error('JetStream client not initialized');
      }
      return this.js;
    } catch (error) {
      console.error('Error getting JetStream client:', error);
      throw error;
    }
  }

  async getJetStreamManager(): Promise<jetstream.JetStreamManager> {
    try {
      await this.ensureConnection();
      if (!this.jsm) {
        throw new Error('JetStream manager not initialized');
      }
      return this.jsm;
    } catch (error) {
      console.error('NatsJetStreamClient.getJetStreamManager.error: ', error)
      throw error;
    }
  }

  async close(): Promise<void> {
    if (this.connection) {
      await this.connection.close();
      console.log('NATS connection closed');
      this.connection = null;
      this.js = null;
      this.jsm = null;
    }
  }

  /** This is intended to be used for testing purposes only */
  isConnected(): boolean {
    return !!this.connection && !this.connection.isClosed() && !this.connectionLost;
  }
}

export default NatsJetStreamClient;