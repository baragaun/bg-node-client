import { afterEach, beforeAll, describe, expect, test } from 'vitest';
import factories from '../../factories/factories.js';
import clientStore from '../../helpers/clientStore.js';
import { createChannelSpecHelper } from '../../helpers/createChannel.specHelper.js';
import { deleteChannelSpecHelper } from '../../helpers/deleteChannel.specHelper.js';
import { deleteMyUserSpecHelper } from '../../helpers/deleteMyUser.specHelper.js';
import { signMeUpSpecHelper } from '../../helpers/signMeUp.specHelper.js';
import { updateChannelMessageSpecHelper } from '../../helpers/updateChannelMessage.specHelper.js';
describe('operations.channel.updateChannelMessage', () => {
    let client;
    beforeAll(async () => {
        client = await clientStore.getTestClient();
    });
    afterEach(async () => {
        await deleteMyUserSpecHelper(client);
    });
    test('should update channelMessage properties', async () => {
        const props = await factories.channel.build({});
        expect(client).toBeDefined();
        await signMeUpSpecHelper(undefined, false, client);
        const channel = await createChannelSpecHelper(props, 2, client);
        const updatedChannelMessage = await updateChannelMessageSpecHelper({
            id: channel.messages[0].id,
            messageText: 'new-message-text',
        }, client);
        expect(updatedChannelMessage.messageText).toBe('new-message-text');
        await deleteChannelSpecHelper(channel.id, client);
    });
}, 10000);
//# sourceMappingURL=updateChannelMessage.spec.js.map