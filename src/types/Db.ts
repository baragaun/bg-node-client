import { BgChannelsWebClientConfig } from './BgChannelsWebClientConfig.js';
import { ModelType } from './enums.js';
import { MutationResult } from './MutationResult.js';
import { QueryResult } from './QueryResult.js';
import { Model } from './Model.js';

export interface Db {
  init: (config: BgChannelsWebClientConfig) => Promise<void>;
  insert: <T extends Model = Model>(obj: T) => Promise<MutationResult<T>>;
  isConnected: () => boolean;
  delete: (id: string, modelType: ModelType) => Promise<MutationResult>;

  find: <T extends Model = Model>(
    match: Partial<T>,
    type: ModelType,
  ) => Promise<QueryResult<T>>

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
  ) => Promise<QueryResult<T>>

  replace: <T extends Model>(obj: T) => Promise<MutationResult<T>>;

  update: <T extends Model = Model>(
    changes: Partial<T>,
    modelType: ModelType,
  ) => Promise<MutationResult<T>>;
}

