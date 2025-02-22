import { Channel } from '../../types/models/Channel.js';
import { ModelType } from '../../types/enums.js';
const channels = [];
let messages = [];
const getArrayForObject = (obj) => {
    if (obj instanceof Channel) {
        return channels;
    }
    return messages;
};
const getArrayForModelType = (type) => {
    if (type === ModelType.Channel) {
        return channels;
    }
    return messages;
};
const memStore = {
    init: async (config) => {
        console.log('memStore.init called.', config);
    },
    findAll: async (type) => {
        return getArrayForModelType(type);
    },
    insert: async (obj) => {
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
    delete: async (id, modelType) => {
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
    findById: async (id, modelType) => {
        const arr = getArrayForModelType(modelType);
        return arr.find(c => c.id === id) || null;
    },
    replace: async (obj) => {
        const arr = getArrayForObject(obj);
        const index = arr.findIndex(o => o.id === obj.id);
        if (index > -1) {
            arr[index] = obj;
            return obj;
        }
        arr.push(obj);
        return obj;
    },
    update: async (changes, modelType) => {
        const arr = getArrayForModelType(modelType);
        const index = arr.findIndex(o => o.id === changes.id);
        if (index < 0) {
            throw new Error('not-found');
        }
        const existingObj = arr[index];
        const updatedObject = Object.assign(existingObj, changes);
        arr[index] = updatedObject;
        return updatedObject;
    },
};
export default memStore;
//# sourceMappingURL=memStore.js.map