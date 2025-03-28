import { describe, expect, test } from 'vitest';
import factories from '../../factories/factories.js';
import clientStore from '../../helpers/clientStore.js';
import { createChannelSpecHelper } from '../../helpers/createChannel.specHelper.js';
import { deleteMyUserSpecHelper } from '../../helpers/deleteMyUser.specHelper.js';
import { signMeUpSpecHelper } from '../../helpers/signMeUp.specHelper.js';
describe('operations.channel.createChannel', () => {
    test('should create a channel with the given properties', async () => {
        const client = await clientStore.getTestClient();
        const props = factories.channel.build({});
        expect(client).toBeDefined();
        await signMeUpSpecHelper(undefined, false, client);
        await createChannelSpecHelper(props, client);
        await deleteMyUserSpecHelper(client);
    });
});
//# sourceMappingURL=createChannel.spec.js.map