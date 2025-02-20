/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/
import { BaseModelMetadata } from './BaseModelMetadata.js';
import { IBaseModel } from './IBaseModel.js';
import { ModelEvent } from './ModelEvent.js';
export declare abstract class BaseModel implements IBaseModel {
    id: string;
    adminNotes?: string | null;
    events?: ModelEvent[] | null;
    metadata?: BaseModelMetadata | null;
    createdAt: Date;
    createdBy?: string | null;
    updatedAt?: Date | null;
    updatedBy?: string | null;
    deletedAt?: Date | null;
    deletedBy?: string | null;
    protected constructor(attributes?: Partial<BaseModel> | null);
}
