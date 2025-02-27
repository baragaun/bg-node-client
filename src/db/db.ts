import { BgNodeClientConfig } from '../types/BgNodeClientConfig.js';
import { ModelType, DbType } from '../types/enums.js';
import { MutationResult } from '../types/MutationResult.js';
import { Db } from '../types/Db.js';
import { Model } from '../types/Model.js';
import { QueryResult } from '../types/QueryResult.js';
import memStore from './mem/memStore.js';
import rxDbStore from './rxdb/rxDbStore.js';

let _config: BgNodeClientConfig | undefined;

const db: Db = {
  delete: (id: string, modelType: ModelType): Promise<MutationResult> => {
    if (_config?.dbType === DbType.mem) {
      return memStore.delete(id, modelType);
    }

    if (_config?.dbType === DbType.rxdb) {
      return rxDbStore.delete(id, modelType);
    }

    throw new Error('invalid-store-type');
  },

  find: async <T extends Model = Model>(
    match: Partial<T>,
    type: ModelType,
  ): Promise<QueryResult<T>> => {
    if (_config?.dbType === DbType.mem) {
      return memStore.find<T>(match, type);
    }

    if (_config?.dbType === DbType.rxdb) {
      return rxDbStore.find<T>(match, type);
    }

    throw new Error('invalid-store-type');
  },

  findAll: async <T extends Model = Model>(type: ModelType): Promise<QueryResult<T>> => {
    if (_config?.dbType === DbType.mem) {
      return memStore.findAll<T>(type);
    }

    if (_config?.dbType === DbType.rxdb) {
      return rxDbStore.findAll<T>(type);
    }

    throw new Error('invalid-store-type');
  },

  findById: <T extends Model>(
    id: string,
    modelType: ModelType,
  ): Promise<QueryResult<T>> => {
    if (_config?.dbType === DbType.mem) {
      return memStore.findById<T>(id, modelType);
    }

    if (_config?.dbType === DbType.rxdb) {
      return rxDbStore.findById<T>(id, modelType);
    }

    throw new Error('invalid-store-type');
  },

  findOne: <T extends Model>(
    match: Partial<T>,
    modelType: ModelType,
  ): Promise<QueryResult<T>> => {
    if (_config?.dbType === DbType.mem) {
      return memStore.findOne<T>(match, modelType);
    }

    if (_config?.dbType === DbType.rxdb) {
      return rxDbStore.findOne<T>(match, modelType);
    }

    throw new Error('invalid-store-type');
  },

  init: async (config: BgNodeClientConfig): Promise<void> => {
    _config = config;

    if (_config?.dbType === DbType.mem) {
      return memStore.init(config);
    }

    if (_config?.dbType === DbType.rxdb) {
      return rxDbStore.init(config);
    }

    throw new Error('invalid-store-type');
  },

  insert: <T extends Model = Model>(obj: T): Promise<MutationResult<T>> => {
    if (!obj.createdAt) {
      obj.createdAt = new Date().toISOString();
    }

    if (!obj.updatedAt) {
      obj.updatedAt = new Date().toISOString();
    }

    if (_config?.dbType === DbType.mem) {
      return memStore.insert<T>(obj);
    }

    if (_config?.dbType === DbType.rxdb) {
      return rxDbStore.insert<T>(obj);
    }

    throw new Error('invalid-store-type');
  },

  isConnected: (): boolean => {
    if (_config?.dbType === DbType.mem) {
      return true;
    }

    if (_config?.dbType === DbType.rxdb) {
      return rxDbStore.isConnected();
    }

    return false;
  },

  replace: <T extends Model>(obj: T): Promise<MutationResult<T>> => {
    if (_config?.dbType === DbType.mem) {
      return memStore.replace<T>(obj);
    }

    if (_config?.dbType === DbType.rxdb) {
      return rxDbStore.replace<T>(obj);
    }

    throw new Error('invalid-store-type');
  },

  update: <T extends Model = Model>(
    changes: Partial<T>,
    modelType: ModelType,
  ): Promise<MutationResult<T>> => {
    if (!changes.updatedAt) {
      changes.updatedAt = new Date().toISOString();
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
