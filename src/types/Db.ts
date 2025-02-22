import { BgChannelsWebClientConfig } from './BgChannelsWebClientConfig.js';
import { Channel } from './models/Channel.js';
import { ChannelMessage } from './models/ChannelMessage.js';
import { ModelType } from './enums.js';
import { MutationResult } from './MutationResult.js';
import { QueryResult } from './QueryResult.js';

export type ObjectType = Channel | ChannelMessage;

export interface Db {
  findAll: <T extends ObjectType = ObjectType>(type: ModelType) => Promise<QueryResult<T>>;
  init: (config: BgChannelsWebClientConfig) => Promise<void>;
  insert: <T extends ObjectType = ObjectType>(obj: T) => Promise<MutationResult<T>>;
  delete: (id: string, modelType: ModelType) => Promise<MutationResult>;

  findById: <T extends ObjectType = ObjectType>(
    id: string,
    modelType: ModelType,
  ) => Promise<QueryResult<T>>;

  replace: <T extends ObjectType>(obj: T) => Promise<MutationResult<T>>;

  update: <T extends ObjectType = ObjectType>(
    changes: Partial<T>,
    modelType: ModelType,
  ) => Promise<MutationResult<T>>;
}

