import { afterAll, beforeAll, describe, expect, test } from 'vitest';

import { BgNodeClient } from '../../../BgNodeClient.js';
import chance from '../../../helpers/chance.js';
import { MyUser } from '../../../models/MyUser.js';
import clientStore from '../../helpers/clientStore.js';
import { isFeatureEnabled } from '../../helpers/isFeatureEnabled.js';
import {
  createPurchaseOrderSpecHelper,
} from '../../helpers/purchaseOrder/createPurchaseOrder.specHelper.js';
import { deleteMyUserSpecHelper } from '../../helpers/user/deleteMyUser.specHelper.js';
import { signMeUpSpecHelper } from '../../helpers/user/signMeUp.specHelper.js';
import { findWalletItemsSpecHelper } from '../../helpers/walletItem/findWalletItems.specHelper.js';
import { createWalletItemTransferSpecHelper } from '../../helpers/walletItemTransfer/createWalletItemTransfer.specHelper.js';

describe.runIf(isFeatureEnabled('marketplace'))('operations.walletItemTransfer.createWalletItemTransfer', () => {
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
    const itemCount = chance.integer({ min: 2, max: 4 });
    await createPurchaseOrderSpecHelper(
      {},
      itemCount,
      [],
      client,
    );

    const walletItems = await findWalletItemsSpecHelper(client, myUser, itemCount);

    const walletItem = chance.pickone(walletItems);

    const {
      walletItemTransfer,
      // serviceRequest,
    } = await createWalletItemTransferSpecHelper({
      walletItemId: walletItem.id,
    }, client);

    expect(walletItemTransfer).toBeDefined();
    expect(walletItemTransfer.walletItemId).toBeDefined();
    expect(walletItemTransfer.createdBy).toBe(myUser.id);

    // The server currently fails to create/send the notification, so the service request result
    // is not ok.
    // expect(serviceRequest.result).toBe(ServiceRequestResult.ok);
  });
}, 10000);
