/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/
import { ModelEventType } from '../enums.js';
export declare class ModelEvent {
    time: Date;
    modelEventType: ModelEventType;
    message: string;
    constructor(attributes?: Partial<ModelEvent>);
}
