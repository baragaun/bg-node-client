import { afterEach, beforeAll, describe, test } from 'vitest';

import { BgNodeClient } from '../../../BgNodeClient.js';
import signMeOut from '../../../operations/myUser/signMeOut.js';
import factories from '../../factories/factories.js';
import { createChannelInvitationSpecHelper } from '../../helpers/channelInvitation/createChannelInvitation.specHelper.js';
import clientStore from '../../helpers/clientStore.js';
import { isFeatureEnabled } from '../../helpers/isFeatureEnabled.js';
import { deleteMyUserSpecHelper } from '../../helpers/user/deleteMyUser.specHelper.js';
import { getTestUserPropsSpecHelper } from '../../helpers/user/getTestUserProps.specHelper.js';
import { signMeInSpecHelper } from '../../helpers/user/signMeIn.specHelper.js';
import { signMeUpSpecHelper } from '../../helpers/user/signMeUp.specHelper.js';

describe.runIf(isFeatureEnabled('channels'))('operations.channel.createChannelInvitation', () => {
  let client: BgNodeClient;

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
