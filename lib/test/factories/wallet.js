import { Factory } from 'rosie';
import { ModelType } from '../../enums.js';
import create from './helpers/create.js';
import deleteFunc from './helpers/delete.js';
import save from './helpers/save.js';
// import chance from '../../helpers/chance.js';
import randomDate from '../../helpers/randomDate.js';
import { Wallet } from '../../models/Wallet.js';
const walletFactory = Factory.define('Wallet', Wallet)
    // .attr('name', () => chance.word())
    // .attr('topic', () => chance.sentence())
    // .attr('description', () => chance.paragraph())
    .attr('createdAt', () => randomDate());
walletFactory.create = (props, options, count) => create(props, ModelType.Wallet, options, count);
walletFactory.save = async (wallet) => save(wallet);
walletFactory.delete = async (wallet) => {
    await deleteFunc(wallet.id, ModelType.Wallet);
    return wallet;
};
export default walletFactory;
//# sourceMappingURL=wallet.js.map