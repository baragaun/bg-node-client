import { BgNodeClient } from '../../../BgNodeClient.js';
import { WalletItemTransfer } from '../../../models/WalletItemTransfer.js';
export declare const createWalletItemTransferSpecHelper: (props: Partial<WalletItemTransfer> | undefined, client: BgNodeClient) => Promise<{
    walletItemTransfer: WalletItemTransfer;
}>;
