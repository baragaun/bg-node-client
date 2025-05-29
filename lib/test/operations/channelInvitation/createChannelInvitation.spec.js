import { afterEach, beforeAll, describe, test } from 'vitest';
import signMeOut from '../../../operations/myUser/signMeOut.js';
import factories from '../../factories/factories.js';
import clientStore from '../../helpers/clientStore.js';
import { createChannelInvitationSpecHelper } from '../../helpers/createChannelInvitation.specHelper.js';
import { deleteMyUserSpecHelper } from '../../helpers/deleteMyUser.specHelper.js';
import { getTestUserPropsSpecHelper } from '../../helpers/getTestUserProps.specHelper.js';
import { signMeInSpecHelper } from '../../helpers/signMeIn.specHelper.js';
import { signMeUpSpecHelper } from '../../helpers/signMeUp.specHelper.js';
describe('operations.channel.createChannelInvitation', () => {
    let client;
    beforeAll(async () => {
        client = await clientStore.getTestClient();
    });
    afterEach(async () => {
        await deleteMyUserSpecHelper(client);
    });
    test('creates a channel invitation with the given properties', async () => {
        const otherUser = await signMeUpSpecHelper(undefined, false, client);
        const otherUserPassword = getTestUserPropsSpecHelper(otherUser).password;
        await signMeOut();
        await signMeUpSpecHelper(undefined, false, client);
        const props = factories.channelInvitation.build({
            createdBy: client.clientInfoStore.myUserId,
            recipientId: otherUser.id,
        });
        await createChannelInvitationSpecHelper(props, client);
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
        const props = factories.channelInvitation.build({
            createdBy: client.clientInfoStore.myUserId,
            recipientId: otherUser.id,
        });
        await createChannelInvitationSpecHelper(props, client);
        await deleteMyUserSpecHelper(client);
        // Cleanup for otherUser:
        await signMeInSpecHelper(otherUser.email, otherUserPassword, client);
    });
});
//# sourceMappingURL=createChannelInvitation.spec.js.map