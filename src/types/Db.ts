// import { LibSignalStores } from '../db/rxdb/libSignalStores/LibSignalStores.js';
import { ModelType } from '../enums.js';
import { BgNodeClientConfig } from './BgNodeClientConfig.js';
import { Model } from './Model.js';
import { MyUser } from './models/MyUser.js';
import { MutationResult } from './MutationResult.js';
import { QueryResult } from './QueryResult.js';

export interface Db {
  init: (config: BgNodeClientConfig) => Promise<MyUser | null>;

  insert: <T extends Model = Model>(obj: T, modelType?: ModelType) => Promise<MutationResult<T>>;
  isConnected: () => boolean;
  delete: (id: string, modelType: ModelType) => Promise<MutationResult>;

  find: <T extends Model = Model>(match: Partial<T>, type: ModelType) => Promise<QueryResult<T>>;

  findAll: <T extends Model = Model>(type: ModelType) => Promise<QueryResult<T>>;

  findById: <T extends Model = Model>(id: string, modelType: ModelType) => Promise<QueryResult<T>>;

  findOne: <T extends Model = Model>(
    match: Partial<T>,
    modelType: ModelType,
  ) => Promise<QueryResult<T>>;

  // libSignalStores: () => LibSignalStores;

  replace: <T extends Model>(obj: T, modelType?: ModelType) => Promise<MutationResult<T>>;

  update: <T extends Model = Model>(
    changes: Partial<T>,
    modelType?: ModelType,
  ) => Promise<MutationResult<T>>;
}
