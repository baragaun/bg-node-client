// import { LibSignalStores } from '../db/rxdb/libSignalStores/LibSignalStores.js';
import { ModelType } from '../enums.js';
import { BgNodeClientConfig } from './BgNodeClientConfig.js';
import { QueryResult } from './QueryResult.js';
import { Model } from '../models/Model.js';
import { MyUser } from '../models/MyUser.js';

export interface Db {
  close: () => Promise<void>;

  delete: <T extends Model = Model>(
    id: string,
    modelType: ModelType,
  ) => Promise<QueryResult<T>>;

  find: <T extends Model = Model>(
    match: Partial<T>,
    type: ModelType,
  ) => Promise<QueryResult<T>>;

  findAll: <T extends Model = Model>(
    type: ModelType,
  ) => Promise<QueryResult<T>>;

  findById: <T extends Model = Model>(
    id: string,
    modelType: ModelType,
  ) => Promise<QueryResult<T>>;

  findOne: <T extends Model = Model>(
    match: Partial<T>,
    modelType: ModelType,
  ) => Promise<QueryResult<T>>;

  init: (config: BgNodeClientConfig) => Promise<MyUser | null>;

  insert: <T extends Model = Model>(
    obj: T,
    modelType?: ModelType,
  ) => Promise<QueryResult<T>>;
  isConnected: () => boolean;
  // libSignalStores: () => LibSignalStores;

  replace: <T extends Model = Model>(
    obj: T,
    modelType?: ModelType,
  ) => Promise<QueryResult<T>>;

  update: <T extends Model = Model>(
    changes: Partial<T>,
    modelType?: ModelType,
  ) => Promise<QueryResult<T>>;

  upsert: <T extends Model = Model>(
    changes: Partial<T>,
    modelType?: ModelType,
  ) => Promise<QueryResult<T>>;
}
