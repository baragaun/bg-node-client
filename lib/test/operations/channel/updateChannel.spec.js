import { afterEach, beforeAll, describe, expect, test } from 'vitest';
import factories from '../../factories/factories.js';
import clientStore from '../../helpers/clientStore.js';
import { createChannelSpecHelper } from '../../helpers/createChannel.specHelper.js';
import { deleteMyUserSpecHelper } from '../../helpers/deleteMyUser.specHelper.js';
import { signMeUpSpecHelper } from '../../helpers/signMeUp.specHelper.js';
import { updateChannelSpecHelper } from '../../helpers/updateChannel.specHelper.js';
describe('operations.channel.updateChannel', () => {
    let client;
    beforeAll(async () => {
        client = await clientStore.getTestClient();
    });
    afterEach(async () => {
        await deleteMyUserSpecHelper(client);
    });
    test('should update channel properties', async () => {
        await signMeUpSpecHelper(undefined, false, client);
        const props = await factories.channel.build({});
        const channel = await createChannelSpecHelper(props, 0, client);
        const updatedChannel = await updateChannelSpecHelper({
            id: channel.id,
            name: 'newname',
        }, client);
        expect(updatedChannel.name).toBe('newname');
    });
}, 10000);
//# sourceMappingURL=updateChannel.spec.js.map