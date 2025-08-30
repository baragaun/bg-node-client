import { expect } from 'vitest';

import { BgNodeClient } from '../../../BgNodeClient.js';
import logger from '../../../helpers/logger.js';
import { WalletItem } from '../../../models/WalletItem.js';

export const findWalletItemById = async (
    id: string,
    client: BgNodeClient,
): Promise<WalletItem | null> => {
    logger.debug('BgServiceApiCheck.findWalletItemById: calling API/findWalletItemById',
        { id });

    const walletItemResult = await client.operations.walletItem.findWalletItemById(
        id
    );
    const item = walletItemResult.object;
    expect(walletItemResult.error).toBeUndefined();
    expect(walletItemResult.object).toBeTruthy();

    return item;
};

