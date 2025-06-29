import { afterEach, beforeAll, describe, expect, test } from 'vitest';

import { BgNodeClient } from '../../../BgNodeClient.js';
import factories from '../../factories/factories.js';
import { createChannelSpecHelper } from '../../helpers/channel/createChannel.specHelper.js';
import { deleteChannelSpecHelper } from '../../helpers/channel/deleteChannel.specHelper.js';
import { updateChannelMessageSpecHelper } from '../../helpers/channelMessage/updateChannelMessage.specHelper.js';
import clientStore from '../../helpers/clientStore.js';
import { deleteMyUserSpecHelper } from '../../helpers/user/deleteMyUser.specHelper.js';
import { signMeUpSpecHelper } from '../../helpers/user/signMeUp.specHelper.js';


describe('operations.channel.updateChannelMessage', () => {
  let client: BgNodeClient;

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
    const updatedChannelMessage = await updateChannelMessageSpecHelper(
      {
        id: channel.messages[0].id,
        messageText: 'new-message-text',
      },
      client,
    );

    expect(updatedChannelMessage.messageText).toBe('new-message-text');
    await deleteChannelSpecHelper(channel.id, client);
  });
}, 10000);
