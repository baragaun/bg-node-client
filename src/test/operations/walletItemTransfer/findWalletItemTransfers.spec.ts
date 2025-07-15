import { afterAll, beforeAll, describe, expect, test } from 'vitest';

import { BgNodeClient } from '../../../BgNodeClient.js';
import { MyUser } from '../../../models/MyUser.js';
import findWalletItemTransfers from '../../../operations/walletItemTransfer/findWalletItemTransfers.js';
import clientStore from '../../helpers/clientStore.js';
import { deleteMyUserSpecHelper } from '../../helpers/user/deleteMyUser.specHelper.js';
import { signMeUpSpecHelper } from '../../helpers/user/signMeUp.specHelper.js';
import { createWalletItemTransferSpecHelper } from '../../helpers/walletItemTransfer/createWalletItemTransfer.specHelper.js';


describe('operations.walletItemTransfer.findWalletItemTransfers', () => {
  let client: BgNodeClient;
  let myUser: MyUser;
  let walletItemTransferId: string;

  beforeAll(async () => {
    client = await clientStore.getTestClient();
    myUser = await signMeUpSpecHelper(undefined, false, client);
    const { walletItemTransfer } = await createWalletItemTransferSpecHelper({}, client);
    walletItemTransferId = walletItemTransfer.id;
  });

  afterAll(async () => {
    await deleteMyUserSpecHelper(client);
  });

  test('should find the created wallet item transfer', async () => {
    const result = await findWalletItemTransfers(
      undefined,
      { createdBy: myUser.id },
      undefined,
      {},
    );
    expect(result.error).toBeUndefined();
    expect(result.objects).toBeDefined();
    expect(result.objects.length).toBeGreaterThan(0);
    expect(result.objects[0].id).toBe(walletItemTransferId);
  });
});