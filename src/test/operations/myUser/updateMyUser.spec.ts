import { describe, expect, test } from 'vitest';

import { BgNodeClient } from '../../../BgNodeClient.js';
import { CachePolicy } from '../../../enums.js';
import { testConfig } from '../../helpers/testConfig.js';

describe('operations.myUser.updateMyUser', () => {
  test('should update the user', async () => {
    // testTimeout = 10000;
    testConfig.myUserId = '67ce0a28b67bdfe03ba8fdf4';
    testConfig.authToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2N2NlMGEyOGI2N2JkZmUwM2JhOGZkZjQiLCJkZXZpY2VVdWlkIjoiYWIyOWZiN2YzNjhhNGIyNmJmYzNhZGQxNmJlZjBlMjMiLCJpYXQiOjE3NDE1NTYyNjR9.jNYoDtxaxlscepaS7yWKMnNwWPGr7KIl1pTzk7KiVNQ';
    testConfig.myUserDeviceUuid = 'ab29fb7f368a4b26bfc3add16bef0e23';

    const client = await new BgNodeClient().init(testConfig);

    let myUser = await client.operations.myUser.findMyUser({ cachePolicy: CachePolicy.network });
    const lastName = myUser.lastName;

    expect(myUser.id).toBe(testConfig.myUserId);
    expect(myUser.userHandle).toBe('rehza');
    expect(myUser.email).toBe('pametez@vabgijwap.mx');

    await client.operations.myUser.updateMyUser(
      {
        id: testConfig.myUserId,
        lastName: 'Antonin',
      },
      { cachePolicy: CachePolicy.network },
    );

    await new Promise((resolve) => setTimeout(resolve, 1000));

    myUser = await client.operations.myUser.findMyUser({ cachePolicy: CachePolicy.network });

    expect(myUser.id).toBe(testConfig.myUserId);
    expect(myUser.userHandle).toBe('rehza');
    expect(myUser.email).toBe('pametez@vabgijwap.mx');
    expect(myUser.lastName).toBe('Antonin');

    await client.operations.myUser.updateMyUser(
      {
        id: testConfig.myUserId,
        lastName,
      },
      { cachePolicy: CachePolicy.network },
    );

    await new Promise((resolve) => setTimeout(resolve, 1000));

    myUser = await client.operations.myUser.findMyUser({ cachePolicy: CachePolicy.network });

    expect(myUser.id).toBe(testConfig.myUserId);
    expect(myUser.userHandle).toBe('rehza');
    expect(myUser.email).toBe('pametez@vabgijwap.mx');
    expect(myUser.lastName).toBe(lastName);
  });
}, 60000);
