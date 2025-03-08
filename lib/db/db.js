import { DbType } from '../enums.js';
import data from '../helpers/data.js';
import memStore from './mem/memStore.js';
// import rxdbHelpers from './rxdb/helpers/db.js';
import rxDbStore from './rxdb/rxDbStore.js';
const db = {
    delete: (id, modelType) => {
        if (data.config()?.dbType === DbType.mem) {
            return memStore.delete(id, modelType);
        }
        if (data.config()?.dbType === DbType.rxdb) {
            return rxDbStore.delete(id, modelType);
        }
        throw new Error('invalid-store-type');
    },
    find: async (match, type) => {
        if (data.config()?.dbType === DbType.mem) {
            return memStore.find(match, type);
        }
        if (data.config()?.dbType === DbType.rxdb) {
            return rxDbStore.find(match, type);
        }
        throw new Error('invalid-store-type');
    },
    findAll: async (type) => {
        if (data.config()?.dbType === DbType.mem) {
            return memStore.findAll(type);
        }
        if (data.config()?.dbType === DbType.rxdb) {
            return rxDbStore.findAll(type);
        }
        throw new Error('invalid-store-type');
    },
    findById: (id, modelType) => {
        if (data.config()?.dbType === DbType.mem) {
            return memStore.findById(id, modelType);
        }
        if (data.config()?.dbType === DbType.rxdb) {
            return rxDbStore.findById(id, modelType);
        }
        throw new Error('invalid-store-type');
    },
    findOne: (match, modelType) => {
        if (data.config()?.dbType === DbType.mem) {
            return memStore.findOne(match, modelType);
        }
        if (data.config()?.dbType === DbType.rxdb) {
            return rxDbStore.findOne(match, modelType);
        }
        throw new Error('invalid-store-type');
    },
    init: async (config) => {
        if (data.config()?.dbType === DbType.mem) {
            return memStore.init(config);
        }
        if (data.config()?.dbType === DbType.rxdb) {
            return rxDbStore.init(config);
        }
        throw new Error('invalid-store-type');
    },
    insert: (obj, modelType) => {
        if (!obj.createdAt) {
            obj.createdAt = new Date().toISOString();
        }
        if (!obj.updatedAt) {
            obj.updatedAt = new Date().toISOString();
        }
        if (data.config()?.dbType === DbType.mem) {
            return memStore.insert(obj, modelType);
        }
        if (data.config()?.dbType === DbType.rxdb) {
            return rxDbStore.insert(obj, modelType);
        }
        throw new Error('invalid-store-type');
    },
    isConnected: () => {
        if (data.config()?.dbType === DbType.mem) {
            return true;
        }
        if (data.config()?.dbType === DbType.rxdb) {
            return rxDbStore.isConnected();
        }
        return false;
    },
    // libSignalStores: rxdbHelpers.getLibSignalStores,
    replace: (obj, modelType) => {
        if (data.config()?.dbType === DbType.mem) {
            return memStore.replace(obj, modelType);
        }
        if (data.config()?.dbType === DbType.rxdb) {
            return rxDbStore.replace(obj, modelType);
        }
        throw new Error('invalid-store-type');
    },
    update: (changes, modelType) => {
        if (!changes.updatedAt) {
            changes.updatedAt = new Date().toISOString();
        }
        if (data.config()?.dbType === DbType.mem) {
            return memStore.update(changes, modelType);
        }
        if (data.config()?.dbType === DbType.rxdb) {
            return rxDbStore.update(changes, modelType);
        }
        throw new Error('invalid-store-type');
    },
};
export default db;
//# sourceMappingURL=db.js.map