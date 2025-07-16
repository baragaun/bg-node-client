import { BgNodeClient } from '../../../BgNodeClient.js';
import { ServiceRequest } from '../../../models/ServiceRequest.js';
import { WalletItemTransfer } from '../../../models/WalletItemTransfer.js';
export declare const createWalletItemTransferSpecHelper: (props: Partial<WalletItemTransfer>, client: BgNodeClient) => Promise<{
    walletItemTransfer: WalletItemTransfer;
    serviceRequest: ServiceRequest;
}>;
