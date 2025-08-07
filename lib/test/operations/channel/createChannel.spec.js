import { afterEach, beforeAll, describe, expect, test } from 'vitest';
import libData from '../../../helpers/libData.js';
import { NatsClient } from '../../../nats/NatsClient.js';
import signMeOut from '../../../operations/myUser/signMeOut.js';
import factories from '../../factories/factories.js';
import { createChannelSpecHelper } from '../../helpers/channel/createChannel.specHelper.js';
import { deleteChannelSpecHelper } from '../../helpers/channel/deleteChannel.specHelper.js';
import clientStore from '../../helpers/clientStore.js';
import { getTestClientConfig } from '../../helpers/getTestClientConfig.js';
import { isFeatureEnabled } from '../../helpers/isFeatureEnabled.js';
import { deleteMyUserSpecHelper } from '../../helpers/user/deleteMyUser.specHelper.js';
import { getTestUserPropsSpecHelper } from '../../helpers/user/getTestUserProps.specHelper.js';
import { signMeInSpecHelper } from '../../helpers/user/signMeIn.specHelper.js';
import { signMeUpSpecHelper } from '../../helpers/user/signMeUp.specHelper.js';
// @failing-in-set
describe.runIf(isFeatureEnabled('channels'))('operations.channel.createChannel', () => {
    let client;
    beforeAll(async () => {
        client = await clientStore.getTestClient();
        const config = getTestClientConfig();
        libData.setConfig(config);
        libData.setNatsClient(new NatsClient(config.nats));
        const nsClient = libData.natsClient();
        await nsClient.connect();
        // Wait until the NATS client is connected
        let retries = 10;
        while (!nsClient.isConnected && retries > 0) {
            await new Promise(res => setTimeout(res, 100));
            retries--;
        }
        if (!nsClient.isConnected)
            throw new Error('NATS client failed to connect');
        // No manual stream creation here
    });
    afterEach(async () => {
        await deleteMyUserSpecHelper(client);
    });
    test('should create a channel with the given properties', async () => {
        const otherUser = await signMeUpSpecHelper(undefined, false, client);
        const otherUserPassword = getTestUserPropsSpecHelper(otherUser).password;
        await signMeOut();
        await signMeUpSpecHelper(undefined, false, client);
        const props = factories.channel.build({
            userIds: [otherUser.id, client.clientInfoStore.myUserId],
            createdBy: client.clientInfoStore.myUserId,
        });
        const channel = await createChannelSpecHelper(props, 1, client);
        await deleteChannelSpecHelper(channel.id, client);
        await deleteMyUserSpecHelper(client);
        // Cleanup for otherUser:
        await signMeInSpecHelper(otherUser.email, otherUserPassword, client);
    });
    test('should publish a NATS event when a channel is created', async () => {
        const received = [];
        // Ensure NATS client is available and connected
        const config = getTestClientConfig();
        libData.setConfig(config);
        const natsClient = new NatsClient(config.nats);
        libData.setNatsClient(natsClient);
        await natsClient.connect();
        // Wait until the NATS client is connected
        let retries = 10;
        while (!natsClient.isConnected && retries > 0) {
            await new Promise(res => setTimeout(res, 100));
            retries--;
        }
        if (!natsClient.isConnected)
            throw new Error('NATS client failed to connect');
        // Create users and channel as in your other tests
        const otherUser = await signMeUpSpecHelper(undefined, false, client);
        const otherUserPassword = getTestUserPropsSpecHelper(otherUser).password;
        await signMeOut();
        await signMeUpSpecHelper(undefined, false, client);
        const props = factories.channel.build({
            userIds: [otherUser.id, client.clientInfoStore.myUserId],
            createdBy: client.clientInfoStore.myUserId,
        });
        // Subscribe to the expected NATS subject for channel creation events using the helper
        const channel = await createChannelSpecHelper(props, 1, client);
        // Wait for the NATS message
        await new Promise((resolve) => setTimeout(resolve, 500));
        // todo: received should not be empty;
        expect(received.length).toBeGreaterThan(0);
        expect(received[0].id).toBe(channel.id);
        await deleteChannelSpecHelper(channel.id, client);
        await deleteMyUserSpecHelper(client);
        await signMeInSpecHelper(otherUser.email, otherUserPassword, client);
    });
    test('should create a channel with the given properties (mock mode)', async () => {
        client.enableMockMode = true;
        const otherUser = await signMeUpSpecHelper(undefined, false, client);
        const otherUserPassword = getTestUserPropsSpecHelper(otherUser).password;
        await signMeOut();
        await signMeUpSpecHelper(undefined, false, client);
        const props = factories.channel.build({
            userIds: [otherUser.id, client.clientInfoStore.myUserId],
            createdBy: client.clientInfoStore.myUserId,
        });
        await createChannelSpecHelper(props, 0, client);
        await deleteMyUserSpecHelper(client);
        // Cleanup for otherUser:
        await signMeInSpecHelper(otherUser.email, otherUserPassword, client);
    });
}, 10000);
//# sourceMappingURL=createChannel.spec.js.map