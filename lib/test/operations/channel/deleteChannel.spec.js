import { afterEach, beforeAll, describe, expect, test } from 'vitest';
import factories from '../../factories/factories.js';
import { createChannelSpecHelper } from '../../helpers/channel/createChannel.specHelper.js';
import { deleteChannelSpecHelper } from '../../helpers/channel/deleteChannel.specHelper.js';
import clientStore from '../../helpers/clientStore.js';
import { isFeatureEnabled } from '../../helpers/isFeatureEnabled.js';
import { deleteMyUserSpecHelper } from '../../helpers/user/deleteMyUser.specHelper.js';
import { signMeUpSpecHelper } from '../../helpers/user/signMeUp.specHelper.js';
describe.runIf(isFeatureEnabled('channels'))('operations.channel.deleteChannel', () => {
    let client;
    beforeAll(async () => {
        client = await clientStore.getTestClient();
    });
    afterEach(async () => {
        await deleteMyUserSpecHelper(client);
    });
    test('should create a channel with the given properties', async () => {
        const props = factories.channel.build({});
        expect(client).toBeDefined();
        await signMeUpSpecHelper(undefined, false, client);
        const channel = await createChannelSpecHelper(props, 0, client);
        await deleteChannelSpecHelper(channel.id, client);
    });
    test('should create a channel with the given properties (mock mode)', async () => {
        client.enableMockMode = true;
        const props = factories.channel.build({});
        expect(client).toBeDefined();
        await signMeUpSpecHelper(undefined, false, client);
        const channel = await createChannelSpecHelper(props, 0, client);
        await deleteChannelSpecHelper(channel.id, client);
    });
});
//# sourceMappingURL=deleteChannel.spec.js.map