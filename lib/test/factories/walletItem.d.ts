import { WalletItem } from '../../models/WalletItem.js';
interface WalletItemFactoryType {
    create: (props: Partial<WalletItem> | Partial<WalletItem>[], options?: any, count?: number) => Promise<WalletItem | WalletItem[]>;
    save: (walletItem: WalletItem) => Promise<WalletItem>;
    delete: (walletItem: WalletItem) => Promise<WalletItem>;
}
declare const walletItemFactory: WalletItemFactoryType;
export default walletItemFactory;
