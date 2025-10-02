import fsdata from '../../fsdata/fsdata.js';
const updateWalletItemTransferPassword = async (transferSlug, transferSecret, password) => {
    return fsdata.walletItemTransfer.updateWalletItemTransferPassword(transferSlug, transferSecret, password);
};
export default updateWalletItemTransferPassword;
//# sourceMappingURL=updateWalletItemTransferPassword.js.map