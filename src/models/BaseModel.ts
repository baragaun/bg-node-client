/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/
import { BaseModelMetadata } from './BaseModelMetadata.js';
import { IBaseModel } from './IBaseModel.js';
import { Model } from './Model.js';

export abstract class BaseModel extends Model implements IBaseModel {
  public adminNotes?: string | null;
  public metadata?: BaseModelMetadata | null;

  protected constructor(attributes?: Partial<BaseModel> | null) {
    super(attributes);

    if (attributes) {
      if (attributes.adminNotes) {
        this.adminNotes = attributes.adminNotes;
      }
      if (attributes.metadata) {
        this.metadata = attributes.metadata;
      }
    }
  }
}
