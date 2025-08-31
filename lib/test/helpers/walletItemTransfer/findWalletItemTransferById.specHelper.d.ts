import { BgNodeClient } from '../../../BgNodeClient.js';
import { WalletItemTransfer } from '../../../models/WalletItemTransfer.js';
export declare const findWalletItemTransferById: (id: string, client: BgNodeClient) => Promise<WalletItemTransfer | null>;
