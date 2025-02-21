import { Channel } from '../types/models/Channel.js';
import { ChannelMessage } from '../types/models/ChannelMessage.js';
import { ModelType } from '../types/enums.js';

const channels: Channel[] = [];
let messages: ChannelMessage[] = [];

type ObjectType = Channel | ChannelMessage;

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

const store = {
  getObjects: getArrayForModelType,

  // channelInvitations: [] as ChannelInvitation[],

  addObject: (obj: ObjectType): void => {
    const arr = getArrayForObject(obj);

    if (obj instanceof Channel) {
      if (Array.isArray(obj.messages) && obj.messages.length > 0) {
        messages = messages.concat(obj.messages);
      }
      delete obj.messages;
    }

    arr.push(obj);
  },

  deleteObject: (id: string, modelType: ModelType): void => {
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

  findObjectById: <T extends ObjectType>(id: string, modelType: ModelType): T | null => {
    const arr = getArrayForModelType(modelType);

    return arr.find(c => c.id === id) as T || null;
  },

  replaceObject: (obj: ObjectType): void => {
    const arr = getArrayForObject(obj);
    const index = arr.findIndex(o => o.id === obj.id);

    if (index > -1) {
      arr[index] = obj;
      return;
    }
    arr.push(obj);
  },

  updateObject: <T extends ObjectType = ObjectType>(
    changes: Partial<ObjectType>,
    modelType: ModelType,
  ): T => {
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

export default store
