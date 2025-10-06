import { afterAll, beforeAll, describe, expect, test } from 'vitest';

import { BgNodeClient } from '../../../BgNodeClient.js';
import chance from '../../../helpers/chance.js';
import { MyUser } from '../../../models/MyUser.js';
import { WalletItemTransfer } from '../../../models/WalletItemTransfer.js';
import updateWalletItemTransfer from '../../../operations/walletItemTransfer/updateWalletItemTransfer.js';
import clientStore from '../../helpers/clientStore.js';
import { createPurchaseOrderSpecHelper } from '../../helpers/purchaseOrder/createPurchaseOrder.specHelper.js';
import { deleteMyUserSpecHelper } from '../../helpers/user/deleteMyUser.specHelper.js';
import { signMeUpSpecHelper } from '../../helpers/user/signMeUp.specHelper.js';
import { findWalletItemsSpecHelper } from '../../helpers/walletItem/findWalletItems.specHelper.js';
import { createWalletItemTransferSpecHelper } from '../../helpers/walletItemTransfer/createWalletItemTransfer.specHelper.js';

describe('operations.walletItemTransfer.updateWalletItemTransfer', () => {
  let client: BgNodeClient;
  let myUser: MyUser;
  let walletItemTransfer: WalletItemTransfer;

  beforeAll(async () => {
    client = await clientStore.getTestClient();
    myUser = await signMeUpSpecHelper(undefined, false, client);
  });

  afterAll(async () => {
    await deleteMyUserSpecHelper(client);
  });

  test('should update wallet item transfer properties', async () => {
    const itemCount = 1;
    await createPurchaseOrderSpecHelper(
      {},
      itemCount,
      [],
      client,
    );

    const walletItems = await findWalletItemsSpecHelper(client, myUser, itemCount);
    const walletItem = walletItems[0];

    const { walletItemTransfer: createdTransfer } = await createWalletItemTransferSpecHelper({
      walletItemId: walletItem.id,
    }, client);

    walletItemTransfer = createdTransfer;

    // Update the wallet item transfer
    const newRecipientName = chance.name();
    const newRecipientEmail = chance.email();
    const newMessageText = chance.sentence();

    const updateChanges: Partial<WalletItemTransfer> = {
      id: walletItemTransfer.id,
      recipientFullName: newRecipientName,
      recipientEmail: newRecipientEmail,
      messageText: newMessageText,
    };

    const result = await updateWalletItemTransfer(updateChanges);

    expect(result.error).toBeUndefined();
    expect(result.object).toBeTruthy();
    expect(result.object.id).toBe(walletItemTransfer.id);
    expect(result.object.recipientFullName).toBe(newRecipientName);
    expect(result.object.recipientEmail).toBe(newRecipientEmail);
    expect(result.object.messageText).toBe(newMessageText);
    expect(result.object.walletItemId).toBe(walletItem.id);
  }, 10000);

  test('should handle partial updates', async () => {
    // Only update the message text
    const newMessageText = chance.sentence();

    const updateChanges: Partial<WalletItemTransfer> = {
      id: walletItemTransfer.id,
      messageText: newMessageText,
    };

    const result = await updateWalletItemTransfer(updateChanges);

    expect(result.error).toBeUndefined();
    expect(result.object).toBeTruthy();
    expect(result.object.id).toBe(walletItemTransfer.id);
    expect(result.object.messageText).toBe(newMessageText);
    // Other properties should remain unchanged
    expect(result.object.walletItemId).toBe(walletItemTransfer.walletItemId);
  }, 10000);

  test('should return error for invalid id', async () => {
    const invalidId = chance.guid();
    const updateChanges: Partial<WalletItemTransfer> = {
      id: invalidId,
      messageText: chance.sentence(),
    };

    const result = await updateWalletItemTransfer(updateChanges);

    expect(result.error).toBeDefined();
    expect(result.object).toBeUndefined();
  }, 10000);
});
