import { expect } from 'vitest';
import { CachePolicy } from '../../../enums.js';
import logger from '../../../helpers/logger.js';
export const findWalletItemsSpecHelper = async (client, myUser, itemCount) => {
    logger.debug('BgServiceApiCheck.findWalletItems: calling API/findWalletItems');
    const walletItemsResult = await client.operations.walletItem.findWalletItems(undefined, { walletId: myUser.id }, undefined, undefined, { cachePolicy: CachePolicy.network });
    const items = walletItemsResult.objects;
    expect(walletItemsResult.error).toBeUndefined();
    expect(walletItemsResult.objects).toBeDefined();
    expect(items.length).toBeGreaterThanOrEqual(itemCount);
    return items;
};
//# sourceMappingURL=findWalletItems.specHelper.js.map