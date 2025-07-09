import { expect } from 'vitest';
import logger from '../../../helpers/logger.js';
import walletItemFactory from '../../factories/walletItem.js';
export const createWalletItemTransferSpecHelper = async (props, client) => {
    logger.debug('createWalletItemTransferSpecHelper called.', { props });
    if (!props) {
        props = {};
    }
    if (!props.walletItemId) {
        // Create a wallet item for the transfer
        const walletItem = await walletItemFactory.create({}, undefined, 1);
        props.walletItemId = Array.isArray(walletItem) ? walletItem[0].id : walletItem.id;
    }
    if (!props.createdBy) {
        props.createdBy = client.clientInfoStore.myUserId;
    }
    const response = await client.operations.walletItemTransfer.createWalletItemTransfer(props);
    const walletItemTransfer = response.object;
    expect(response.error).toBeUndefined();
    expect(walletItemTransfer).toBeDefined();
    return { walletItemTransfer };
};
//# sourceMappingURL=createWalletItemTransfer.specHelper.js.map