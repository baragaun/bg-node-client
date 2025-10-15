import { beforeAll, describe, expect, test } from 'vitest';

import { BgNodeClient } from '../../../BgNodeClient.js';
import chance from '../../../helpers/chance.js';
import { WalletItemTransfer } from '../../../index.js';
import { MyUser } from '../../../models/MyUser.js';
import findWalletItemTransferRecipientInfoByTransferSlug from '../../../operations/walletItemTransfer/findWalletItemTransferRecipientInfoByTransferSlug.js';
import clientStore from '../../helpers/clientStore.js';
import { createPurchaseOrderSpecHelper } from '../../helpers/purchaseOrder/createPurchaseOrder.specHelper.js';
import { deleteMyUserSpecHelper } from '../../helpers/user/deleteMyUser.specHelper.js';
import { signMeUpSpecHelper } from '../../helpers/user/signMeUp.specHelper.js';
import { findWalletItemsSpecHelper } from '../../helpers/walletItem/findWalletItems.specHelper.js';
import { createWalletItemTransferSpecHelper } from '../../helpers/walletItemTransfer/createWalletItemTransfer.specHelper.js';


describe('operations.walletItemTransfer.findWalletItemTransferRecipientInfoByTransferSlug', () => {
  let client: BgNodeClient;
  let myUser: MyUser;
  const walletItemTransfers: WalletItemTransfer[] = [];
  let walletItemTransfer: WalletItemTransfer;

  beforeAll(async () => {
    client = await clientStore.getTestClient();
    myUser = await signMeUpSpecHelper(undefined, false, client);
  });

  test('should find the created wallet item transfer as anonymous user', async () => {
    const itemCount = chance.integer({ min: 2, max: 4 });
    await createPurchaseOrderSpecHelper(
      {},
      itemCount,
      [],
      client,
    );

    const walletItems = await findWalletItemsSpecHelper(client, myUser, itemCount);

    for (const item of walletItems) {
      const response = await createWalletItemTransferSpecHelper({
        walletItemId: item.id,
      }, client);
      walletItemTransfers.push(response.walletItemTransfer);
    }

    // This deletes the user, but also logs out the client. All API requests after this are
    // made as an anonymous user.
    await deleteMyUserSpecHelper(client);

    walletItemTransfer = chance.pickone(walletItemTransfers);

    const resultNoSecret = await findWalletItemTransferRecipientInfoByTransferSlug(
      walletItemTransfer.transferSlug,
    );
    expect(resultNoSecret.error).toBeUndefined();
    expect(resultNoSecret.object).toBeTruthy();
    expect(resultNoSecret.object.walletItemTransfer.transferSlug).toBe(walletItemTransfer.transferSlug);
    expect(resultNoSecret.object.walletItemTransfer.transferSecret).toBeFalsy();
    expect(resultNoSecret.object.walletItemTransfer.passwordHash).toBeFalsy();
    expect(resultNoSecret.object.walletItem).toBeTruthy();
    expect(resultNoSecret.object.walletItem.code).toBeFalsy(); // without sending the secret, this should not be returned
    expect(resultNoSecret.object.walletItem.pin).toBeFalsy(); // without sending the secret, this should not be returned
    expect(resultNoSecret.object.product).toBeTruthy();
    expect(resultNoSecret.object.brand).toBeTruthy();

    const resultWithSecret = await findWalletItemTransferRecipientInfoByTransferSlug(
      walletItemTransfer.transferSlug,
      walletItemTransfer.transferSecret,
    );
    expect(resultWithSecret.error).toBeUndefined();
    expect(resultWithSecret.object).toBeTruthy();
    expect(resultWithSecret.object.walletItemTransfer.transferSlug).toBe(walletItemTransfer.transferSlug);
    expect(resultWithSecret.object.walletItemTransfer.transferSecret).toBeFalsy();
    expect(resultWithSecret.object.walletItemTransfer.passwordHash).toBeFalsy();
    expect(resultWithSecret.object.walletItem).toBeTruthy();
    expect(resultWithSecret.object.walletItem.code).toBeFalsy(); // we sent the secret, but the transfer has not yet been accepted
    expect(resultWithSecret.object.walletItem.pin).toBeFalsy(); // we sent the secret, but the transfer has not yet been accepted
    expect(resultWithSecret.object.product).toBeTruthy();
    expect(resultWithSecret.object.brand).toBeTruthy();

    const acceptResponse = await client.operations.walletItemTransfer.acceptWalletItemTransfer(
      walletItemTransfer.transferSlug,
      walletItemTransfer.transferSecret,
    );

    expect(acceptResponse.error).toBeUndefined();
    expect(acceptResponse.object).toBeTruthy();

    const resultWithSecretAccepted = await findWalletItemTransferRecipientInfoByTransferSlug(
      walletItemTransfer.transferSlug,
      walletItemTransfer.transferSecret,
    );
    expect(resultWithSecretAccepted.error).toBeUndefined();
    expect(resultWithSecretAccepted.object).toBeTruthy();
    expect(resultWithSecretAccepted.object.walletItemTransfer.transferSlug).toBe(walletItemTransfer.transferSlug);
    expect(resultWithSecretAccepted.object.walletItemTransfer.transferSecret).toBeFalsy();
    expect(resultWithSecretAccepted.object.walletItemTransfer.passwordHash).toBeFalsy();
    expect(resultWithSecretAccepted.object.walletItem).toBeTruthy();
    expect(resultWithSecretAccepted.object.walletItem.code).toBeTruthy(); // we sent the secret, so this should be returned
    expect(resultWithSecretAccepted.object.walletItem.pin).toBeTruthy(); // we sent the secret, so this should be returned
    expect(resultWithSecretAccepted.object.product).toBeTruthy();
    expect(resultWithSecretAccepted.object.brand).toBeTruthy();
  }, 20000);
});
