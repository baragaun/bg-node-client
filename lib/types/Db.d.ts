import { MangoQuery } from 'rxdb';
import { ModelType } from '../enums.js';
import { BgNodeClientConfig } from './BgNodeClientConfig.js';
import { QueryResult } from './QueryResult.js';
import { Model } from '../models/Model.js';
import { MyUser } from '../models/MyUser.js';
export interface Db {
    close: () => Promise<void>;
    count: <T extends Model = Model>(match: Partial<T>, modelType: ModelType) => Promise<QueryResult<number>>;
    delete: <T extends Model = Model>(id: string, modelType: ModelType) => Promise<QueryResult<T>>;
    find: <T extends Model = Model>(query: MangoQuery<T>, modelType: ModelType) => Promise<QueryResult<T>>;
    findByMatch: <T extends Model = Model>(match: Partial<T>, type: ModelType) => Promise<QueryResult<T>>;
    findAll: <T extends Model = Model>(type: ModelType) => Promise<QueryResult<T>>;
    findById: <T extends Model = Model>(id: string, modelType: ModelType) => Promise<QueryResult<T>>;
    findOne: <T extends Model = Model>(match: Partial<T>, modelType: ModelType) => Promise<QueryResult<T>>;
    findUpdatedAt: (id: string, modelType: ModelType) => Promise<QueryResult<string>>;
    init: (config: BgNodeClientConfig) => Promise<MyUser | null>;
    insert: <T extends Model = Model>(obj: Partial<T>, modelType?: ModelType) => Promise<QueryResult<T>>;
    isConnected: () => boolean;
    replace: <T extends Model = Model>(obj: T, modelType?: ModelType) => Promise<QueryResult<T>>;
    update: <T extends Model = Model>(changes: Partial<T>, modelType?: ModelType) => Promise<QueryResult<T>>;
    upsert: <T extends Model = Model>(changes: Partial<T>, modelType?: ModelType) => Promise<QueryResult<T>>;
}
