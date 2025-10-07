import { afterAll, beforeAll, describe, expect, test } from 'vitest';

import { BgNodeClient } from '../../../BgNodeClient.js';
import chance from '../../../helpers/chance.js';
import { MyUser } from '../../../models/MyUser.js';
import updateWalletItemTransferPassword from '../../../operations/walletItemTransfer/updateWalletItemTransferPassword.js';
import verifyWalletItemTransferPassword from '../../../operations/walletItemTransfer/verifyWalletItemTransferPassword.js';
import clientStore from '../../helpers/clientStore.js';
import { createPurchaseOrderSpecHelper } from '../../helpers/purchaseOrder/createPurchaseOrder.specHelper.js';
import { deleteMyUserSpecHelper } from '../../helpers/user/deleteMyUser.specHelper.js';
import { signMeUpSpecHelper } from '../../helpers/user/signMeUp.specHelper.js';
import { findWalletItemsSpecHelper } from '../../helpers/walletItem/findWalletItems.specHelper.js';
import { createWalletItemTransferSpecHelper } from '../../helpers/walletItemTransfer/createWalletItemTransfer.specHelper.js';

describe('operations.walletItemTransfer.verifyWalletItemTransferPassword', () => {
  let client: BgNodeClient;
  let myUser: MyUser;
  let testPassword: string;
  let transferSecret: string;
  let transferSlug: string;

  beforeAll(async () => {
    client = await clientStore.getTestClient();
    myUser = await signMeUpSpecHelper(undefined, false, client);
    transferSlug = chance.guid();
    transferSecret = chance.integer({ min: 100000, max: 999999 }).toString();
  });

  afterAll(async () => {
    await deleteMyUserSpecHelper(client);
  });

  test('should verify correct password successfully', async () => {
    const itemCount = 1;
    await createPurchaseOrderSpecHelper(
      {},
      itemCount,
      [],
      client,
    );

    const walletItems = await findWalletItemsSpecHelper(client, myUser, itemCount);
    const walletItem = walletItems[0];

    await createWalletItemTransferSpecHelper({
      walletItemId: walletItem.id,
      transferSlug,
      transferSecret,
      recipientFullName: chance.name(),
      recipientEmail: chance.email(),
      messageText: chance.sentence(),
    }, client);

    // Set a password first
    testPassword = chance.string({ length: 8, alpha: true, numeric: true });

    const updateResult = await updateWalletItemTransferPassword(
      transferSlug,
      transferSecret,
      testPassword,
    );

    expect(updateResult.error).toBeUndefined();

    // Now verify the password
    const verifyResult = await verifyWalletItemTransferPassword(
      transferSlug,
      testPassword,
    );

    expect(verifyResult.error).toBeUndefined();
    expect(verifyResult.object).toBe(true); //todo failing here
  }, 20000);

  test('should return false for incorrect password', async () => {
    const incorrectPassword = chance.string({ length: 8, alpha: true, numeric: true });

    const result = await verifyWalletItemTransferPassword(
      transferSlug,
      incorrectPassword,
    );

    expect(result.error).toBeUndefined();
    expect(result.object).toBe(false);
  }, 10000);

  test('should handle empty password verification', async () => {
    const emptyPassword = '';

    const result = await verifyWalletItemTransferPassword(
      transferSlug,
      emptyPassword,
    );

    expect(result.error).toBeUndefined();
    expect(result.object).toBe(false);
  }, 10000);

  test('should be case sensitive for password verification', async () => {
    // Set a password with mixed case
    const mixedCasePassword = 'TestPassword123';

    const updateResult = await updateWalletItemTransferPassword(
      transferSlug,
      transferSecret,
      mixedCasePassword,
    );

    expect(updateResult.error).toBeUndefined();

    // Try to verify with different case
    const wrongCasePassword = 'testpassword123';

    const verifyResult = await verifyWalletItemTransferPassword(
      transferSlug,
      wrongCasePassword,
    );

    expect(verifyResult.error).toBeUndefined();
    expect(verifyResult.object).toBe(false);
  }, 20000);
});
