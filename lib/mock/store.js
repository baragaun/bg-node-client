"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Channel_js_1 = require("../types/models/Channel.js");
const enums_js_1 = require("../types/enums.js");
const channels = [];
let messages = [];
const getArrayForObject = (obj) => {
    if (obj instanceof Channel_js_1.Channel) {
        return channels;
    }
    return messages;
};
const getArrayForModelType = (type) => {
    if (type === enums_js_1.ModelType.Channel) {
        return channels;
    }
    return messages;
};
const store = {
    getObjects: getArrayForModelType,
    // channelInvitations: [] as ChannelInvitation[],
    addObject: (obj) => {
        const arr = getArrayForObject(obj);
        if (obj instanceof Channel_js_1.Channel) {
            if (Array.isArray(obj.messages) && obj.messages.length > 0) {
                messages = messages.concat(obj.messages);
            }
            delete obj.messages;
        }
        arr.push(obj);
    },
    deleteObject: (id, modelType) => {
        const arr = getArrayForModelType(modelType);
        const index = arr.findIndex(obj => obj.id === id);
        if (index < 0) {
            throw new Error('not-found');
        }
        arr.splice(index, 1);
        if (modelType === enums_js_1.ModelType.Channel) {
            messages = messages.filter(m => m.channelId !== id);
        }
    },
    findObjectById: (id, modelType) => {
        const arr = getArrayForModelType(modelType);
        return arr.find(c => c.id === id) || null;
    },
    replaceObject: (obj) => {
        const arr = getArrayForObject(obj);
        const index = arr.findIndex(o => o.id === obj.id);
        if (index > -1) {
            arr[index] = obj;
            return;
        }
        arr.push(obj);
    },
    updateObject: (changes, modelType) => {
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
exports.default = store;
