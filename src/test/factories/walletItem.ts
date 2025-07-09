import { Factory } from 'rosie';

import { ModelType } from '../../enums.js';
import create from './helpers/create.js';
import deleteFunc from './helpers/delete.js';
import save from './helpers/save.js';
import randomDate from '../../helpers/randomDate.js';
import { WalletItem } from '../../models/WalletItem.js';

interface WalletItemFactoryType {
  create: (
    props: Partial<WalletItem> | Partial<WalletItem>[],
    options?: any,
    count?: number,
  ) => Promise<WalletItem | WalletItem[]>;
  save: (walletItem: WalletItem) => Promise<WalletItem>;
  delete: (walletItem: WalletItem) => Promise<WalletItem>;
}

const walletItemFactory = (Factory.define<WalletItem>('WalletItem', WalletItem)
  .attr('walletId', 'test-wallet-id')
  .attr('productId', 'test-product-id')
  .attr('brandId', 'test-brand-id')
  .attr('name', 'Test Wallet Item')
  .attr('price', 100)
  .attr('initialBalance', 100)
  .attr('balance', 100)
  .attr('createdAt', () => randomDate()) as unknown) as WalletItemFactoryType;

walletItemFactory.create = (
  props: Partial<WalletItem> | Partial<WalletItem>[],
  options?: any,
  count?: number,
): Promise<WalletItem | WalletItem[]> =>
  create<WalletItem>(props, ModelType.WalletItem, options, count);

walletItemFactory.save = async (walletItem: WalletItem): Promise<WalletItem> =>
  save(walletItem);

walletItemFactory.delete = async (walletItem: WalletItem): Promise<WalletItem> => {
  await deleteFunc(walletItem.id, ModelType.WalletItem);
  return walletItem;
};

export default walletItemFactory;