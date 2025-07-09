import { afterEach, beforeAll, describe, test } from 'vitest';

import { BgNodeClient } from '../../../BgNodeClient.js';
import chance from '../../../helpers/chance.js';
import { createChannelInvitationSpecHelper } from '../../helpers/channelInvitation/createChannelInvitation.specHelper.js';
import { deleteChannelInvitationSpecHelper } from '../../helpers/channelInvitation/deleteChannelInvitation.specHelper.js';
import clientStore from '../../helpers/clientStore.js';
import { isFeatureEnabled } from '../../helpers/isFeatureEnabled.js';
import { deleteMyUserSpecHelper } from '../../helpers/user/deleteMyUser.specHelper.js';
import { getTestUserPropsSpecHelper } from '../../helpers/user/getTestUserProps.specHelper.js';
import { signMeInSpecHelper } from '../../helpers/user/signMeIn.specHelper.js';
import { signMeUpSpecHelper } from '../../helpers/user/signMeUp.specHelper.js';

describe.runIf(isFeatureEnabled('channels'))('operations.channel.deleteChannelMessage', () => {
  let client: BgNodeClient;

  beforeAll(async () => {
    client = await clientStore.getTestClient();
  });

  afterEach(async () => {
    await deleteMyUserSpecHelper(client);
  });

  test('should delete channelInvitation properties', async () => {
    // Sign up as the user that will receive the invitation. This will also sign out
    // the user right away:
    const user1 = await signMeUpSpecHelper(undefined, true, client);

    // Sign up as the that is sending out the invitation and owns it:
    await signMeUpSpecHelper(undefined, false, client);

    // Sending the invitation to the first user (user1):
    const invitation = await createChannelInvitationSpecHelper({
      createdBy: client.clientInfoStore.myUserId,
      recipientId: user1.id,
      messageText: chance.sentence(),
    }, client);

    // Deleting the channel invitation:
    await deleteChannelInvitationSpecHelper(invitation.id, client);

    // Deleting the sender:
    await deleteMyUserSpecHelper(client);

    // Signing in as the recipient (user1):
    await signMeInSpecHelper(user1.email, getTestUserPropsSpecHelper(user1).password, client);
  });
});
