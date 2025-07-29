import {
  afterAll,
  describe,
  expect,
  it,
} from 'vitest';

import libData from '../../helpers/libData.js';
import { NatsClient } from '../../nats/NatsClient.js';
import { isFeatureEnabled } from '../helpers/isFeatureEnabled.js';
import { getTestClientConfig } from '../helpers/getTestClientConfig.js';

describe.runIf(isFeatureEnabled('nats'))('NatsClient', () => {
  let client: NatsClient;

  afterAll(async () => {
    if (client && client.isConnected) {
      await client.close();
    }
  });

  it('should connect to NATS server successfully', async () => {
    const config = getTestClientConfig();
    libData.setConfig(config);
    libData.setNatsClient(new NatsClient(config.nats));
    client = libData.natsClient();
    await client.connect();

    expect(client.isConnected).toBe(true);
  });

  //   it('should reconnect if temporarily disconnected', async () => {
  //     // To test this I am manually restarting the container, and anticipating output like:
  //     // --------------------------------------------------------
  //     // Not connected or closed connection, attempting to connect.
  //     // Connected to NATS server: localhost:4222
  //     // should down the container
  //     // NATS disconnected
  //     // NATS reconnecting...
  //     // NATS reconnecting...
  //     // should up the container
  //     // NATS reconnecting...
  //     // NATS connection update: added "update"
  //     // NATS reconnect attempt: 1
  //     // --------------------------------------------------------

  //     await client.connect();
  //     expect(client.isConnected).toBe(true);

  //     logger.debug('should down the container')
  //     await new Promise(resolve => setTimeout(resolve, 2000));

  //     // At this point, the connection should be lost
  //     expect(client.isConnected).toBe(false);
  //     logger.debug('should up the container')


  //     // Wait for reconnection attempts (adjust timing as needed)
  //     await new Promise(resolve => setTimeout(resolve, 1000));

  //     expect(client.isConnected).toBe(true);
  //   });
});
