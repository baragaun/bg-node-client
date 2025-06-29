import { afterEach, beforeAll, describe, expect, test } from 'vitest';

import { BgNodeClient } from '../../../BgNodeClient.js';
import { CachePolicy, SortDirection } from '../../../enums.js';
import signMeOut from '../../../operations/myUser/signMeOut.js';
import {
  createMultipleChannelSpecHelper,
} from '../../helpers/channel/createMultipleChannels.specHelper.js';
import { deleteChannelSpecHelper } from '../../helpers/channel/deleteChannel.specHelper.js';
import clientStore from '../../helpers/clientStore.js';
import { deleteMyUserSpecHelper } from '../../helpers/user/deleteMyUser.specHelper.js';
import { getTestUserPropsSpecHelper } from '../../helpers/user/getTestUserProps.specHelper.js';
import { signMeInSpecHelper } from '../../helpers/user/signMeIn.specHelper.js';
import { signMeUpSpecHelper } from '../../helpers/user/signMeUp.specHelper.js';

//tf
describe('operations.channelMessage.findChannelMessages', () => {
  let client: BgNodeClient;

  beforeAll(async () => {
    client = await clientStore.getTestClient();
  });

  afterEach(async () => {
    await deleteMyUserSpecHelper(client);
  });

  test('finds channel messages', async () => {
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
    const messageCount = 10;
    const user = await signMeUpSpecHelper(undefined, false, client);
    const channels = await createMultipleChannelSpecHelper([
      { props: { createdBy: user.id }, messageCount },
      { props: { createdBy: user.id }, messageCount: 3 },
    ], client);

    // The messages are sorted with the latest first:
    const messages = channels[0].messages.reverse();

    expect(messages.length).toBe(messageCount);

    // Fetching all messages from the network:
    const queryResultFromNetwork = await client.operations.channelMessage.findChannelMessages(
      undefined,
      { channelId: channels[0].id },
      undefined,
      { sort: [{ field: 'createdAt', direction: SortDirection.desc }] },
      { cachePolicy: CachePolicy.network },
    );
    const channelMessagesFromNetwork = queryResultFromNetwork.objects;

    expect(queryResultFromNetwork.error).toBeUndefined();
    expect(channelMessagesFromNetwork.length).toBe(messageCount);

    for (let i = 0; i < channelMessagesFromNetwork.length; i++) {
      const channelMessage = channelMessagesFromNetwork[i];
      const originalMessage = messages.find((msg) => msg.id === channelMessage.id);
      expect(channelMessage.id).toBe(originalMessage?.id);
      expect(channelMessage.createdBy).toBe(originalMessage?.createdBy);
      expect(channelMessage.messageText).toBe(originalMessage?.messageText);
      expect(channelMessage.adminNotes).toBe(originalMessage?.adminNotes);
      expect(channelMessage.adminNotes).toBe((messageCount - i - 1).toString());
      if (i > 0) {
        expect(new Date(channelMessage.createdAt).getTime()).toBeLessThan(
          new Date(channelMessagesFromNetwork[i - 1].createdAt).getTime(),
        );
      }
    }

    // Fetching first batch of a paginated sequence:
    const limit0 = 6;
    const queryResultFromNetworkBatch0 = await client.operations.channelMessage.findChannelMessages(
      undefined,
      { channelId: channels[0].id },
      undefined,
      { sort: [{ field: 'createdAt', direction: SortDirection.desc }], skip: 0, limit: limit0 },
      { cachePolicy: CachePolicy.network },
    );
    const channelMessagesFromNetworkBatch0 = queryResultFromNetworkBatch0.objects;

    expect(queryResultFromNetworkBatch0.error).toBeUndefined();
    expect(channelMessagesFromNetworkBatch0.length).toBe(limit0);

    for (let i = 0; i < limit0; i++) {
      expect(channelMessagesFromNetworkBatch0[i].id).toBe(messages[i].id);
    }

    // Fetching second batch of a paginated sequence:
    const queryResultFromNetworkBatch1 = await client.operations.channelMessage.findChannelMessages(
      undefined,
      { channelId: channels[0].id },
      undefined,
      { sort: [{ field: 'createdAt', direction: SortDirection.desc }], skip: limit0, limit: 50 }, // We'll request 50, but will only get 4
      { cachePolicy: CachePolicy.network },
    );
    const channelMessagesFromNetworkBatch1 = queryResultFromNetworkBatch1.objects;

    expect(queryResultFromNetworkBatch1.error).toBeUndefined();
    expect(channelMessagesFromNetworkBatch1.length).toBe(messageCount - limit0);

    for (let i = 0; i < channelMessagesFromNetworkBatch1.length; i++) {
      expect(channelMessagesFromNetworkBatch1[i].id).toBe(messages[i + limit0].id);
    }

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
    expect(channelMessagesFromLocal.length).toBe(messages.length);

    for (let i = 0; i < channelMessagesFromLocal.length; i++) {
      const channelMessage = channelMessagesFromLocal[i];
      const originalMessage = messages.find((msg) => msg.id === channelMessage.id);
      expect(channelMessage.id).toBe(originalMessage?.id);
      expect(channelMessage.createdBy).toBe(originalMessage?.createdBy);
      expect(channelMessage.messageText).toBe(originalMessage?.messageText);
      expect(channelMessage.adminNotes).toBe(originalMessage?.adminNotes);
      expect(channelMessage.adminNotes).toBe(i.toString());
    }

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
  });
}, { timeout: 20000 });
