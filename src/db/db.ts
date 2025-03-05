import { BgNodeClientConfig } from '../types/BgNodeClientConfig.js';
import { ModelType, DbType } from '../types/enums.js';
import { MutationResult } from '../types/MutationResult.js';
import { Db } from '../types/Db.js';
import { Model } from '../types/Model.js';
import { MyUser } from '../types/models/MyUser.js';
import { QueryResult } from '../types/QueryResult.js';
import data from '../helpers/data.js';
import memStore from './mem/memStore.js';
import rxDbStore from './rxdb/rxDbStore.js';
import rxdbHelpers from './rxdb/helpers/db.js';

const db: Db = {
  delete: (id: string, modelType: ModelType): Promise<MutationResult> => {
    if (data.config()?.dbType === DbType.mem) {
      return memStore.delete(id, modelType);
    }

    if (data.config()?.dbType === DbType.rxdb) {
      return rxDbStore.delete(id, modelType);
    }

    throw new Error('invalid-store-type');
  },

  find: async <T extends Model = Model>(match: Partial<T>, type: ModelType): Promise<QueryResult<T>> => {
    if (data.config()?.dbType === DbType.mem) {
      return memStore.find<T>(match, type);
    }

    if (data.config()?.dbType === DbType.rxdb) {
      return rxDbStore.find<T>(match, type);
    }

    throw new Error('invalid-store-type');
  },

  findAll: async <T extends Model = Model>(type: ModelType): Promise<QueryResult<T>> => {
    if (data.config()?.dbType === DbType.mem) {
      return memStore.findAll<T>(type);
    }

    if (data.config()?.dbType === DbType.rxdb) {
      return rxDbStore.findAll<T>(type);
    }

    throw new Error('invalid-store-type');
  },

  findById: <T extends Model>(id: string, modelType: ModelType): Promise<QueryResult<T>> => {
    if (data.config()?.dbType === DbType.mem) {
      return memStore.findById<T>(id, modelType);
    }

    if (data.config()?.dbType === DbType.rxdb) {
      return rxDbStore.findById<T>(id, modelType);
    }

    throw new Error('invalid-store-type');
  },

  findOne: <T extends Model>(match: Partial<T>, modelType: ModelType): Promise<QueryResult<T>> => {
    if (data.config()?.dbType === DbType.mem) {
      return memStore.findOne<T>(match, modelType);
    }

    if (data.config()?.dbType === DbType.rxdb) {
      return rxDbStore.findOne<T>(match, modelType);
    }

    throw new Error('invalid-store-type');
  },

  init: async (config: BgNodeClientConfig): Promise<MyUser | null | undefined> => {
    if (data.config()?.dbType === DbType.mem) {
      return memStore.init(config);
    }

    if (data.config()?.dbType === DbType.rxdb) {
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

    if (data.config()?.dbType === DbType.mem) {
      return memStore.insert<T>(obj);
    }

    if (data.config()?.dbType === DbType.rxdb) {
      return rxDbStore.insert<T>(obj);
    }

    throw new Error('invalid-store-type');
  },

  isConnected: (): boolean => {
    if (data.config()?.dbType === DbType.mem) {
      return true;
    }

    if (data.config()?.dbType === DbType.rxdb) {
      return rxDbStore.isConnected();
    }

    return false;
  },

  libSignalStores: rxdbHelpers.getLibSignalStores,

  replace: <T extends Model>(obj: T): Promise<MutationResult<T>> => {
    if (data.config()?.dbType === DbType.mem) {
      return memStore.replace<T>(obj);
    }

    if (data.config()?.dbType === DbType.rxdb) {
      return rxDbStore.replace<T>(obj);
    }

    throw new Error('invalid-store-type');
  },

  update: <T extends Model = Model>(changes: Partial<T>, modelType: ModelType): Promise<MutationResult<T>> => {
    if (!changes.updatedAt) {
      changes.updatedAt = new Date().toISOString();
    }

    if (data.config()?.dbType === DbType.mem) {
      return memStore.update<T>(changes, modelType);
    }

    if (data.config()?.dbType === DbType.rxdb) {
      return rxDbStore.update<T>(changes, modelType);
    }

    throw new Error('invalid-store-type');
  },
};

export default db;
