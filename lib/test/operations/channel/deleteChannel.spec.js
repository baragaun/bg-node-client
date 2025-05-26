import { afterEach, describe, expect, test } from 'vitest';
import factories from '../../factories/factories.js';
import clientStore from '../../helpers/clientStore.js';
import { createChannelSpecHelper } from '../../helpers/createChannel.specHelper.js';
import { deleteChannelSpecHelper } from '../../helpers/deleteChannel.specHelper.js';
import { deleteMyUserSpecHelper } from '../../helpers/deleteMyUser.specHelper.js';
import { signMeUpSpecHelper } from '../../helpers/signMeUp.specHelper.js';
describe('operations.channel.deleteChannel', () => {
    let client;
    afterEach(async () => {
        await deleteMyUserSpecHelper(client);
    });
    test('should create a channel with the given properties', async () => {
        client = await clientStore.getTestClient();
        const props = factories.channel.build({});
        expect(client).toBeDefined();
        await signMeUpSpecHelper(undefined, false, client);
        const channel = await createChannelSpecHelper(props, 0, client);
        await deleteChannelSpecHelper(channel.id, client);
    });
    test('should create a channel with the given properties (mock mode)', async () => {
        client = await clientStore.getTestClient();
        client.enableMockMode = true;
        const props = factories.channel.build({});
        expect(client).toBeDefined();
        await signMeUpSpecHelper(undefined, false, client);
        const channel = await createChannelSpecHelper(props, 0, client);
        await deleteChannelSpecHelper(channel.id, client);
    });
});
//# sourceMappingURL=deleteChannel.spec.js.map