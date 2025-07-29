import { BgNodeClient } from '../../../BgNodeClient.js';
import { MyUser } from '../../../models/MyUser.js';
import { WalletItem } from '../../../models/WalletItem.js';
export declare const findWalletItemsSpecHelper: (client: BgNodeClient, myUser: MyUser, itemCount: number) => Promise<WalletItem[]>;
