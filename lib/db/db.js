import { DbType } from '../types/enums.js';
import memStore from './mem/memStore.js';
import rxDbStore from './rxdb/rxDbStore.js';
let _config;
const db = {
    delete: (id, modelType) => {
        if (_config?.dbType === DbType.mem) {
            return memStore.delete(id, modelType);
        }
        if (_config?.dbType === DbType.rxdb) {
            return rxDbStore.delete(id, modelType);
        }
        throw new Error('invalid-store-type');
    },
    findAll: async (type) => {
        if (_config?.dbType === DbType.mem) {
            return memStore.findAll(type);
        }
        if (_config?.dbType === DbType.rxdb) {
            return rxDbStore.findAll(type);
        }
        throw new Error('invalid-store-type');
    },
    findById: (id, modelType) => {
        if (_config?.dbType === DbType.mem) {
            return memStore.findById(id, modelType);
        }
        if (_config?.dbType === DbType.rxdb) {
            return rxDbStore.findById(id, modelType);
        }
        throw new Error('invalid-store-type');
    },
    findOne: (match, modelType) => {
        if (_config?.dbType === DbType.mem) {
            return memStore.findOne(match, modelType);
        }
        if (_config?.dbType === DbType.rxdb) {
            return rxDbStore.findOne(match, modelType);
        }
        throw new Error('invalid-store-type');
    },
    init: async (config) => {
        _config = config;
    },
    insert: (obj) => {
        if (!obj.createdAt) {
            obj.createdAt = new Date();
        }
        if (!obj.updatedAt) {
            obj.updatedAt = new Date();
        }
        if (_config?.dbType === DbType.mem) {
            return memStore.insert(obj);
        }
        if (_config?.dbType === DbType.rxdb) {
            return rxDbStore.insert(obj);
        }
        throw new Error('invalid-store-type');
    },
    replace: (obj) => {
        if (_config?.dbType === DbType.mem) {
            return memStore.replace(obj);
        }
        if (_config?.dbType === DbType.rxdb) {
            return rxDbStore.replace(obj);
        }
        throw new Error('invalid-store-type');
    },
    update: (changes, modelType) => {
        if (!changes.updatedAt) {
            changes.updatedAt = new Date();
        }
        if (_config?.dbType === DbType.mem) {
            return memStore.update(changes, modelType);
        }
        if (_config?.dbType === DbType.rxdb) {
            return rxDbStore.update(changes, modelType);
        }
        throw new Error('invalid-store-type');
    },
};
export default db;
//# sourceMappingURL=db.js.map