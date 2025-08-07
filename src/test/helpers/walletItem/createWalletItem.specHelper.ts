import { expect } from 'vitest';

import { verifyWalletItemPropsSpecHelper } from './verifyWalletItemProps.specHelper.js';
import { BgNodeClient } from '../../../BgNodeClient.js';
import logger from '../../../helpers/logger.js';
import { WalletItem } from '../../../models/WalletItem.js';
import factories from '../../factories/factories.js';

export const createWalletItemSpecHelper = async (
  props: Partial<WalletItem> | undefined,
  client: BgNodeClient,
): Promise<WalletItem | null> => {
  logger.debug('BgServiceApiCheck.createWalletItem: calling API/createWalletItem',
    { props });

  props = factories.walletItem.build(props);
  props.createdBy = client.clientInfoStore.myUserId;
  props.walletId = client.clientInfoStore.myUserId;

  const response = await client.operations.walletItem.createWalletItem(
    props,
  );

  logger.debug('BgServiceApiCheck.createWalletItem: received createWalletItem response',
    { response });

  expect(response.error).toBeUndefined();
  expect(response.object).toBeDefined();

  const walletItem = response.object;

  expect(walletItem).toBeDefined();
  expect(walletItem.walletId).toBe(props.createdBy);
  expect(walletItem.createdBy).toBe(props.createdBy);

  verifyWalletItemPropsSpecHelper(walletItem, props);

  return walletItem;
};
