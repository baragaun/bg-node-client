import { expect } from 'vitest';

import { BgNodeClient } from '../../../BgNodeClient.js';
import logger from '../../../helpers/logger.js';
import { WalletItem } from '../../../models/WalletItem.js';

export const findWalletItemByTransferSlugSpecHelper = async (
    client: BgNodeClient,
    transferSlug: string,
): Promise<WalletItem> => {
    logger.debug('BgServiceApiCheck.findWalletItemByTransferSlug: calling API/findWalletItemByTransferSlug',
        { transferSlug });

    const walletItemResult = await client.operations.walletItem.findWalletItemByTransferSlug(
        transferSlug,
        undefined,
    );
    const item = walletItemResult.object;
    expect(walletItemResult.error).toBeUndefined();
    expect(walletItemResult.object).toBeTruthy();

    return item;
};

