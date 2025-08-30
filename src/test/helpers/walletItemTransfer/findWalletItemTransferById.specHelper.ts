import { expect } from 'vitest';

import { BgNodeClient } from '../../../BgNodeClient.js';
import logger from '../../../helpers/logger.js';
import { WalletItemTransfer } from '../../../models/WalletItemTransfer.js';

export const findWalletItemTransferById = async (
    id: string,
    client: BgNodeClient,
): Promise<WalletItemTransfer | null> => {
    logger.debug('BgServiceApiCheck.findWalletItemTransferById: calling API/findWalletItemTransferById',
        { id });

    const walletItemResult = await client.operations.walletItemTransfer.findWalletItemTransferById(
        id,
        undefined,
    );
    const item = walletItemResult.object;

    expect(walletItemResult.error).toBeUndefined();
    expect(walletItemResult.object).toBeTruthy();

    return item;
};

