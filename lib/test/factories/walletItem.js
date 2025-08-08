import { Factory } from 'rosie';
import { ModelType } from '../../enums.js';
import create from './helpers/create.js';
import deleteFunc from './helpers/delete.js';
import save from './helpers/save.js';
import chance from '../../helpers/chance.js';
import randomDate from '../../helpers/randomDate.js';
import { WalletItem } from '../../models/WalletItem.js';
// Props:
//   walletId = '';
//   productId = '';
//   purchaseOrderItemId = '';
//   brandId = '';
//   productType: ProductType = ProductType.other;
//   name = '';
//   price = 0;
//   initialBalance = 0;
//   balance = 0;
//   code?: string | null;
//   hasBarcode?: boolean | null;
//   barcodeFormat?: BarcodeType | null;
//   pin?: string | null;
//   source?: WalletItemSource | null;
//   imageSourceFront?: string | null;
//   imageSourceBack?: string | null;
//   referenceUrl?: string | null;
//   termsEn?: string | null;
//   termsUrl?: string | null;
//   instructionsEn?: string | null;
//   instructionsUrl?: string | null;
//   sortIndex = 0;
//   issuedAt?: string | null;
//   expiresAt?: string | null;
//   balanceUpdatedAt?: string | null;
//   transferredAt?: string | null;
//   archivedAt?: string | null;
const walletItemFactory = Factory.define('WalletItem', WalletItem)
    .attr('name', () => chance.word())
    .attr('createdAt', () => randomDate());
walletItemFactory.create = (props, options, count) => create(props, ModelType.WalletItem, options, count);
walletItemFactory.save = async (walletItem) => save(walletItem);
walletItemFactory.delete = async (walletItem) => {
    await deleteFunc(walletItem.id, ModelType.WalletItem);
    return walletItem;
};
export default walletItemFactory;
//# sourceMappingURL=walletItem.js.map