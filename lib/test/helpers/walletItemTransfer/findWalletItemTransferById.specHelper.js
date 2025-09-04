import { expect } from 'vitest';
import logger from '../../../helpers/logger.js';
export const findWalletItemTransferById = async (id, client) => {
    logger.debug('BgServiceApiCheck.findWalletItemTransferById: calling API/findWalletItemTransferById', { id });
    const walletItemResult = await client.operations.walletItemTransfer.findWalletItemTransferById(id, undefined);
    const item = walletItemResult.object;
    expect(walletItemResult.error).toBeUndefined();
    expect(walletItemResult.object).toBeTruthy();
    return item;
};
//# sourceMappingURL=findWalletItemTransferById.specHelper.js.map