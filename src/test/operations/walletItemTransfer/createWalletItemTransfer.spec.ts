import { afterAll, beforeAll, describe, expect, test } from 'vitest';

import { BgNodeClient } from '../../../BgNodeClient.js';
import { MyUser } from '../../../models/MyUser.js';
import clientStore from '../../helpers/clientStore.js';
import { deleteMyUserSpecHelper } from '../../helpers/user/deleteMyUser.specHelper.js';
import { signMeUpSpecHelper } from '../../helpers/user/signMeUp.specHelper.js';
import { createWalletItemTransferSpecHelper } from '../../helpers/walletItemTransfer/createWalletItemTransfer.specHelper.js';

describe('operations.walletItemTransfer.createWalletItemTransfer', () => {
  let client: BgNodeClient;
  let myUser: MyUser;

  beforeAll(async () => {
    client = await clientStore.getTestClient();
    myUser = await signMeUpSpecHelper(undefined, false, client);
  });

  afterAll(async () => {
    await deleteMyUserSpecHelper(client);
  });

  test('should create and return a wallet item transfer', async () => {
    const { walletItemTransfer } = await createWalletItemTransferSpecHelper({}, client);
    expect(walletItemTransfer).toBeDefined();
    expect(walletItemTransfer.walletItemId).toBeDefined();
    expect(walletItemTransfer.createdBy).toBe(myUser.id);
  });
}, { timeout: 10000 });