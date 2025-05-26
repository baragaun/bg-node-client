import { beforeAll, describe, expect, test } from 'vitest';

import { BgNodeClient } from '../../../BgNodeClient.js';
import { CachePolicy } from '../../../enums.js';
import signMeOut from '../../../operations/myUser/signMeOut.js';
import clientStore from '../../helpers/clientStore.js';
import { createMultipleChannelSpecHelper } from '../../helpers/createMultipleChannels.specHelper.js';
import { deleteChannelSpecHelper } from '../../helpers/deleteChannel.specHelper.js';
import { deleteMyUserSpecHelper } from '../../helpers/deleteMyUser.specHelper.js';
import { getTestUserPropsSpecHelper } from '../../helpers/getTestUserProps.specHelper.js';
import { signMeInSpecHelper } from '../../helpers/signMeIn.specHelper.js';
import { signMeUpSpecHelper } from '../../helpers/signMeUp.specHelper.js';

describe('operations.channelMessage.findChannelMessages', () => {
  let client: BgNodeClient;

  beforeAll(async () => {
    client = await clientStore.getTestClient();
  });

  test('returns the channels for the current user', async () => {
    // const count = chance.integer({ min: 2, max: 10 });

    // Create some channels and messages that are not visible to the user:
    const otherUser = await signMeUpSpecHelper(undefined, false, client);
    const otherUserPassword = getTestUserPropsSpecHelper(otherUser).password;
    const otherChannels = await createMultipleChannelSpecHelper([
      { props: { createdBy: otherUser.id }, messageCount: 2 },
      { props: { createdBy: otherUser.id }, messageCount: 3 },
    ], client);

    expect(otherChannels.length).toBe(2);
    expect(otherChannels[0].messages.length).toBe(2);
    expect(otherChannels[1].messages.length).toBe(3);

    await signMeOut();

    // Create the user that then will search for their channels and messages:
    const user = await signMeUpSpecHelper(undefined, false, client);
    const channels = await createMultipleChannelSpecHelper([
      { props: { createdBy: user.id }, messageCount: 2 },
      { props: { createdBy: user.id }, messageCount: 3 },
    ], client);
    // const channelIds = channels.map((c) => c.id).sort();

    // Fetching channels from the network:
    const queryResultFromNetwork = await client.operations.channelMessage.findChannelMessages(
      undefined,
      { channelId: channels[0].id },
      undefined,
      undefined,
      { cachePolicy: CachePolicy.network },
    );
    const channelMessagesFromNetwork = queryResultFromNetwork.objects;
    // const channelMessageIdsFromNetwork = channelMessagesFromNetwork.map((c) => c.id).sort();

    expect(queryResultFromNetwork.error).toBeUndefined();
    expect(channelMessagesFromNetwork.length).toBe(channels[0].messages.length);
    // expect(channelMessageIdsFromNetwork).not.include(otherChannels[0].id);
    // expect(channelMessageIdsFromNetwork).not.include(otherChannels[1].id);

    // Fetching channels from the local cache:
    const queryResultFromLocal = await client.operations.channelMessage.findChannelMessages(
      undefined,
      { channelId: channels[0].id },
      undefined,
      undefined,
      { cachePolicy: CachePolicy.cache },
    );
    const channelMessagesFromLocal = queryResultFromLocal.objects;
    // const channelMessageIdsFromLocal = channelMessagesFromLocal.map((c) => c.id).sort();

    expect(queryResultFromLocal.error).toBeUndefined();
    expect(channelMessagesFromLocal.length).toBe(channels[0].messages.length);
    // expect(channelMessageIdsFromLocal).not.include(otherChannels[0].id);
    // expect(channelMessageIdsFromLocal).not.include(otherChannels[1].id);

    // Cleanup for user:
    await Promise.all(
      channels.map((channel) => deleteChannelSpecHelper(channel.id, client)),
    );
    await deleteMyUserSpecHelper(client);

    // Cleanup for otherUser:
    await signMeInSpecHelper(otherUser.email, otherUserPassword, client);
    await Promise.all(
      otherChannels.map((channel) => deleteChannelSpecHelper(channel.id, client)),
    );
    await deleteMyUserSpecHelper(client);
  });
}, { timeout: 100000 });
