import db from './helpers/db.js';
import { LibSignalStores } from './libSignalStores/LibSignalStores.js';
const initLibSignal = async (myUser, config) => {
    if (config.libSignal?.enable && myUser?.id) {
        const libSignalStores = new LibSignalStores(db.getDb(), config);
        await libSignalStores.init(myUser);
        db.setLibSignalStores(libSignalStores);
    }
};
export default initLibSignal;
//# sourceMappingURL=initLibSignal.js.map