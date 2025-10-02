import fsdata from '../../fsdata/fsdata.js';
const verifyWalletItemTransferPassword = async (transferSlug, password) => {
    return fsdata.walletItemTransfer.verifyWalletItemTransferPassword(transferSlug, password);
};
export default verifyWalletItemTransferPassword;
//# sourceMappingURL=verifyWalletItemTransferPassword.js.map