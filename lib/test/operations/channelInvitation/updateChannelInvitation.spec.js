import { afterEach, beforeAll, describe, expect, test } from 'vitest';
import { ChannelInvitationStatus } from '../../../enums.js';
import signMeOut from '../../../operations/myUser/signMeOut.js';
import factories from '../../factories/factories.js';
import { createChannelInvitationSpecHelper, } from '../../helpers/channelInvitation/createChannelInvitation.specHelper.js';
import { updateChannelInvitationSpecHelper, } from '../../helpers/channelInvitation/updateChannelInvitation.specHelper.js';
import clientStore from '../../helpers/clientStore.js';
import { isFeatureEnabled } from '../../helpers/isFeatureEnabled.js';
import { deleteMyUserSpecHelper } from '../../helpers/user/deleteMyUser.specHelper.js';
import { getTestUserPropsSpecHelper } from '../../helpers/user/getTestUserProps.specHelper.js';
import { signMeInSpecHelper } from '../../helpers/user/signMeIn.specHelper.js';
import { signMeUpSpecHelper } from '../../helpers/user/signMeUp.specHelper.js';
describe.runIf(isFeatureEnabled('channels'))('operations.channel.updateChannelInvitation', () => {
    let client;
    beforeAll(async () => {
        client = await clientStore.getTestClient();
    });
    afterEach(async () => {
        await deleteMyUserSpecHelper(client);
    });
    test('updates a channel invitation with the given properties', async () => {
        const recipient = await signMeUpSpecHelper(undefined, false, client);
        const recipientPassword = getTestUserPropsSpecHelper(recipient).password;
        await signMeOut();
        const sender = await signMeUpSpecHelper(undefined, false, client);
        const senderPassword = getTestUserPropsSpecHelper(sender).password;
        const props = factories.channelInvitation.build({
            createdBy: client.clientInfoStore.myUserId,
            recipientId: recipient.id,
        });
        const channelInvitation = await createChannelInvitationSpecHelper(props, client);
        const updatedInvitation1 = await updateChannelInvitationSpecHelper({
            id: channelInvitation.id,
            messageText: 'new-message-text',
        }, client);
        expect(updatedInvitation1.messageText).toBe('new-message-text');
        // Signing out the sender, and signing in as the recipient, who is allowed to update
        // the invitation status:
        await signMeOut();
        await signMeInSpecHelper(recipient.email, recipientPassword, client);
        const updatedInvitation2 = await updateChannelInvitationSpecHelper({
            id: channelInvitation.id,
            status: ChannelInvitationStatus.accepted,
        }, client);
        expect(updatedInvitation2.status).toBe(ChannelInvitationStatus.accepted);
        // Deleting the recipient:
        await deleteMyUserSpecHelper(client);
        // Cleanup for otherUser:
        await signMeInSpecHelper(sender.email, senderPassword, client);
    });
    test('updates a channel invitation with the given properties (mock mode)', async () => {
        client.enableMockMode = true;
        const otherUser = await signMeUpSpecHelper(undefined, false, client);
        const otherUserPassword = getTestUserPropsSpecHelper(otherUser).password;
        await signMeOut();
        await signMeUpSpecHelper(undefined, false, client);
        const props = factories.channelInvitation.build({
            createdBy: client.clientInfoStore.myUserId,
            recipientId: otherUser.id,
        });
        const channelInvitation = await createChannelInvitationSpecHelper(props, client);
        const updatedInvitation = await updateChannelInvitationSpecHelper({
            id: channelInvitation.id,
            messageText: 'new-message-text',
        }, client);
        expect(updatedInvitation.messageText).toBe('new-message-text');
        await deleteMyUserSpecHelper(client);
        // Cleanup for otherUser:
        await signMeInSpecHelper(otherUser.email, otherUserPassword, client);
    });
}, { timeout: 10000 });
//# sourceMappingURL=updateChannelInvitation.spec.js.map