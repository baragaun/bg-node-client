import { afterEach, beforeAll, describe, expect, test } from 'vitest';

import { BgNodeClient } from '../../../BgNodeClient.js';
import factories from '../../factories/factories.js';
import clientStore from '../../helpers/clientStore.js';
import { createChannelSpecHelper } from '../../helpers/createChannel.specHelper.js';
import { deleteMyUserSpecHelper } from '../../helpers/deleteMyUser.specHelper.js';
import { signMeUpSpecHelper } from '../../helpers/signMeUp.specHelper.js';

describe('operations.channel.createChannel', () => {
  let client: BgNodeClient;

  beforeAll(async () => {
    client = await clientStore.getTestClient();
  });

  afterEach(async () => {
    await deleteMyUserSpecHelper(client);
  });

  test('should create a channel with the given properties', async () => {
    const props = factories.channel.build({});

    expect(client).toBeDefined();

    await signMeUpSpecHelper(undefined, false, client);
    await createChannelSpecHelper(props, 0, client);
  });

  test('should create a channel with the given properties (mock mode)', async () => {
    client.enableMockMode = true;
    const props = factories.channel.build({});

    expect(client).toBeDefined();

    await signMeUpSpecHelper(undefined, false, client);
    await createChannelSpecHelper(props, 0, client);
  });
});
