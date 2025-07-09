import { afterAll, describe, expect, it, } from 'vitest';
import libData from '../../helpers/libData.js';
import { NatsClient } from '../../nats/NatsClient.js';
import { isFeatureEnabled } from '../helpers/isFeatureEnabled.js';
describe.runIf(isFeatureEnabled('nats'))('NatsClient', () => {
    let client;
    afterAll(async () => {
        if (client && client.isConnected) {
            await client.close();
        }
    });
    it('should connect to NATS server successfully', async () => {
        const config = libData.config();
        const natsServer = config?.nats && Array.isArray(config.nats?.servers) && config.nats?.servers.length > 0
            ? config.nats?.servers?.[0] || 'nats://localhost:4222'
            : 'nats://localhost:4222';
        const options = {
            servers: [natsServer],
            timeout: 5000,
            reconnectTimeWait: 1000,
        };
        client = new NatsClient(options);
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
//# sourceMappingURL=NatsClient.spec.js.map