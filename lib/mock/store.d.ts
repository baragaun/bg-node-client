import { Channel } from '../types/models/Channel.js';
import { ChannelMessage } from '../types/models/ChannelMessage.js';
import { ModelType } from '../types/enums.js';
type ObjectType = Channel | ChannelMessage;
declare const store: {
    getObjects: <T extends ObjectType = ObjectType>(type: ModelType) => T[];
    addObject: (obj: ObjectType) => void;
    deleteObject: (id: string, modelType: ModelType) => void;
    findObjectById: <T extends ObjectType>(id: string, modelType: ModelType) => T | null;
    replaceObject: (obj: ObjectType) => void;
    updateObject: <T extends ObjectType = ObjectType>(changes: Partial<ObjectType>, modelType: ModelType) => T;
};
export default store;
