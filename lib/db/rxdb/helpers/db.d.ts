import { RxDatabase } from 'rxdb';
import { LibSignalStores } from '../libSignalStores/LibSignalStores.js';
declare const _default: {
    getDb: () => RxDatabase | undefined;
    getLibSignalStores: () => LibSignalStores | undefined;
    setDb: (db: RxDatabase) => void;
    setLibSignalStores: (libSignalStores: LibSignalStores) => void;
};
export default _default;
