import { BgNodeClient } from '../../../BgNodeClient.js';
import { WalletItem } from '../../../models/WalletItem.js';
export declare const findWalletItemById: (id: string, client: BgNodeClient) => Promise<WalletItem | null>;
