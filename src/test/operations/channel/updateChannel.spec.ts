import { afterEach, beforeAll, describe, expect, test } from 'vitest';

import { BgNodeClient } from '../../../BgNodeClient.js';
import factories from '../../factories/factories.js';
import { createChannelSpecHelper } from '../../helpers/channel/createChannel.specHelper.js';
import { updateChannelSpecHelper } from '../../helpers/channel/updateChannel.specHelper.js';
import clientStore from '../../helpers/clientStore.js';
import { isFeatureEnabled } from '../../helpers/isFeatureEnabled.js';
import { deleteMyUserSpecHelper } from '../../helpers/user/deleteMyUser.specHelper.js';
import { signMeUpSpecHelper } from '../../helpers/user/signMeUp.specHelper.js';

describe.runIf(isFeatureEnabled('channels'))('operations.channel.updateChannel', () => {
  let client: BgNodeClient;

  beforeAll(async () => {
    client = await clientStore.getTestClient();
  });

  afterEach(async () => {
    await deleteMyUserSpecHelper(client);
  });

  test('should update channel properties', async () => {
    await signMeUpSpecHelper(undefined, false, client);
    const props = await factories.channel.build({});
    const channel = await createChannelSpecHelper(props, 0, client);
    const updatedChannel = await updateChannelSpecHelper(
      {
        id: channel.id,
        name: 'newname',
      },
      client,
    );

    expect(updatedChannel.name).toBe('newname');
  });
}, 10000);
