import * as jetstream from '@nats-io/jetstream';
import * as nats from '@nats-io/nats-core';
import { connect, NatsConnection } from '@nats-io/transport-node';
import { randomUUID } from 'crypto';

import libData from '../helpers/libData.js';
import logger from '../helpers/logger.js';
import { NatsOptions } from '../types/NatsOptions.js';

const DEFAULT_OPTIONS: NatsOptions = {
  name: '',
  servers: [],
  pingInterval: 30000,
  timeout: 20000,
  reconnect: true,
  reconnectTimeWait: 2000,
  maxReconnectAttempts: 10,
};

export class NatsClient {
  private options: nats.ConnectionOptions & NatsOptions;
  private connection: nats.NatsConnection | null = null;
  private js: jetstream.JetStreamClient | null = null;
  private jsm: jetstream.JetStreamManager | null = null;
  private reconnectAttempts = 0;
  private connectionLost = false;

  constructor(options: Partial<nats.ConnectionOptions & NatsOptions> = DEFAULT_OPTIONS) {
    this.options = Object.assign({}, DEFAULT_OPTIONS, options);
  }

  public async connect(): Promise<NatsConnection> {
    if (this.connection && !this.connection.isClosed()) {
      logger.debug('NatsJetStreamClient.connect: already connected.');
      return this.connection;
    }

    logger.debug('NatsJetStreamClient.connect called.');
    const config = libData.getConfig();

    if (!this.options.name) {
      this.options.name = config?.clientInfoStore?.myUserDeviceUuid || randomUUID();
    }

    this.connection = await connect(this.options);

    logger.debug(`Connected to NATS server: ${this.connection.getServer()}`);

    // Set up connection closed handler
    this.connection.closed().then(() => {
      logger.debug('NATS connection closed');
      this.connectionLost = true;
      // this.connection = null;
      this.js = null;
      this.jsm = null;
    });

    this.startMonitoring();

    // Get JetStream client and manager
    this.js = jetstream.jetstream(this.connection);
    this.jsm = await jetstream.jetstreamManager(this.connection);
    this.connectionLost = false;
    return this.connection;
  }

  public async getJetStreamClient(): Promise<jetstream.JetStreamClient> {
    await this.ensureConnection();

    if (!this.js) {
      throw new Error('JetStream client not initialized');
    }

    return this.js;
  }

  public async getJetStreamManager(): Promise<jetstream.JetStreamManager> {
    await this.ensureConnection();

    if (!this.jsm) {
      throw new Error('JetStream manager not initialized');
    }

    return this.jsm;
  }

  async close(): Promise<void> {
    if (this.connection) {
      await this.connection.close();
    }

    this.connection = null;
    this.js = null;
    this.jsm = null;

    logger.debug('NATS connection closed');
  }

  public get isConnected(): boolean {
    return !!this.connection && !this.connection.isClosed() && !this.connectionLost;
  }

  // -----------------------------------------------------------------------------------------------
  // Private methods
  private async ensureConnection(): Promise<void> {
    if (!this.connection) {
      throw new Error('Not connected to NATS');
    }

    if (this.connectionLost || this.connection.isClosed()) {
      logger.debug('Connection lost, attempting to reconnect...');
      await this.connect();
    }
  }

  private startMonitoring(): void {
    if (!this.isConnected) {
      return;
    }

    (async (): Promise<void>  => {
      for await (const status of this.connection.status()) {
        const type = status.type;

        switch (type) {
          case 'reconnect':
            this.reconnectAttempts++;
            logger.debug(`NATS reconnected successfully: ${this.connection.isClosed()}`);
            logger.debug(`NATS reconnected successfully2: ${this.isConnected}`);
            logger.debug(`NATS reconnect attempt: ${this.reconnectAttempts}`);
            break;
          case 'reconnecting':
            logger.debug('NATS reconnecting...');
            break;
          case 'update':
            // I don't really know what to expect to find in these `added` or `deleted` arrays yet.
            if (status.added) {
              logger.debug(`NATS connection update: added ${JSON.stringify(status.added)}`);
            } else {
              logger.debug(`NATS connection update: deleted ${JSON.stringify(status.deleted)}`);
            }
            break;
          case 'disconnect':
            logger.debug('NATS disconnected');
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
}
