import { BgChannelsWebClientConfig } from '../../types/BgChannelsWebClientConfig.js';
import { Channel } from '../../types/models/Channel.js';
import { ChannelMessage } from '../../types/models/ChannelMessage.js';
import { Db, ObjectType } from '../../types/Db.js';
import { ModelType, MutationType } from '../../types/enums.js';
import { MutationResult } from '../../types/MutationResult.js';
import { QueryResult } from '../../types/QueryResult.js';

const channels: Channel[] = [];
let messages: ChannelMessage[] = [];

const getArrayForObject = <T extends ObjectType = ObjectType>(obj: ObjectType): T[] => {
  if (obj instanceof Channel) {
    return channels as T[];
  }
  return messages as T[];
};

const getArrayForModelType = <T extends ObjectType = ObjectType>(type: ModelType): T[] => {
  if (type === ModelType.Channel) {
    return channels as T[];
  }
  return messages as T[];
};

const memStore: Db = {
  init: async (config: BgChannelsWebClientConfig): Promise<void> => {
    console.log('memStore.init called.', config)
  },

  findAll: async <T extends ObjectType = ObjectType>(type: ModelType): Promise<QueryResult<T>> => {
    const arr = getArrayForModelType<T>(type);

    if (!arr) {
      return {
        error: 'not-found',
      }
    }

    return { objects: arr };
  },

  insert: async <T extends ObjectType = ObjectType>(obj: T): Promise<MutationResult<T>> => {
    const arr = getArrayForObject<T>(obj);

    if (!obj.id) {
      obj.id = crypto.randomUUID();
    }

    if (obj instanceof Channel) {
      if (Array.isArray(obj.messages) && obj.messages.length > 0) {
        messages = messages.concat(obj.messages);
      }
      delete obj.messages;
    }

    arr.push(obj);

    return { operation: MutationType.create, object: obj };
  },

  delete: async (id: string, modelType: ModelType): Promise<MutationResult> => {
    const arr = getArrayForModelType(modelType);
    const index = arr.findIndex(obj => obj.id === id);

    if (index < 0) {
      return { operation: MutationType.delete, error: 'not-found' };
    }

    arr.splice(index, 1);
    if (modelType === ModelType.Channel) {
      messages = messages.filter(m => m.channelId !== id);
    }

    return { operation: MutationType.delete };
  },

  findById: async <T extends ObjectType = ObjectType>(
    id: string,
    modelType: ModelType,
  ): Promise<QueryResult<T>> => {
    const arr = getArrayForModelType(modelType);

    return {
      object: arr.find(c => c.id === id) as T || null,
    };
  },

  replace: async <T extends ObjectType>(obj: T): Promise<MutationResult<T>> => {
    const result = { operation: MutationType.replace, object: obj };
    const arr = getArrayForObject(obj);
    const index = arr.findIndex(o => o.id === obj.id);

    if (index > -1) {
      arr[index] = obj;
      return result;
    }
    arr.push(obj);

    return result;
  },

  update: async <T extends ObjectType = ObjectType>(
    changes: Partial<T>,
    modelType: ModelType,
  ): Promise<MutationResult<T>> => {
    const result: MutationResult<T> = { operation: MutationType.update };
    const arr = getArrayForModelType(modelType);
    const index = arr.findIndex(o => o.id === changes.id);

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
}

export default memStore
