import { Factory } from 'rosie';

import { WalletItemTransferFactory } from './definitions.js';
import { ModelType } from '../../enums.js';
import create from './helpers/create.js';
import deleteFunc from './helpers/delete.js';
import save from './helpers/save.js';
import chance from '../../helpers/chance.js';
import randomDate from '../../helpers/randomDate.js';
import { WalletItemTransfer } from '../../models/WalletItemTransfer.js';

const walletItemTransferFactory = Factory.define<WalletItemTransfer>('WalletItemTransfer', WalletItemTransfer)
  .attr('recipientFullName', () => chance.name())
  .attr('recipientEmail', () => chance.email())
  .attr('messageText', () => chance.sentence())
  .attr('createdAt', () => randomDate()) as WalletItemTransferFactory;

walletItemTransferFactory.create = (
  props: Partial<WalletItemTransfer> | Partial<WalletItemTransfer>[],
  options?: any,
  count?: number,
): Promise<WalletItemTransfer | WalletItemTransfer[]> =>
  create<WalletItemTransfer>(props, ModelType.WalletItemTransfer, options, count);

walletItemTransferFactory.save = async (walletItemTransfer: WalletItemTransfer): Promise<WalletItemTransfer> =>
  save(walletItemTransfer);

walletItemTransferFactory.delete = async (walletItemTransfer: WalletItemTransfer): Promise<WalletItemTransfer> => {
  await deleteFunc(walletItemTransfer.id, ModelType.WalletItemTransfer);

  return walletItemTransfer;
};

export default walletItemTransferFactory;
