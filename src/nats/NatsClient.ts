import * as jetstream from '@nats-io/jetstream';
import * as nats from '@nats-io/nats-core';
import { connect, NatsConnection } from '@nats-io/transport-node';

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
      this.options.name = config?.clientInfoStore?.myUserDeviceUuid || crypto.randomUUID();
    }

    this.connection = await connect(this.options);

    logger.debug('NatsJetStreamClient.connect: connected.',
      { options: this.options, server: this.connection.getServer() });

    // Set up connection closed handler
    this.connection.closed().then(() => {
      logger.debug('NatsJetStreamClient.connect: connection closed');
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
      logger.error('NatsClient.getJetStreamClient: not initialized',
        { options: this.options }, { remote: true});
      throw new Error('system-error');
    }

    return this.js;
  }

  public async getJetStreamManager(): Promise<jetstream.JetStreamManager> {
    await this.ensureConnection();

    if (!this.jsm) {
      logger.error('NatsClient.getJetStreamManager: not initialized',
        { options: this.options }, { remote: true});
      throw new Error('system-error');
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

    logger.debug('NatsClient.close: connection closed.');
  }

  public get isConnected(): boolean {
    return !!this.connection && !this.connection.isClosed() && !this.connectionLost;
  }

  // -----------------------------------------------------------------------------------------------
  // Private methods
  private async ensureConnection(): Promise<void> {
    if (!this.connection) {
      logger.error('NatsClient.ensureConnection: Not connected to NATS');
      return;
    }

    if (this.connectionLost || this.connection.isClosed()) {
      logger.debug('NatsClient.ensureConnection: attempting to reconnect...');
      await this.connect();
    }
  }

  private processStatus (status: nats.Status): void {
    if (!this.connection) {
      logger.error('NatsClient.processStatus: no connection.');
      return;
    }

    logger.debug(`NATS connection status: ${status}`);
    const type = status.type;

    switch (type) {
      case 'reconnect':
        this.reconnectAttempts++;
        logger.debug('NatsClient.processStatus: reconnected successfully',
          { isClosed: this.connection.isClosed(), isConnected: this.isConnected, attempts: this.reconnectAttempts });
        break;
      case 'reconnecting':
        logger.debug('NatsClient.processStatus: reconnecting...');
        break;
      case 'update':
        // I don't really know what to expect to find in these `added` or `deleted` arrays yet.
        if (status.added) {
          logger.debug(`NatsClient.processStatus: connection update: added ${JSON.stringify(status.added)}`);
        } else {
          logger.debug(`NatsClient.processStatus: connection update: deleted ${JSON.stringify(status.deleted)}`);
        }
        break;
      case 'disconnect':
        logger.debug('NatsClient.processStatus: disconnected');
        this.connectionLost = true;
        break;
      case 'error':
        console.error('NatsClient.processStatus: connection error:',
          { error: status.error }, { remote: true });
        break;
    }
  }

  private async startMonitoring(): Promise<void> {
    if (!this.connection) {
      logger.error('NatsClient.startMonitoring: No connection available.');
      return;
    }

    try {
      for await (const status of this.connection.status()) {
        this.processStatus(status);
      }
    } catch (error) {
      logger.error('NatsClient.startMonitoring: Error in status monitoring:',
        { error }, { remote: true });
    }
  }
}
