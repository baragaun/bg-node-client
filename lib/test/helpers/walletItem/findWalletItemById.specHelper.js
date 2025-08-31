import { expect } from 'vitest';
import logger from '../../../helpers/logger.js';
export const findWalletItemById = async (id, client) => {
    logger.debug('BgServiceApiCheck.findWalletItemById: calling API/findWalletItemById', { id });
    const walletItemResult = await client.operations.walletItem.findWalletItemById(id, undefined);
    const item = walletItemResult.object;
    expect(walletItemResult.error).toBeUndefined();
    expect(walletItemResult.object).toBeTruthy();
    return item;
};
//# sourceMappingURL=findWalletItemById.specHelper.js.map