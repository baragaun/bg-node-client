import { BgNodeClient } from '../../../BgNodeClient.js';
import { WalletItem } from '../../../models/WalletItem.js';
export declare const createWalletItemSpecHelper: (props: Partial<WalletItem> | undefined, client: BgNodeClient) => Promise<WalletItem | null>;
