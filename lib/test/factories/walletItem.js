import { Factory } from 'rosie';
import { ModelType } from '../../enums.js';
import create from './helpers/create.js';
import deleteFunc from './helpers/delete.js';
import save from './helpers/save.js';
import randomDate from '../../helpers/randomDate.js';
import { WalletItem } from '../../models/WalletItem.js';
const walletItemFactory = Factory.define('WalletItem', WalletItem)
    .attr('walletId', 'test-wallet-id')
    .attr('productId', 'test-product-id')
    .attr('brandId', 'test-brand-id')
    .attr('name', 'Test Wallet Item')
    .attr('price', 100)
    .attr('initialBalance', 100)
    .attr('balance', 100)
    .attr('createdAt', () => randomDate());
walletItemFactory.create = (props, options, count) => create(props, ModelType.WalletItem, options, count);
walletItemFactory.save = async (walletItem) => save(walletItem);
walletItemFactory.delete = async (walletItem) => {
    await deleteFunc(walletItem.id, ModelType.WalletItem);
    return walletItem;
};
export default walletItemFactory;
//# sourceMappingURL=walletItem.js.map