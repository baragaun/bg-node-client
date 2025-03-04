import { Channel } from '../../types/models/Channel.js';
import { ModelType, MutationType } from '../../types/enums.js';
import db from '../rxdb/helpers/db.js';
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
    init: async (
    // @ts-ignore
    myUserId, config) => {
        console.log('memStore.init called.', config);
        return null;
    },
    isConnected() {
        return true;
    },
    delete: async (id, modelType) => {
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
    find: async (match, type) => {
        const arr = getArrayForModelType(type);
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
    findAll: async (type) => {
        const arr = getArrayForModelType(type);
        if (!arr) {
            return {
                error: 'not-found',
            };
        }
        return { objects: arr };
    },
    findOne: async (match, modelType) => {
        const arr = getArrayForModelType(modelType);
        // todo: implement
        return {
            object: arr.find(c => c.id === match.id) || null,
        };
    },
    findById: async (id, modelType) => {
        const arr = getArrayForModelType(modelType);
        return {
            object: arr.find(c => c.id === id) || null,
        };
    },
    insert: async (obj) => {
        const arr = getArrayForObject(obj);
        if (!obj.id) {
            obj.id = crypto.randomUUID();
        }
        arr.push(obj);
        return { operation: MutationType.create, object: obj };
    },
    libSignalStores: db.getLibSignalStores,
    replace: async (obj) => {
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
    update: async (changes, modelType) => {
        const result = { operation: MutationType.update };
        const arr = getArrayForModelType(modelType);
        const index = arr.findIndex(o => o.id === changes.id);
        if (index < 0) {
            result.error = 'not-found';
            return result;
        }
        const existingObj = arr[index];
        const updatedObject = Object.assign(existingObj, changes);
        arr[index] = updatedObject;
        result.object = updatedObject;
        return result;
    }
};
export default memStore;
//# sourceMappingURL=memStore.js.map