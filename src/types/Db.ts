import { BgChannelsWebClientConfig } from './BgChannelsWebClientConfig.js';
import { Channel } from './models/Channel.js';
import { ChannelMessage } from './models/ChannelMessage.js';
import { ModelType } from './enums.js';

export type ObjectType = Channel | ChannelMessage;

export interface Db {
  findAll: <T extends ObjectType = ObjectType>(type: ModelType) => Promise<T[]>;
  init: (config: BgChannelsWebClientConfig) => Promise<void>;
  insert: <T extends ObjectType = ObjectType>(obj: T) => Promise<T | null>;
  delete: (id: string, modelType: ModelType) => Promise<void>;

  findById: <T extends ObjectType = ObjectType>(
    id: string,
    modelType: ModelType,
  ) => Promise<T | null>;

  replace: <T extends ObjectType>(obj: T) => Promise<T | null>;

  update: <T extends ObjectType = ObjectType>(
    changes: Partial<T>,
    modelType: ModelType,
  ) => Promise<T | null>;
}

