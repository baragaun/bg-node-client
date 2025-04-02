import { describe, expect, test } from 'vitest';
import factories from '../../factories/factories.js';
import clientStore from '../../helpers/clientStore.js';
import { createChannelSpecHelper } from '../../helpers/createChannel.specHelper.js';
import { signMeUpSpecHelper } from '../../helpers/signMeUp.specHelper.js';
import { updateChannelSpecHelper } from '../../helpers/updateChannel.specHelper.js';
describe('operations.channel.updateChannel', () => {
    test('should update channel properties', async () => {
        const client = await clientStore.getTestClient();
        const props = await factories.channel.build({});
        expect(client).toBeDefined();
        await signMeUpSpecHelper(undefined, false, client);
        const channel = await createChannelSpecHelper(props, client);
        const updatedChannel = await updateChannelSpecHelper({
            id: channel.id,
            name: 'newname',
        }, client);
        expect(updatedChannel.name).toBe('newname');
    });
}, 10000);
//# sourceMappingURL=updateChannel.spec.js.map