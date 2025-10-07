import { ModelType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
const findWalletItemTransferRecipientInfoByTransferSlug = async (transferSlug, transferSecret) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('findWalletItemTransferRecipientInfoByTransferSlug: unavailable');
            return { error: 'unavailable' };
        }
        const response = await fsdata.walletItemTransfer.findWalletItemTransferRecipientInfoByTransferSlug(transferSlug, transferSecret);
        if (!response.error && response.object && response.object.brand) {
            libData.setObjectInCachedList(ModelType.Brand, response.object.brand.id, response.object.brand);
        }
        return response;
    }
    catch (error) {
        return { error: error.message };
    }
};
export default findWalletItemTransferRecipientInfoByTransferSlug;
//# sourceMappingURL=findWalletItemTransferRecipientInfoByTransferSlug.js.map