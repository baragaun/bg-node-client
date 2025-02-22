import { Channel } from '../../types/models/Channel.js';
import { ChannelMessage } from '../../types/models/ChannelMessage.js';
import { ModelType } from '../../types/enums.js';
import { ObjectType, Db } from '../../types/Db.js';
import { BgChannelsWebClientConfig } from '../../types/BgChannelsWebClientConfig.js';

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

  findAll: async <T extends ObjectType = ObjectType>(type: ModelType): Promise<T[]> => {
    return getArrayForModelType(type);
  },

  insert: async <T extends ObjectType = ObjectType>(obj: T): Promise<T | null> => {
    const arr = getArrayForObject(obj);

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

    return obj;
  },

  delete: async (id: string, modelType: ModelType): Promise<void> => {
    const arr = getArrayForModelType(modelType);
    const index = arr.findIndex(obj => obj.id === id);

    if (index < 0) {
      throw new Error('not-found');
    }

    arr.splice(index, 1);
    if (modelType === ModelType.Channel) {
      messages = messages.filter(m => m.channelId !== id);
    }
  },

  findById: async <T extends ObjectType = ObjectType>(
    id: string,
    modelType: ModelType,
  ): Promise<T | null> => {
    const arr = getArrayForModelType(modelType);

    return arr.find(c => c.id === id) as T || null;
  },

  replace: async <T extends ObjectType>(obj: T): Promise<T | null> => {
    const arr = getArrayForObject(obj);
    const index = arr.findIndex(o => o.id === obj.id);

    if (index > -1) {
      arr[index] = obj;
      return obj;
    }
    arr.push(obj);

    return obj;
  },

  update: async <T extends ObjectType = ObjectType>(
    changes: Partial<T>,
    modelType: ModelType,
  ): Promise<T | null> => {
    const arr = getArrayForModelType(modelType);
    const index = arr.findIndex(o => o.id === changes.id);

    if (index < 0) {
      throw new Error('not-found');
    }

    const existingObj = arr[index];
    const updatedObject = Object.assign(existingObj, changes);
    arr[index] = updatedObject;

    return updatedObject as T;
  },
}

export default memStore
