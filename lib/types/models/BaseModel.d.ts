/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/
import { BaseModelMetadata } from './BaseModelMetadata.js';
import { IBaseModel } from './IBaseModel.js';
import { Model } from './Model.js';
export declare abstract class BaseModel extends Model implements IBaseModel {
    adminNotes?: string | null;
    metadata?: BaseModelMetadata | null;
    protected constructor(attributes?: Partial<BaseModel> | null);
}
