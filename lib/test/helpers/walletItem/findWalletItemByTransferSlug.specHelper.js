import { expect } from 'vitest';
import logger from '../../../helpers/logger.js';
export const findWalletItemByTransferSlugSpecHelper = async (client, transferSlug) => {
    logger.debug('BgServiceApiCheck.findWalletItemByTransferSlug: calling API/findWalletItemByTransferSlug', { transferSlug });
    const walletItemResult = await client.operations.walletItem.findWalletItemByTransferSlug(transferSlug, undefined);
    const item = walletItemResult.object;
    expect(walletItemResult.error).toBeUndefined();
    expect(walletItemResult.object).toBeDefined();
    return item;
};
//# sourceMappingURL=findWalletItemByTransferSlug.specHelper.js.map