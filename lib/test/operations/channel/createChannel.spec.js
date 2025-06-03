import { afterEach, beforeAll, describe, test } from 'vitest';
import signMeOut from '../../../operations/myUser/signMeOut.js';
import factories from '../../factories/factories.js';
import clientStore from '../../helpers/clientStore.js';
import { createChannelSpecHelper } from '../../helpers/createChannel.specHelper.js';
import { deleteChannelSpecHelper } from '../../helpers/deleteChannel.specHelper.js';
import { deleteMyUserSpecHelper } from '../../helpers/deleteMyUser.specHelper.js';
import { getTestUserPropsSpecHelper } from '../../helpers/getTestUserProps.specHelper.js';
import { signMeInSpecHelper } from '../../helpers/signMeIn.specHelper.js';
import { signMeUpSpecHelper } from '../../helpers/signMeUp.specHelper.js';
describe('operations.channel.createChannel', () => {
    let client;
    beforeAll(async () => {
        client = await clientStore.getTestClient();
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
});
//# sourceMappingURL=createChannel.spec.js.map