import { BgChannelsWebClientConfig } from '../types/BgChannelsWebClientConfig.js';
import { ModelType, DbType } from '../types/enums.js';
import { ObjectType, Db } from '../types/Db.js';
import memStore from './mem/memStore.js';
import rxDbStore from './rxdb/rxDbStore.js';

let _config: BgChannelsWebClientConfig | undefined;

const db: Db = {
  init: async (config: BgChannelsWebClientConfig): Promise<void> => {
    _config = config;
  },

  findAll: async <T extends ObjectType = ObjectType>(type: ModelType): Promise<T[]> => {
    if (_config?.dbType === DbType.mem) {
      return memStore.findAll<T>(type);
    }

    if (_config?.dbType === DbType.rxdb) {
      return rxDbStore.findAll<T>(type);
    }

    throw new Error('invalid-store-type');
  },

  insert: <T extends ObjectType = ObjectType>(obj: T): Promise<T | null> => {
    if (!obj.createdAt) {
      obj.createdAt = new Date();
    }

    if (!obj.updatedAt) {
      obj.updatedAt = new Date();
    }

    if (_config?.dbType === DbType.mem) {
      return memStore.insert<T>(obj);
    }

    if (_config?.dbType === DbType.rxdb) {
      return rxDbStore.insert<T>(obj);
    }

    throw new Error('invalid-store-type');
  },

  delete: (id: string, modelType: ModelType): Promise<void> => {
    if (_config?.dbType === DbType.mem) {
      return memStore.delete(id, modelType);
    }

    if (_config?.dbType === DbType.rxdb) {
      return rxDbStore.delete(id, modelType);
    }

    throw new Error('invalid-store-type');
  },

  findById: <T extends ObjectType = ObjectType>(
    id: string,
    modelType: ModelType,
  ): Promise<T | null> => {
    if (_config?.dbType === DbType.mem) {
      return memStore.findById<T>(id, modelType);
    }

    if (_config?.dbType === DbType.rxdb) {
      return rxDbStore.findById<T>(id, modelType);
    }

    throw new Error('invalid-store-type');
  },

  replace: <T extends ObjectType>(obj: T): Promise<T | null> => {
    if (_config?.dbType === DbType.mem) {
      return memStore.replace<T>(obj);
    }

    if (_config?.dbType === DbType.rxdb) {
      return rxDbStore.replace<T>(obj);
    }

    throw new Error('invalid-store-type');
  },

  update: <T extends ObjectType = ObjectType>(
    changes: Partial<T>,
    modelType: ModelType,
  ): Promise<T | null> => {
    if (!changes.updatedAt) {
      changes.updatedAt = new Date();
    }

    if (_config?.dbType === DbType.mem) {
      return memStore.update<T>(changes, modelType);
    }

    if (_config?.dbType === DbType.rxdb) {
      return rxDbStore.update<T>(changes, modelType);
    }

    throw new Error('invalid-store-type');
  },
}

export default db
