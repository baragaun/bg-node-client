import { expect } from 'vitest';

import { BgNodeClient } from '../../../BgNodeClient.js';
import logger from '../../../helpers/logger.js';
import { WalletItemTransfer } from '../../../models/WalletItemTransfer.js';
import walletItemFactory from '../../factories/walletItem.js';

export const createWalletItemTransferSpecHelper = async (
  props: Partial<WalletItemTransfer> | undefined,
  client: BgNodeClient,
): Promise<{ walletItemTransfer: WalletItemTransfer }> => {
  logger.debug('createWalletItemTransferSpecHelper called.', { props });

  if (!props) {
    props = {};
  }

  if (!props.walletItemId) {
    // Create a wallet item for the transfer
    const walletItem = await walletItemFactory.create({}, undefined, 1) as any;
    props.walletItemId = Array.isArray(walletItem) ? walletItem[0].id : walletItem.id;
  }

  if (!props.createdBy) {
    props.createdBy = client.clientInfoStore.myUserId;
  }

  const response = await client.operations.walletItemTransfer.createWalletItemTransfer(props);
  const walletItemTransfer = response.object as WalletItemTransfer;

  expect(response.error).toBeUndefined();
  expect(walletItemTransfer).toBeDefined();

  return { walletItemTransfer };
};