import { ModelType, MutationType } from '../../enums.js';
import { BgNodeClientConfig } from '../../types/BgNodeClientConfig.js';
import { Db } from '../../types/Db.js';
import { Channel } from '../../types/models/Channel.js';
import { ChannelMessage } from '../../types/models/ChannelMessage.js';
import { Model } from '../../types/models/Model.js';
import { MyUser } from '../../types/models/MyUser.js';
import { MutationResult } from '../../types/MutationResult.js';
import { QueryResult } from '../../types/QueryResult.js';

const channels: Channel[] = [];
let messages: ChannelMessage[] = [];

const getArrayForObject = <T extends Model = Model>(obj: T, modelType?: ModelType): T[] => {
  if (modelType) {
    return getArrayForModelType<T>(modelType);
  }

  if (obj instanceof Channel) {
    return channels as unknown as T[];
  }
  return messages as unknown as T[];
};

const getArrayForModelType = <T extends Model = Model>(type: ModelType): T[] => {
  if (type === ModelType.Channel) {
    return channels as unknown as T[];
  }
  return messages as unknown as T[];
};

const memStore: Db = {
  init: async (config: BgNodeClientConfig): Promise<MyUser | null> => {
    console.log('memStore.init called.', config);

    return null;
  },

  isConnected(): boolean {
    return true;
  },

  delete: async <T extends Model = Model>(
    id: string,
    modelType: ModelType,
  ): Promise<MutationResult<T>> => {
    const arr = getArrayForModelType(modelType);
    const index = arr.findIndex((obj) => obj.id === id);

    if (index < 0) {
      return { operation: MutationType.delete, error: 'not-found' };
    }

    arr.splice(index, 1);
    if (modelType === ModelType.Channel) {
      messages = messages.filter((m) => m.channelId !== id);
    }

    return { operation: MutationType.delete };
  },

  find: async <T extends Model = Model>(
    match: Partial<T>,
    type: ModelType,
  ): Promise<QueryResult<T>> => {
    const arr = getArrayForModelType<T>(type);

    if (!arr) {
      return {
        error: 'not-found',
      };
    }

    // todo: implement based on model
    if (!match) {
      return {
        objects: arr,
      };
    }

    return { objects: arr };
  },

  findAll: async <T extends Model = Model>(type: ModelType): Promise<QueryResult<T>> => {
    const arr = getArrayForModelType<T>(type);

    if (!arr) {
      return {
        error: 'not-found',
      };
    }

    return { objects: arr };
  },

  findOne: async <T extends Model = Model>(
    match: Partial<T>,
    modelType: ModelType,
  ): Promise<QueryResult<T>> => {
    const arr = getArrayForModelType(modelType);

    // todo: implement
    return {
      object: (arr.find((c) => c.id === match.id) as T) || null,
    };
  },

  findById: async <T extends Model = Model>(
    id: string,
    modelType: ModelType,
  ): Promise<QueryResult<T>> => {
    const arr = getArrayForModelType(modelType);

    return {
      object: (arr.find((c) => c.id === id) as T) || null,
    };
  },

  insert: async <T extends Model = Model>(
    obj: T,
    modelType?: ModelType,
  ): Promise<MutationResult<T>> => {
    const arr = getArrayForObject<T>(obj, modelType);

    if (!obj.id) {
      obj.id = crypto.randomUUID().replaceAll('-', '');
    }

    arr.push(obj);

    return { operation: MutationType.create, object: obj };
  },

  // libSignalStores: db.getLibSignalStores,

  replace: async <T extends Model = Model>(
    obj: T,
    modelType?: ModelType,
  ): Promise<MutationResult<T>> => {
    const result = { operation: MutationType.replace, object: obj };
    const arr = getArrayForObject(obj, modelType);
    const index = arr.findIndex((o) => o.id === obj.id);

    if (index > -1) {
      arr[index] = obj;
      return result;
    }
    arr.push(obj);

    return result;
  },

  update: async <T extends Model = Model>(
    changes: Partial<T>,
    modelType?: ModelType,
  ): Promise<MutationResult<T>> => {
    const result: MutationResult<T> = { operation: MutationType.update };
    const arr = getArrayForObject(changes as T, modelType);
    const index = arr.findIndex((o) => o.id === changes.id);

    if (index < 0) {
      result.error = 'not-found';
      return result;
    }

    const existingObj = arr[index];
    const updatedObject = Object.assign(existingObj, changes) as T;
    arr[index] = updatedObject;
    result.object = updatedObject;

    return result;
  },
};

export default memStore;
