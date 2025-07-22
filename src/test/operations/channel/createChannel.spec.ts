import { afterEach, beforeAll, describe, test } from 'vitest';

import { BgNodeClient } from '../../../BgNodeClient.js';
import signMeOut from '../../../operations/myUser/signMeOut.js';
import factories from '../../factories/factories.js';
import { createChannelSpecHelper } from '../../helpers/channel/createChannel.specHelper.js';
import { deleteChannelSpecHelper } from '../../helpers/channel/deleteChannel.specHelper.js';
import clientStore from '../../helpers/clientStore.js';
import { isFeatureEnabled } from '../../helpers/isFeatureEnabled.js';
import { deleteMyUserSpecHelper } from '../../helpers/user/deleteMyUser.specHelper.js';
import { getTestUserPropsSpecHelper } from '../../helpers/user/getTestUserProps.specHelper.js';
import { signMeInSpecHelper } from '../../helpers/user/signMeIn.specHelper.js';
import { signMeUpSpecHelper } from '../../helpers/user/signMeUp.specHelper.js';

// @failing-in-set
describe.runIf(isFeatureEnabled('channels'))('operations.channel.createChannel', () => {
  let client: BgNodeClient;

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
}, 10000);
