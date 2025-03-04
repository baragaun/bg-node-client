/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/
import { BaseModelMetadata } from './BaseModelMetadata.js';
import { IBaseModel } from './IBaseModel.js';
export declare abstract class BaseModel implements IBaseModel {
    id: string;
    adminNotes?: string | null;
    metadata?: BaseModelMetadata | null;
    createdAt: string;
    createdBy?: string | null;
    updatedAt?: string | null;
    updatedBy?: string | null;
    deletedAt?: string | null;
    deletedBy?: string | null;
    protected constructor(attributes?: Partial<BaseModel> | null);
}
