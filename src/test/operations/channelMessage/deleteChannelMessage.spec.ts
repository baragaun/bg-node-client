import { afterEach, beforeAll, describe, expect, test } from 'vitest';

import { BgNodeClient } from '../../../BgNodeClient.js';
import { CachePolicy, ModelType } from '../../../enums.js';
import { ChannelMessage } from '../../../models/ChannelMessage.js';
import findById from '../../../operations/findById.js';
import factories from '../../factories/factories.js';
import clientStore from '../../helpers/clientStore.js';
import { createChannelSpecHelper } from '../../helpers/createChannel.specHelper.js';
import { deleteChannelSpecHelper } from '../../helpers/deleteChannel.specHelper.js';
import { deleteChannelMessageSpecHelper } from '../../helpers/deleteChannelMessage.specHelper.js';
import { deleteMyUserSpecHelper } from '../../helpers/deleteMyUser.specHelper.js';
import { signMeUpSpecHelper } from '../../helpers/signMeUp.specHelper.js';

describe('operations.channel.deleteChannelMessage', () => {
  let client: BgNodeClient;

  beforeAll(async () => {
    client = await clientStore.getTestClient();
  });

  afterEach(async () => {
    await deleteMyUserSpecHelper(client);
  });

  test('should delete channelMessage properties', async () => {
    const props = await factories.channel.build({});

    expect(client).toBeDefined();

    await signMeUpSpecHelper(undefined, false, client);
    const channel = await createChannelSpecHelper(props, 2, client);
    await deleteChannelMessageSpecHelper(channel.messages[0].id, client);

    const networkResult =
      await findById<ChannelMessage>(channel.messages[1].id, ModelType.ChannelMessage, {
        cachePolicy: CachePolicy.cache,
      });

    expect(networkResult.error).toBeUndefined();
    expect(networkResult.object.messageText).toBe(channel.messages[1].messageText);
    await deleteChannelSpecHelper(channel.id, client);
  });
}, 10000);
