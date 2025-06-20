import { Factory } from 'rosie';

import { WalletFactory } from './definitions.js';
import { ModelType } from '../../enums.js';
import create from './helpers/create.js';
import deleteFunc from './helpers/delete.js';
import save from './helpers/save.js';
// import chance from '../../helpers/chance.js';
import randomDate from '../../helpers/randomDate.js';
import { Wallet } from '../../models/Wallet.js';

const walletFactory = Factory.define<Wallet>('Wallet', Wallet)
  // .attr('name', () => chance.word())
  // .attr('topic', () => chance.sentence())
  // .attr('description', () => chance.paragraph())
  .attr('createdAt', () => randomDate()) as WalletFactory;

walletFactory.create = (
  props: Partial<Wallet> | Partial<Wallet>[],
  options?: any,
  count?: number,
): Promise<Wallet | Wallet[]> =>
  create<Wallet>(props, ModelType.Wallet, options, count);

walletFactory.save = async (wallet: Wallet): Promise<Wallet> =>
  save(wallet);

walletFactory.delete = async (wallet: Wallet): Promise<Wallet> => {
  await deleteFunc(wallet.id, ModelType.Wallet);

  return wallet;
};

export default walletFactory;
