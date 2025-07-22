import { Factory } from 'rosie';
import { ModelType } from '../../enums.js';
import create from './helpers/create.js';
import deleteFunc from './helpers/delete.js';
import save from './helpers/save.js';
import chance from '../../helpers/chance.js';
import randomDate from '../../helpers/randomDate.js';
import { WalletItemTransfer } from '../../models/WalletItemTransfer.js';
const walletItemTransferFactory = Factory.define('WalletItemTransfer', WalletItemTransfer)
    .attr('recipientFullName', () => chance.name())
    .attr('recipientEmail', () => chance.email())
    .attr('messageText', () => chance.sentence())
    .attr('createdAt', () => randomDate());
walletItemTransferFactory.create = (props, options, count) => create(props, ModelType.WalletItemTransfer, options, count);
walletItemTransferFactory.save = async (walletItemTransfer) => save(walletItemTransfer);
walletItemTransferFactory.delete = async (walletItemTransfer) => {
    await deleteFunc(walletItemTransfer.id, ModelType.WalletItemTransfer);
    return walletItemTransfer;
};
export default walletItemTransferFactory;
//# sourceMappingURL=walletItemTransfer.js.map