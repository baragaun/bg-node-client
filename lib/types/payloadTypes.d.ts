import { ModelType } from '../enums.js';
import { BaseModel } from '../models/BaseModel.js';
import { ServiceRequest } from '../models/ServiceRequest.js';
export interface BaseNatsPayload {
    serviceRequest?: ServiceRequest;
}
export interface NatsPayloadModelChanged<T extends BaseModel = BaseModel> extends BaseNatsPayload {
    objectId: string;
    modelType: ModelType;
    changeType: 'created' | 'updated' | 'deleted';
    model?: T;
}
