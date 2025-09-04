import { expect } from 'vitest';

import { BgNodeClient } from '../../../BgNodeClient.js';
import { CachePolicy } from '../../../enums.js';
import logger from '../../../helpers/logger.js';
import { MyUser } from '../../../models/MyUser.js';
import { WalletItem } from '../../../models/WalletItem.js';

export const findWalletItemsSpecHelper = async (
    client: BgNodeClient,
    myUser: MyUser,
    itemCount: number,
): Promise<WalletItem[]> => {
    logger.debug('BgServiceApiCheck.findWalletItems: calling API/findWalletItems');

    const walletItemsResult = await client.operations.walletItem.findWalletItems(
        undefined,
        { walletId: myUser.id },
        undefined,
        undefined,
        { cachePolicy: CachePolicy.network },
    );
    const items = walletItemsResult.objects;
    expect(walletItemsResult.error).toBeUndefined();
    expect(walletItemsResult.objects).toBeTruthy();
    expect(items.length).toBeGreaterThanOrEqual(itemCount);

    return items;
};

