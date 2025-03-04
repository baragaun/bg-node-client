import { BgNodeClientConfig } from '../../types/BgNodeClientConfig.js';
import { LibSignalStores } from './libSignalStores/LibSignalStores.js';
import { MyUser } from '../../types/models/MyUser.js';
import db from './helpers/db.js';

const initLibSignal = async (myUser: MyUser | null | undefined, config: BgNodeClientConfig): Promise<void> => {
  if (config.libSignal?.enable && myUser?.id) {
    const libSignalStores = new LibSignalStores(db.getDb(), config);
    await libSignalStores.init(myUser);
    db.setLibSignalStores(libSignalStores);
  }
};

export default initLibSignal;
