/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/
import { BaseModelMetadata } from './BaseModelMetadata.js';
import { IBaseModel } from './IBaseModel.js';
import { Model } from './Model.js';

export abstract class BaseModel extends Model implements IBaseModel {
  // @DISABLEDbg-codegen:class.attr >>Note: Code is generated between these markers<<
  public adminNotes?: string | null;
  public metadata?: BaseModelMetadata | null;
  // @DISABLEDbg-codegen:/class.attr >>Note: Code is generated between these markers<<

  protected constructor(attributes?: Partial<BaseModel> | null) {
    super(attributes);

    if (attributes) {
      // @DISABLEDbg-codegen:class.const.attr >>Note: Code is generated between these markers<<
      if (attributes.adminNotes !== undefined) {
        this.adminNotes = attributes.adminNotes;
      }
      if (attributes.metadata !== undefined) {
        this.metadata = attributes.metadata;
      }
      // @DISABLEDbg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
    }
  }
}
